// Función para crear un gestor de estado
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

    function getState() {
        return state;
    }

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

    function onStateChange(callback) {
        stateChangeCallback = callback;
    }

    return { getState, setState, onStateChange };
}