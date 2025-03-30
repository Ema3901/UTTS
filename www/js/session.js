// Esperar a que el DOM se cargue completamente
$(document).ready(function () {
    try {
        // Verificar si hay un usuario en localStorage
        const userData = localStorage.getItem("user");

        if (!userData) {
            // Si no hay usuario logueado, redirigir a la página de login
            window.location.href = "/www/page/login/login.html";
            return;
        }

        // Intentar parsear el JSON
        const user = JSON.parse(userData);

        // Guardarlo en una variable global por si quieres usarlo en otras partes
        window.currentUser = user;

        // Si quieres mostrar el nombre del usuario en la página:
        const $usernameElem = $("#username");
        if ($usernameElem.length) {
            // Si hay un username en user, úsalo; si no, pon un fallback
            $usernameElem.text(`Hola, ${user.username ?? "Usuario"}`);
        }

        // (opcional) Verifica otras propiedades del usuario:
        console.log("Usuario logueado:", user.username);

    } catch (error) {
        // Si ocurrió un error al parsear el JSON, redirigir al login
        console.error("Error parseando 'user' en localStorage:", error);
        window.location.href = "/www/page/login/login.html";
    }
});

/**
 * Función para cerrar sesión
 */
function logout() {
    // Eliminar el usuario de localStorage y redirigir a login
    localStorage.removeItem("user");
    window.location.href = "/www/page/login/login.html";
}
