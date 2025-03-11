const API_BASE_URL = "https://uttsmarket.bsite.net"; // URL base de la API

async function getUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/users/read`);
        if (!response.ok) throw new Error("Error al obtener usuarios");
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}
