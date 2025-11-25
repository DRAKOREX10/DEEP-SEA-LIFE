document.addEventListener('DOMContentLoaded', function () {

  // Selecciona TODOS los dropdowns
  const dropdowns = document.querySelectorAll('.categories-dropdown');

  dropdowns.forEach(drop => {
    const button = drop.querySelector('.categories-button');
    const menu = drop.querySelector('.dropdown-menu');

    // Evento para abrir/cerrar al hacer clic
    button.addEventListener('click', function (event) {
      event.stopPropagation();

      // Cerrar otros dropdowns antes de abrir el seleccionado
      dropdowns.forEach(other => {
        if (other !== drop) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.categories-button');
          const otherMenu = other.querySelector('.dropdown-menu');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherMenu) otherMenu.classList.remove('show');
        }
      });

      // Alternar solo este menú
      const isOpen = menu.classList.contains('show');
      menu.classList.toggle('show');
      drop.classList.toggle('active');
      button.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', function () {
    dropdowns.forEach(drop => {
      drop.classList.remove('active');
      const btn = drop.querySelector('.categories-button');
      const menu = drop.querySelector('.dropdown-menu');
      if (menu) menu.classList.remove('show');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });

});