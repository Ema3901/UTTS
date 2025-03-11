const API_BASE_URL = "https://uttsmarket.bsite.net";

async function loginUser(event) {
    event.preventDefault(); // Evita el refresh de la página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Datos a enviar en la solicitud
    const loginData = {
        email: email,
        password_hash: password // La API está esperando "password_hash" como clave
    };

    try {
        // Realizar la solicitud POST al endpoint de login
        const response = await fetch(`${API_BASE_URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();
        console.log("Respuesta de la API:", result);

        // Verificar si el login fue exitoso
        if (result.Success) {
            alert("Inicio de sesión exitoso");

            // Guardar el usuario en localStorage para mantener la sesión
            localStorage.setItem("user", JSON.stringify(result.Value));

            // Redirigir a la página principal
            window.location.href = "/www/page/main/index.html";
        } else {
            alert("Error: " + result.Message);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Ocurrió un error al intentar iniciar sesión.");
    }
}

// Asignar el evento al botón de login
document.querySelector("#loginForm").addEventListener("submit", loginUser);
