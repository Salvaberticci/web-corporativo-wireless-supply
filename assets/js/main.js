/* ==========================================================================
   Wireless Supply C.A. — Navegación móvil
   Controla el menú hamburguesa presente en las 6 páginas.
   ========================================================================== */

(function () {
  'use strict';

  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  const icon = toggle.querySelector('[data-menu-icon]');
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  function setOpen(open) {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    if (icon) icon.textContent = open ? 'close' : 'menu';
  }

  function closeMenu() {
    setOpen(false);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra el menú al pulsar cualquier enlace interior.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });

  // Cierra con la tecla Escape y devuelve el foco al botón.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  // Cierra si se hace clic fuera del header.
  document.addEventListener('click', function (event) {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  // Al pasar a escritorio, el menú móvil deja de existir visualmente.
  desktopQuery.addEventListener('change', function (event) {
    if (event.matches) closeMenu();
  });
})();
