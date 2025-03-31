// splash-screen.js
window.onload = function() {
    if (!localStorage.getItem('splashShown')) {
        // Mostrar la splash screen durante 3 segundos
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            localStorage.setItem('splashShown', 'true');
        }, 3000);
    } else {
        document.getElementById('splash-screen').style.display = 'none';
    }
}
