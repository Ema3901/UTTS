document.addEventListener("DOMContentLoaded", function () {
    // Verificar si hay un usuario en localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        // Si no hay usuario logueado, redirigir a la página de login
        window.location.href = "/www/page/login/login.html";
    } else {
        // Si hay un usuario logueado, puedes utilizar los datos del usuario
        // Ejemplo: mostrar el nombre del usuario en la página
        console.log("Usuario logueado:", user.username);
    }
});
