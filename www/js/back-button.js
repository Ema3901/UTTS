setTimeout(() => {
    let backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    } else {
        console.error("El botón de retroceso no se encontró.");
    }
}, 500); // Espera 500ms antes de buscar el botón
