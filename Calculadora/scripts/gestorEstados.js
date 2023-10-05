/**
 * 
 * Modulo para crear un gestor de estado que permite almacenar y recuperar el estado en sessionStorage.
 * @module gestorEstados
 **/
/** 
 * @param {*} initialState - El estado inicial para el gestor de estado.
 * @param {string|null} storageKey - La clave para almacenar el estado en sessionStorage. Si es null, no se almacena en sessionStorage.
 * @param {Function|null} stateChangeCallback - Una función callback que se ejecuta cuando el estado cambia. Recibe el nuevo estado como argumento.
 * @returns {object} Un objeto que contiene métodos para obtener, establecer y registrar cambios en el estado.
 * 
 * @example
 * //Ejemplo de creación:
 * const contadorElement = document.getElementById('contador');
 * const contadorState = createState(0, 'contadorState',(state) => {contadorElement.textContent = state;});
 * 
 * //Ejemplo de cambiar estado:
 * incrementarButton.addEventListener('click', () => {
    contadorState.setState(prevState => prevState + 1);
});
 */

export function createState(initialState, storageKey,stateChangeCallback=null) {
    let state = initialState || 0;

    // Intentar cargar el estado desde el sessionStorage
    if (storageKey) {
        const storedValue = sessionStorage.getItem(storageKey);
        if (storedValue !== null) {
            state = storedValue;
            if (stateChangeCallback) {
                stateChangeCallback(state);
            }
        }
    }
    /**
     * Obtiene el estado actual.
     *
     * @returns {*} El estado actual.
     */
    function getState() {
        return state;
    }

    /**
     * Establece un nuevo estado.
     *
     * @param {*} newStateOrFunction - El nuevo estado o una función que calcula el nuevo estado a partir del estado actual.
     */
    function setState(newStateOrFunction) {
        if (typeof newStateOrFunction === 'function') {
            // If newStateOrFunction is a function, execute it to get the new state value
            if(isNaN(state)){
                state = newStateOrFunction(state);
            }else{
                state = newStateOrFunction(parseInt(state));
            }
        } else {
            // Otherwise, directly set the new state value
            state = newStateOrFunction;
        }
        if (storageKey) {
            sessionStorage.setItem(storageKey, state);
        }

        if (stateChangeCallback) {
            stateChangeCallback(state);
        }
    }

    /**
     * Registra una función de devolución de llamada para ejecutar cuando cambie el estado.
     *
     * @param {Function} callback - La función de devolución de llamada a registrar.
     */
    function onStateChange(callback) {
        stateChangeCallback = callback;
    }

    return { getState, setState, onStateChange };
}