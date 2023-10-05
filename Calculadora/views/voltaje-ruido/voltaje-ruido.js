resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const resistencia = parseFloat(document.getElementById("resistencia").value);
    const ruido = parseFloat(document.getElementById("ruido").value);
    if(!isNaN(resistencia) && !isNaN(ruido)){
        const r = Math.sqrt(resistencia*ruido);
        resultado.textContent = r+" V";
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});