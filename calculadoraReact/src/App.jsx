import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
import {ModeToggle} from './components/modeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-200 flex flex-row justify-center items-center dark:bg-neutral-900">
      <div className='absolute top-0 right-0 p-5'>
        <ModeToggle />
      </div>
        <Sidebar />
        <main className='h-screen w-full p-5 flex justify-center items-center'>
          <button className='bg-slate-400 px-4 py-2 rounded hover:bg-slate-600 hover:text-slate-200 text-gray-800' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
