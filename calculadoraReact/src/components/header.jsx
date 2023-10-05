import {ModeToggle} from './ui/modeToggle'
import { Sidebar } from './ui/sidebar'

export function Header() {
  return (
    <nav className='fixed top-0 inset-x-0 px-5 py-2 flex justify-between items-center bg-background shadow-lg border-b border-neutral-600 z-50 '>
        <Sidebar />
        <h1>Calculadora</h1>
        <ModeToggle />
    </nav>
  )
}
