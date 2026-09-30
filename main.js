/**
 * PASO AL COSTADO — Funcionalidades Interactivas Mínimas
 * Enfoque: JavaScript ligero, semántico, accesible y sin dependencias.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDateDisplay();
  initMobileMenu();
});

/**
 * 1. Formateo y visualización de la fecha actual en español
 */
function initDateDisplay() {
  const dateElement = document.getElementById('current-date');
  if (!dateElement) return;

  try {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('es-ES', options);
    // Capitalizar primera letra
    dateElement.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  } catch (e) {
    // Si falla la localización, mantener el texto por defecto del HTML
  }
}

/**
 * 2. Menú de navegación accesible para dispositivos móviles
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!toggleBtn || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('mobile-nav--open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    mobileNav.classList.remove('mobile-nav--open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('mobile-nav--open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Cerrar al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
      closeMenu();
    }
  });

  // Cerrar al hacer clic en un enlace del menú móvil
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}
