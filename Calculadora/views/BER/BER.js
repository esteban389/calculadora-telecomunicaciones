resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const error = parseFloat(document.getElementById("error").value);
    const bits = parseFloat(document.getElementById("bits").value);
    if(!isNaN(error) && !isNaN(bits)){
        const r = error/bits;
        resultado.textContent = r;
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});