import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ScrollArea } from './components/ui/scroll-area';
import { Header } from './components/header';
import { rutas } from './lib/routes';
import { Suspense } from 'react';
import { PagesSkeleton } from './components/pagesSkeleton'
/*
  TODO:
    create: [all the pages]
    add: [
      copy to clipboard on results react-copy-to-clipboard,
      units per LABEL on form and on result,
      decide on different inputs (longitud onda tiene frecuencia o periodo),
      transition animations
    ]
*/
function App() {

  return (
    <BrowserRouter>
      
      
        <main className='w-full'>
          <ScrollArea className='w-full px-16 mt-[20%] md:mt-[8%]'>
            <Routes>
              <Route path='/' element={<Layout />}>
                {rutas.map((ruta,i )=>{
                  return (
                    <>
                      {
                        ruta.dropdown
                        ? <Route path={ruta.route} key={i}>
                          {
                            ruta.subroutes.map((subruta,i)=>{
                              return (<Route path={subruta.route} element={subruta.Element} key={i} />)
                            })
                          }
                        </Route>
                        
                        : <Route path={ruta.route} element={ruta.Element} key={i} />
                      }
                    </>
                  )

                })}
              </Route>
            </Routes>
          </ScrollArea>
        </main>
    </BrowserRouter>
  )
}
function Layout(){
  return(
    <>
    <Header />
    <Suspense fallback={<PagesSkeleton />}>

      <Outlet></Outlet>
    </Suspense>
    </>
  )
}
export default App
