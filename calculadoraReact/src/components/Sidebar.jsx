
import { rutas } from '../Variables/routes';
import { NavLink } from "react-router-dom";

export function Sidebar(){

    return (
        <nav className=" p-5 w-60 fixed bg-neutral-800 inset-y-0 left-0 flex flex-col justify-between"> 
            <ul>
                {rutas.map(data => {
                    return (
                        <li key={data.route} className='mb-2'>
                            <NavLink key={data.route} to={data.route} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-indigo-800 w-full block p-2 px-4 text-white rounded" : "bg-neutral-700 w-full block p-2 px-4 text-white rounded hover:bg-teal-800" 
                            }>    
                                {data.name}
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
            
        </nav>
    )
}