export const rutas = [
    {
        name: "Inicio",
        route: "/",
        Element: "../pages/inicio"
    },
    {
        name: "Longitud de onda",
        route: "/longitud-de-onda",
        Element: "../pages/longitud-onda"
    },
    {
        name: "Límite de shannon",
        route: "/limite-shannon",
        Element: "../pages/limite-shannon"
    },
    {
        dropdown: true,
        subroutes: {
            name: "Ruido térmico",
            route: "/ruido-termico",
            Element: "../pages/ruido-termico"
        },
    },
    {
        name: "Ruido térmico",
        route: "/ruido-termico",
        Element: "../pages/ruido-termico"
    },
]