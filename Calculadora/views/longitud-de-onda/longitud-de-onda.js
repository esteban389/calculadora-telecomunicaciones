resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    frecuencia =parseFloat(document.getElementById("frecuencia").value);
    if (!isNaN(frecuencia)){
        const r = (3*(10**8))/(frecuencia);
        resultado.textContent = r+" m";
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});