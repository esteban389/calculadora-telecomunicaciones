import { getCurrentRoute, navigateTo } from "./scripts/enrutador.js";
import { renderPage } from "./scripts/pageRenderer.js";
import { initializeDarkMode } from "./scripts/mode.js";

//Importing menu initializer
import { menuInitializer } from "./views/menu/menu.js";


// Inicializar la interfaz de usuario con el estado actual
initializeDarkMode();
renderPage(getCurrentRoute());
// Agregar el menú de navegación a la interfaz de usuario
renderPage("views/menu/menu","menu", menuInitializer);

