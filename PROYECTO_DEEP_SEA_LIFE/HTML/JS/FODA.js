
  const buttons = document.querySelectorAll('.ideologia-btn');
  const contenidos = document.querySelectorAll('.ideologia-tab-contenido');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {

      // remover "active" de todos los botones
      buttons.forEach(b => b.classList.remove('active'));

      // agregar "active" al botón seleccionado
      btn.classList.add('active');

      // ocultar contenido
      contenidos.forEach(con => con.classList.remove('active'));

      // mostrar el contenido correspondiente
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
