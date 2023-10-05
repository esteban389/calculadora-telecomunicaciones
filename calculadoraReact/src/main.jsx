import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "./components/theme-provider"
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
        <App />
    </ThemeProvider>
)
