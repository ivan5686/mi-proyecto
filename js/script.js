function cambiarContenido() {
    const proyectos = document.getElementById("proyectos");
    if (proyectos.style.display === "none") {
        proyectos.style.display = "block";
    } else {
        proyectos.style.display = "none";
    }
}

// Validación del formulario con JavaScript
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert("Por favor complete todos los campos.");
        event.preventDefault();  // Evita el envío del formulario
    }
});
