// session.js
document.addEventListener("DOMContentLoaded", function () {
    try {
        // Verificar si hay un usuario en localStorage
        const userData = localStorage.getItem("user");
        
        if (!userData) {
            // Si no hay usuario logueado, redirigir a la página de login
            window.location.href = "/www/page/login/login.html";
            return; // para que no siga ejecutando nada más
        }

        // Intentar parsear
        const user = JSON.parse(userData);

        // Guardarlo en una variable global por si quieres usarlo en otras partes
        window.currentUser = user;

        // Si quieres mostrar el nombre del usuario en la página:
        const usernameElem = document.getElementById("username");
        if (usernameElem) {
            // Si hay un username en user, úsalo; si no, pon un fallback
            usernameElem.textContent = `Hola, ${user.username ?? "Usuario"}`;
        }

        // (opcional) verifica otras propiedades de user:
        console.log("Usuario logueado:", user.username);

    } catch (error) {
        // Si ocurrió un error (por ej. JSON corrupto), redirigir de nuevo al login
        console.error("Error parseando 'user' en localStorage:", error);
        window.location.href = "/www/page/login/login.html";
    }
});

/**
 * Función para cerrar sesión
 */
function logout() {
    localStorage.removeItem("user");
    window.location.href = "/www/page/login/login.html";
}
