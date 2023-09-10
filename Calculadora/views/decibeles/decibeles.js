//Agregar decibiles con voltaje, referido y potencia absoluta
resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    potencia =parseFloat(document.getElementById("potencia").value);
    if (!isNaN(potencia)){
        const r =10*Math.log10(potencia);
        resultado.textContent = r+" dB";
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});