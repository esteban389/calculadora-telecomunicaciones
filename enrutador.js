import { renderPage } from "./pageRenderer.js";
const rutas= [
    "/",
    "/longitud-de-onda",
    "/limite-shannon"
];

export function navigateTo(route) {
    if(rutas.includes(route)) {
        console.log(route)
        renderPage(route); // Renderizar la página correspondiente
    }else{
        console.log("Página no encontrada");
    }
}



export function getCurrentRoute(){
    return window.Location.pathname;
}