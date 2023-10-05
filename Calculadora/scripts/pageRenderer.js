/**
 * Modulo para renderizar una página dentro de la aplicación
 * @module pageRenderer
 **/
/**
 * Renderiza una página web en un contenedor especificado y ejecuta una función de devolución de llamada opcional.
 *
 * @param {string} route - La ruta de la página a renderizar, sin incluir la extensión ".html".
 * @param {string} [container="content"] - El ID del elemento contenedor donde se renderizará la página. El valor predeterminado es "content".
 * @param {Function|null} [callback=null] - Una función de devolución de llamada opcional que se ejecutará después de renderizar la página.
 *
 * @throws {Error} Si la página no se encuentra o si ocurre un error durante la carga.
 *
 * @example
 * // Ejemplo de uso:
 * renderPage("page1", "content", (renderedHtmlElement) => {
 *     // Realiza acciones adicionales después de renderizar la página
 *     console.log("Página renderizada:", renderedHtmlElement);
 * });
 */

import {getCurrentRoute} from './enrutador.js';
import { menuInitializer } from "../views/menu/menu.js";

export function renderPage(route, container = "content", callback = null) {
    const content = document.getElementById(container);
    content.innerHTML = ''; // Limpiar el contenido existente
    if(container==="content") renderPage("views/menu/menu","menu", menuInitializer);
    const existingScript = document.getElementById("script");
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }
    // Cargar la página HTML mediante una solicitud Fetch
    fetch(window.location.pathname + route + ".html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Página no encontrada');
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;

            // Ejecutar la función de devolución de llamada si se proporciona
            if (typeof callback === "function") {
                const renderedHtmlElement = content.firstElementChild;
                callback(renderedHtmlElement);
            }
            if(container==="content" && !(getCurrentRoute()==="views/home/home")){
                const script = document.createElement("script");
                script.id = "script";
                script.src = window.location.pathname + route + ".js";
                script.type = "module";

                // Add an event listener to execute the script when it's loaded
                script.addEventListener("load", () => {
                    // Script has loaded, now you can execute your callback or any other logic
                    if (typeof callback === "function") {
                        const renderedHtmlElement = content.firstElementChild;
                        callback(renderedHtmlElement);
                    }
                });

                // Append the script to the body
                document.body.appendChild(script);
            }
        })
        .catch(error => {
            // Manejar errores y mostrar un mensaje de error
            const errorContainer = document.createElement("div");
            console.error('Error al cargar la página:', error);

            const errorMessageDiv = document.createElement("div");
            const stackTraceDiv = document.createElement("div");

            errorContainer.classList.add("error-message"); // Aplicar una clase CSS para el estilo
            errorMessageDiv.textContent = "Ocurrió un error: " + error.message;
            stackTraceDiv.textContent = "Stack: " + error.stack;

            // Agregar los elementos de mensaje de error y rastreo de pila al contenedor de error
            errorContainer.appendChild(errorMessageDiv);
            errorContainer.appendChild(stackTraceDiv);

            // Agregar el contenedor de error al elemento de contenido
            content.appendChild(errorContainer);
        });
}
