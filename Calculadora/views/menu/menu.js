//import { toggleDarkMode } from "/calculadora/scripts/mode.js";
import { navigateTo } from "../../scripts/enrutador.js";
export function menuListeners(){
    const toggleButton = document.getElementById('toggle-button');
    // Manejar el clic en el botón de alternancia
    toggleButton.addEventListener('click', () => {
        toggleDarkMode();
    });

    const longitud = document.getElementById('longitud-de-onda');
    longitud.addEventListener('click', ()=>{
        navigateTo("views/longitud-de-onda/longitud-de-onda");
    });
}