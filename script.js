let ultimaPosicionScroll = window.scrollY;
const navbar = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
  const posicionActual = window.scrollY;

  // Si bajamos en la página, oculta la barra
  if (posicionActual > ultimaPosicionScroll && posicionActual > 50) {
    navbar.classList.add('navbar-hidden');
  } 
  // Si subimos en la página, muestra la barra
  else {
    navbar.classList.remove('navbar-hidden');
  }

  ultimaPosicionScroll = posicionActual;
});