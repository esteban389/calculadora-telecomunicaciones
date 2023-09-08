import { toggleDarkMode } from "./mode.js";
import { getCurrentRoute, navigateTo } from "./enrutador.js";
import { createState } from "./gestorEstados.js";
import { renderPage } from "./pageRenderer.js";

// Crear un estado inicial con valor guardado en sessionStorage o 0
const contadorState = createState(0, 'contadorState');
// Obtener referencias a elementos HTML
const contadorElement = document.getElementById('contador');
const incrementarButton = document.getElementById('incrementar');
const decrementarButton = document.getElementById('decrementar');

function listeners(){
    const toggleButton = document.getElementById('toggle-button');
    // Manejar el clic en el botón de alternancia
    toggleButton.addEventListener('click', () => {
        toggleDarkMode();
    });
}
//renderPage("/menu","menu", listeners);


// Función para actualizar y mostrar el estado
function actualizarEstado() {
    const currentState = contadorState.getState();
    contadorElement.textContent = currentState;
}

// Manejadores de eventos para los botones
incrementarButton.addEventListener('click', () => {
    const currentState = contadorState.getState();
    contadorState.setState(currentState + 1);
    actualizarEstado();
});

decrementarButton.addEventListener('click', () => {
    const currentState = contadorState.getState();
    contadorState.setState(currentState - 1);
    actualizarEstado();
});

// Mostrar el estado inicial
actualizarEstado();


        
