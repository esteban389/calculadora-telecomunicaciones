import { lazy } from 'react'
// import { Home,LongitudOnda,LimiteShannon,RuidoTermico,VoltajeRuido,FactorRuido} from '../pages'
const Home = lazy(()=> import("../pages/home"));
const LongitudOnda = lazy(()=> import("../pages/longitud-onda"));
const LimiteShannon = lazy(()=> import("../pages/limite-shannon"));
const RuidoTermico = lazy(()=> import("../pages/ruido-termico"));
const VoltajeRuido = lazy(()=> import("../pages/voltaje-ruido"));
const FactorRuido = lazy(()=> import("../pages/factor-ruido"));

export const rutas = [
    {
        name: "Inicio",
        route: "/",
        Element: <Home/>
    },
    {
        name: "Longitud de onda",
        route: "/longitud-de-onda",
        Element: <LongitudOnda/>
    },
    {
        name: "Límite de shannon",
        route: "/limite-shannon",
        Element: <LimiteShannon />
    },
    {
        dropdown: true,
        name: "Ruido",
        route:"/ruido",
        subroutes: [{
            name: "Ruido térmico",
            route: "/ruido/ruido-termico",
            Element: <RuidoTermico />
        },
        {
            name: "Voltaje de ruido",
            route: "/ruido/voltaje-ruido",
            Element: <VoltajeRuido />
        },
        {
            name: "Factor de ruido",
            route: "/ruido/factor-ruido",
            Element: <FactorRuido />
        }
        ],
    },
    {
        dropdown: true,
        name: "Decibeles",
        route:"/decibeles",
        subroutes: [{
            name: "Decibeles de potencia",
            route: "/decibeles/potencia",
            Element: "Decibeles Potencia"
        },
        {
            name: "Decibeles de voltaje",
            route: "/decibeles/voltaje",
            Element: "../pages/voltaje-ruido"
        }
        ],
    },
]