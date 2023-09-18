import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="h-screen bg-slate-200 flex justify-center items-center dark:bg-neutral-900">
        <Sidebar />
        <button className='bg-slate-200 px-4 py-2 rounded hover:bg-slate-400 text-gray-800' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </BrowserRouter>
  )
}

export default App
