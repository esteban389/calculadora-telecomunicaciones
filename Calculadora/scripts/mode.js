/**
 *  Modulo para alterar la paleta de colores de la aplicación
 * @module Modo
 * 
 **/
/**
 * Función para alternar entre los modos oscuro y claro de la aplicación.
 * Cambia la clase CSS 'dark-mode' en el elemento 'body' del documento y guarda el estado en localStorage.
 */
export function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

/**
 * Inicializa el modo oscuro de la aplicación si está habilitado en localStorage.
 * Lee el estado del modo oscuro desde localStorage y aplica la clase 'dark-mode' al elemento 'body' si corresponde.
 */
export function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;

    // Aplicar el modo oscuro si está habilitado en localStorage
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
}
