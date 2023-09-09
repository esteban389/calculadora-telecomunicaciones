resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const banda = parseFloat(document.getElementById("banda").value);
    const señal = parseFloat(document.getElementById("señal").value);
    const ruido = parseFloat(document.getElementById("ruido").value);
    if (!isNaN(banda) && !isNaN(señal) && !isNaN(ruido)){
        const r = 3.332*banda*Math.log10(1+(señal/ruido));
        resultado.textContent = r;
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
})