// splash-screen.js
window.onload = function() {
    // Verificar si ya se mostró el splash screen
    if (!localStorage.getItem('splashShown')) {
        // Mostrar la splash screen durante 3 segundos
        document.getElementById('splash-screen').style.display = 'flex'; // Asegurar que el splash screen se muestra
        setTimeout(function() {
            const splashScreen = document.getElementById('splash-screen');
            splashScreen.style.opacity = '0'; // Desvanecer el splash screen
            localStorage.setItem('splashShown', 'true'); // Marcar que se ha mostrado
        }, 3000); // 3 segundos para el splash screen
    } else {
        // Si ya fue mostrado, ocultamos el splash screen inmediatamente
        document.getElementById('splash-screen').style.display = 'none';
        // Mostrar el spinner si es necesario
        showSpinner();
    }
}
