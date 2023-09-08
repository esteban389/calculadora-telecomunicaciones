
const contentElement = document.getElementById('content');

// Función para alternar el modo oscuro/light
export function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    
    // Aplicar el modo oscuro si está habilitado en el localStorage
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
}



// Inicializar la interfaz de usuario con el estado actual
initializeDarkMode();