// spinner.js

// Función para mostrar el spinner
function showSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible"; // Aseguramos que el spinner sea visible
    spinner.style.opacity = "1"; // Aseguramos que el fondo sea visible al inicio
}

// Función para ocultar el spinner con animación
function hideSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.style.animation = "fadeOut 1s forwards"; // Aplicamos la animación de desvanecimiento
    setTimeout(() => {
        spinner.style.visibility = "hidden";  // Ocultamos el spinner después de la animación
    }, 2000);  // Aseguramos que el spinner se oculte después de 2 segundos (puedes ajustarlo según necesites)
}

// Función para mostrar el spinner cuando la página empieza a cargarse
window.addEventListener("load", function() {
    showSpinner();
});

// Función para ocultar el spinner una vez que el contenido de la página haya cargado
window.addEventListener("DOMContentLoaded", function() {
    hideSpinner();
});
