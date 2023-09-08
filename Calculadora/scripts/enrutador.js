/**
 * Módulo para la gestión de enrutamiento y estado de la aplicación.
 * Importa las funciones `renderPage` y `createState` de módulos externos y exporta funciones relacionadas con el enrutamiento.
 * 
 * @module enrutador
 */

import { renderPage } from "./pageRenderer.js";
import { createState } from "./gestorEstados.js";


/**
 * Estado de la ruta actual.
 * @type {object}
 */
const routeState = createState("/");

/**
 * Navega a una ruta específica si es válida y actualiza el estado de la ruta.
 *
 * @param {string} route - La ruta a la que se desea navegar.
 * @throws {Error} Si la ruta especificada no es válida.
 */
export function navigateTo(route) {
    routeState.setState(route);
    renderPage(route); // Renderizar la página correspondiente
}

/**
 * Obtiene la ruta actual.
 *
 * @returns {string} La ruta actual.
 */
export function getCurrentRoute() {
    return routeState.getState();
}
