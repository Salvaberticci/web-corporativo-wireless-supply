/* ==========================================================================
   Wireless Supply C.A. — Navegación móvil
   Controla el menú hamburguesa, el bloqueo de scroll, el foco atrapado y
   el cierre con Escape en las 7 páginas.
   ========================================================================== */

(function () {
  'use strict';

  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  const icon = toggle.querySelector('[data-menu-icon]');
  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let isOpen = false;
  let lastFocused = null;

  function getFocusable() {
    return [toggle, ...menu.querySelectorAll(focusableSelector)].filter(
      (element) => element === toggle || element.offsetParent !== null
    );
  }

  function setOpen(open, options) {
    const settings = options || {};
    if (isOpen === open) return;

    isOpen = open;
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    document.body.classList.toggle('menu-open', open);

    if (icon) icon.textContent = open ? 'close' : 'menu';

    if (open) {
      lastFocused = document.activeElement;
      const firstLink = menu.querySelector(focusableSelector);
      if (firstLink) {
        window.setTimeout(function () {
          firstLink.focus();
        }, 30);
      }
    } else if (settings.restoreFocus && lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen);
  });

  // Cierra el menú al pulsar cualquier enlace interior.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape cierra y devuelve el foco al botón; Tab queda atrapado dentro.
  document.addEventListener('keydown', function (event) {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false, { restoreFocus: true });
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = getFocusable();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Cierra si se hace clic fuera del header.
  document.addEventListener('click', function (event) {
    if (!isOpen) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });

  // Al pasar a escritorio, el menú móvil deja de existir visualmente.
  desktopQuery.addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();
