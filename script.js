function mostrarRespuesta() {
  document.getElementById('respuesta').style.display = 'block';
}

// Mostrar animación al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.entry').forEach(section => {
  observer.observe(section);
});

function confirmar() {
    document.getElementById("mensaje").classList.remove("hidden");
}
