import { toggleDarkMode } from "../../scripts/mode.js";
import { navigateTo } from "../../scripts/enrutador.js";
import { getCurrentRoute, rutas } from "../../scripts/enrutador.js";
export function menuInitializer(){
    const toggleButton = document.getElementById('toggle-button');
    const navUl = document.querySelector(".nav").children.item(0);

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    let modeButton = document.getElementById("toggle-button");
    if(isDarkMode) modeButton.textContent = "Modo claro";
    toggleButton.addEventListener('click', () => {
        toggleDarkMode();
    });

    const renderNavlinks = () => {
        const navFragment = document.createDocumentFragment();
        
        Object.keys(rutas).forEach(nombreRuta => {
            const linkElement = document.createElement('button');
            if(getCurrentRoute==="Inicio" && nombreRuta==="Inicio") console.log("este es el inicio");
            linkElement.id = rutas[nombreRuta];
            linkElement.textContent = nombreRuta;
            linkElement.className = 'nav-link';

            linkElement.addEventListener('click', ()=>{
                navigateTo(rutas[nombreRuta]);
            });

            const li = document.createElement('li');
            li.appendChild(linkElement);
            navFragment.appendChild(li);
        });
  
        navUl.append(navFragment);
    };
    
    renderNavlinks();
}