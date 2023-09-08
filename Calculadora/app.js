import { getCurrentRoute, navigateTo } from "./scripts/enrutador.js";
import { createState } from "./scripts/gestorEstados.js";
import { renderPage } from "./scripts/pageRenderer.js";

//Importing menu Button listeners
import { menuListeners } from "./views/menu/menu.js";
// Obtener referencias a elementos HTML
const contadorElement = document.getElementById('contador');
const incrementarButton = document.getElementById('incrementar');
const decrementarButton = document.getElementById('decrementar');
const contadorState = createState(0, 'contadorState',(state) => {contadorElement.textContent = state;});



renderPage("views/menu/menu","menu", menuListeners);


// Función para actualizar y mostrar el estado


// Manejadores de eventos para los botones
incrementarButton.addEventListener('click', () => {
    contadorState.setState(prevState => prevState + 1);
});

decrementarButton.addEventListener('click', () => {
    contadorState.setState(prevState => prevState - 1);
});
