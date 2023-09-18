import { useEffect, useState } from "react";

export function ModeButton(){
    const [Theme, setTheme] = useState(() => {
        if(localStorage.getItem("dark")){
            return "dark"
        }
        return "light"
    });

    useEffect(()=>{
        if(Theme === "dark"){
            document.querySelector("html").classList.add("dark")
            localStorage.setItem("dark",true)
        } else{
            document.querySelector("html").classList.remove("dark")
            localStorage.removeItem("dark")
        }
    },[Theme])
    
    const modeLight = () =>{
        setTheme("light");
    }
    const modeDark = () =>{
        setTheme("dark");
    }
    return (
        <>
        <div className="flex justify-center">
            <button onClick={modeLight} className={`transition-colors ${
        Theme === "light" ? "bg-rose-800" : "bg-cyan-500"
      } hover:bg-opacity-75 text-white py-2 px-4 rounded`}>
                <ion-icon name="sunny"></ion-icon>
            </button>
            <button onClick={modeDark} className={`transition-colors  ${
        Theme === "dark" ? "bg-rose-800" : "bg-cyan-500"
      } hover:bg-opacity-75 text-white py-2 px-4 rounded`}>
                <ion-icon name="moon"></ion-icon>
            </button>
        </div>
        </>
    )
}