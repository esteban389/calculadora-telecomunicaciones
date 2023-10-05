/**
 * Módulo para la gestión de enrutamiento y estado de la aplicación.
 * Importa las funciones `renderPage` y `createState` de módulos externos y exporta funciones relacionadas con el enrutamiento.
 * 
 * @module enrutador
 */

import { renderPage } from "./pageRenderer.js";
import { createState } from "./gestorEstados.js";

/**
 * Lista de rutas válidas en la aplicación.
 * @type {string[]}
 */
export const rutas = {
    "Inicio":"views/home/home",
    "Longitud de onda":"views/longitud-de-onda/longitud-de-onda",
    "Limite shannon":"views/limite-shannon/limite-shannon",
    "Ruido termico":"views/ruido-termico/ruido-termico",
    "Voltaje de ruido":"views/voltaje-ruido/voltaje-ruido",
    "Factor de ruido": "views/factor-ruido/factor-ruido",
    "Decibeles": "views/decibeles/decibeles",
    "BER":"views/BER/BER",
    "Radianes y grados": "views/radianes/radianes"
};

/**
 * Estado de la ruta actual.
 * @type {object}
 */
const routeState = createState(rutas["Inicio"],"ruta");

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
