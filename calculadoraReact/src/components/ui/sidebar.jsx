import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from './sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
  
import { ScrollArea } from './scroll-area';
import { Menu } from 'lucide-react';
import { Button, buttonVariants } from './button'
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { rutas } from '../../lib/routes'


export function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                  <span className='sr-only'>Menú de navegación</span>
                  <Menu />
              </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <ScrollArea className='mt-4 h-full py-2'>
              {rutas.map((ruta,i) =>{
                return (
                  <>
                    {ruta.dropdown 
                    ? 
                    <HeaderAccordion 
                      onOpenChange={setOpen}
                      parentRoute={ruta.route}
                      subrutas={ruta.subroutes}
                      key={i}
                    >
                      <span className="font-bold">{ruta.name}</span>
                    </HeaderAccordion>

                    
                    : 
                    <HeaderLink 
                      href={ruta.route}
                      onOpenChange={setOpen}
                      key={i}
                    >
                        <span className="font-bold">{ruta.name}</span>
                    </HeaderLink>
                    }
                  </>
                  
                )

              })}
            </ScrollArea>


          </SheetContent>
        </Sheet>
    </>
  )
}

function HeaderLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}) {
  const currentRoute= useLocation().pathname;
  let commonClasses = "flex justify-start items-center py-4 mt-2";
  return (
    <NavLink
      to={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={currentRoute===href 
        ?cn(buttonVariants({variant: "default"}),className,commonClasses)
        :cn(buttonVariants({variant: "ghost"}),className,commonClasses)
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}

function HeaderAccordion({
  onOpenChange,
  parentRoute,
  subrutas,
  className,
  children,
  ...props
}){
  const currentRoute= useLocation().pathname;
  const startsWith = currentRoute.startsWith(parentRoute);
  return (
    <Accordion 
    type="single"
    collapsible defaultValue={startsWith ?"item-1": ""}
    className={cn(buttonVariants({variant: "ghost"}),"block h-fit py-0 mt-2")}
    >
      <AccordionItem value={"item-1"} className='h-max'>
        <AccordionTrigger >{children}</AccordionTrigger>
        {subrutas.map((ruta,i) =>{
            return(
              <AccordionContent key={i}>
                <HeaderLink 
                  href={ruta.route}
                  onOpenChange={onOpenChange}
                  key={i}
                >
                    <span className="font-bold">{ruta.name}</span>
                </HeaderLink>
              </AccordionContent>
            )
        })}
      </AccordionItem>
    </Accordion>
  )
}