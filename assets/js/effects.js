/* ==========================================================================
   Wireless Supply C.A. — Efectos visuales y microinteracciones
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('has-effects');

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  const hasGSAP = Boolean(window.gsap);
  const hasScrollTrigger = Boolean(window.ScrollTrigger);

  if (hasGSAP && hasScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  /* ------------------------------------------------------------------------
     Capas de fondo, ruido y progreso de scroll
     ------------------------------------------------------------------------ */
  const bg = document.createElement('div');
  bg.className = 'site-bg';
  bg.setAttribute('aria-hidden', 'true');
  document.body.prepend(bg);

  const noise = document.createElement('div');
  noise.className = 'site-noise';
  noise.setAttribute('aria-hidden', 'true');
  document.body.prepend(noise);

  const progress = document.createElement('div');
  progress.id = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const progressDot = document.createElement('div');
  progressDot.id = 'scroll-progress-dot';
  progressDot.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progressDot);

  const header = document.querySelector('header');

  function updateScrollUI() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progress.style.transform = `scaleX(${ratio})`;
    progressDot.style.transform = `translate3d(${ratio * window.innerWidth}px, 0, 0)`;
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('resize', updateScrollUI);
  updateScrollUI();

  /* ------------------------------------------------------------------------
     Intro coreografiada del hero y cabeceras de página
     ------------------------------------------------------------------------ */
  function initHeroIntro() {
    if (!hasGSAP) return;

    const hero = document.querySelector('[data-hero]');
    if (!hero) return;

    const items = hero.querySelectorAll('[data-hero-item]');
    if (!items.length) return;

    window.gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.08 }).from(items, {
      opacity: 0,
      y: 28,
      duration: 0.9,
      stagger: 0.08,
      clearProps: 'opacity,transform',
    });
  }

  initHeroIntro();

  /* ------------------------------------------------------------------------
     Reveals al hacer scroll
     ------------------------------------------------------------------------ */
  const revealTargets = [
    ...document.querySelectorAll('[data-reveal]'),
    ...document.querySelectorAll('[data-stagger] > *'),
  ];

  document.querySelectorAll('[data-stagger]').forEach((group) => {
    [...group.children].forEach((child, index) => {
      child.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;
    });
  });

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------------
     Revelado cinematográfico de imágenes y parallax de scroll
     ------------------------------------------------------------------------ */
  function initImageReveals() {
    const targets = document.querySelectorAll('[data-image-reveal]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    /* El clip-path del propio elemento hace que IntersectionObserver lo
       considere no visible; observamos su contenedor padre. */
    const observedTargets = new Map();

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (observedTargets.get(entry.target) || []).forEach((el) => {
              el.classList.add('is-visible');
            });
            imageObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((el) => {
      const trigger = el.parentElement || el;
      if (!observedTargets.has(trigger)) observedTargets.set(trigger, []);
      observedTargets.get(trigger).push(el);
      imageObserver.observe(trigger);
    });

    /* Red de seguridad: si el observer no dispara, la imagen nunca queda oculta. */
    window.setTimeout(() => {
      targets.forEach((el) => el.classList.add('is-visible'));
    }, 3000);
  }

  initImageReveals();

  function initParallax() {
    if (!hasGSAP || !hasScrollTrigger) return;

    const setup = () => {
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const strength = parseFloat(el.getAttribute('data-parallax')) || 0.08;
        const distance = Math.max(12, Math.min(48, strength * 300));

        window.gsap.fromTo(
          el,
          { y: distance },
          {
            y: -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          }
        );
      });
    };

    if (typeof window.gsap.matchMedia === 'function') {
      window.gsap.matchMedia().add('(min-width: 768px)', setup);
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      setup();
    }
  }

  initParallax();

  window.addEventListener('load', () => {
    if (hasScrollTrigger) window.ScrollTrigger.refresh();
  });

  /* ------------------------------------------------------------------------
     Texto “decode” en etiquetas de sección
     ------------------------------------------------------------------------ */
  function initTextScramble() {
    const targets = document.querySelectorAll('[data-scramble]');
    if (!targets.length) return;

    const glyphs = '01<>/\\[]{}#%&*+=-_';

    function scramble(el) {
      const finalText = el.textContent.trim();
      if (!finalText) return;

      el.setAttribute('aria-label', finalText);
      const duration = Math.min(900, 320 + finalText.length * 16);
      const start = performance.now();

      function frame(now) {
        const progressValue = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progressValue * finalText.length);
        let output = '';

        for (let index = 0; index < finalText.length; index += 1) {
          const char = finalText[index];
          if (char === ' ') {
            output += ' ';
          } else if (index < revealed) {
            output += char;
          } else {
            output += glyphs[Math.floor(Math.random() * glyphs.length)];
          }
        }

        el.textContent = output;

        if (progressValue < 1) {
          requestAnimationFrame(frame);
        } else {
          el.textContent = finalText;
          el.removeAttribute('aria-label');
        }
      }

      requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) {
      targets.forEach(scramble);
      return;
    }

    const scrambleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            scrambleObserver.unobserve(target);
            window.setTimeout(() => scramble(target), 160);
          }
        });
      },
      { threshold: 0.6 }
    );

    targets.forEach((el) => scrambleObserver.observe(el));
  }

  initTextScramble();

  /* ------------------------------------------------------------------------
     Contadores
     ------------------------------------------------------------------------ */
  const counters = document.querySelectorAll('[data-counter]');

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-counter'));
    const decimals = (el.getAttribute('data-counter').split('.')[1] || '').length;
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = prefix + value + suffix;

      if (progressValue < 1) {
        requestAnimationFrame(frame);
      } else {
        el.classList.add('counter-done');
        window.setTimeout(() => el.classList.remove('counter-done'), 1000);
      }
    }

    requestAnimationFrame(frame);
  }

  if (counters.length) {
    if (!('IntersectionObserver' in window)) {
      counters.forEach((el) => {
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const prefix = el.getAttribute('data-counter-prefix') || '';
        el.textContent = prefix + el.getAttribute('data-counter') + suffix;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  /* ------------------------------------------------------------------------
     Tilt 3D + spotlight en tarjetas
     ------------------------------------------------------------------------ */
  if (finePointer) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        const rotateX = ((y / rect.height) - 0.5) * -6;

        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);

        if (hasGSAP) {
          window.gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 900,
            duration: 0.45,
            ease: 'power2.out',
          });
        } else {
          card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });

      card.addEventListener('pointerleave', () => {
        if (hasGSAP) {
          window.gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' });
        } else {
          card.style.transform = '';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Botones magnéticos
     ------------------------------------------------------------------------ */
  if (finePointer && hasGSAP) {
    document.querySelectorAll('[data-magnetic]').forEach((button) => {
      const strength = 0.18;
      button.addEventListener('pointermove', (event) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * strength;
        const y = (event.clientY - rect.top - rect.height / 2) * strength;
        window.gsap.to(button, { x, y, duration: 0.4, ease: 'power2.out' });
      });
      button.addEventListener('pointerleave', () => {
        window.gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  /* ------------------------------------------------------------------------
     Cursor glow (solo escritorio)
     ------------------------------------------------------------------------ */
  if (finePointer && isDesktop) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursorDot);

    const interactiveSelector = 'a, button, [role="button"], input, select, textarea, summary';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('pointermove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.classList.add('is-active');
      cursorDot.classList.add('is-active');
    });

    document.addEventListener('pointerover', (event) => {
      if (event.target.closest(interactiveSelector)) cursorDot.classList.add('is-hover');
    });

    document.addEventListener('pointerout', (event) => {
      const interactive = event.target.closest(interactiveSelector);
      if (interactive && !interactive.contains(event.relatedTarget)) {
        cursorDot.classList.remove('is-hover');
      }
    });

    function renderCursor() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }

    renderCursor();
  }

  /* ------------------------------------------------------------------------
     Canvas de red de fibra en el hero
     ------------------------------------------------------------------------ */
  function initHeroCanvas() {
    const container = document.getElementById('hero-canvas');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let animationId = null;
    let visible = true;
    let pointer = { x: 0, y: 0 };

    function resize() {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    }

    function createNodes() {
      const count = Math.max(18, Math.min(46, Math.round((width * height) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.8 + 0.8,
      }));
    }

    function draw() {
      animationId = null;
      if (!visible) return;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(0, 210, 255, 0.7)');
      gradient.addColorStop(0.55, 'rgba(41, 143, 194, 0.35)');
      gradient.addColorStop(1, 'rgba(125, 211, 252, 0.15)');

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.x += pointer.x * 0.015;
        node.y += pointer.y * 0.015;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(125, 211, 252, 0.55)';
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = (1 - distance / 120) * 0.45;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function start() {
      if (!animationId) animationId = requestAnimationFrame(draw);
    }

    function stop() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    const rect = container.getBoundingClientRect();
    pointer = { x: rect.width / 2, y: rect.height / 2 };

    const heroSection = container.closest('section') || container;

    heroSection.addEventListener('pointermove', (event) => {
      const r = container.getBoundingClientRect();
      pointer = {
        x: (event.clientX - r.left - r.width / 2) * 0.6,
        y: (event.clientY - r.top - r.height / 2) * 0.6,
      };
    });

    heroSection.addEventListener('pointerleave', () => {
      pointer = { x: 0, y: 0 };
    });

    if ('IntersectionObserver' in window) {
      const visibilityObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible = entry.isIntersecting;
            if (visible) start();
            else stop();
          });
        },
        { threshold: 0.05 }
      );
      visibilityObserver.observe(container);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (visible) start();
    });

    window.addEventListener('resize', resize);
    resize();
    start();
  }

  initHeroCanvas();

  /* ------------------------------------------------------------------------
     Scanline del visual del hero
     ------------------------------------------------------------------------ */
  function initHeroScan() {
    const visual = document.querySelector('.hero-visual');
    if (!visual || visual.querySelector('.hero-scan')) return;

    const scan = document.createElement('span');
    scan.className = 'hero-scan';
    scan.setAttribute('aria-hidden', 'true');
    visual.appendChild(scan);
  }

  initHeroScan();

  /* ------------------------------------------------------------------------
     Transiciones de página
     ------------------------------------------------------------------------ */
  document.body.classList.add('page-enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.remove('page-enter'));
  });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;

    event.preventDefault();
    document.body.classList.add('page-leaving');
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 220);
  });
})();
