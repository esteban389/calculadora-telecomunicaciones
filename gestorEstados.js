// Función para crear un gestor de estado
export function createState(initialState, storageKey) {
    let state = initialState || 0;

    // Intentar cargar el estado desde el sessionStorage
    if (storageKey) {
        const storedValue = sessionStorage.getItem(storageKey);
        if (storedValue !== null) {
            state = parseInt(storedValue, 10);
        }
    }

    function getState() {
        return state;
    }

    function setState(newValue) {
        state = newValue;
        if (storageKey) {
            sessionStorage.setItem(storageKey, newValue.toString());
        }
    }

    return { getState, setState };
}