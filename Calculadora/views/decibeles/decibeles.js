//Agregar  potencia absoluta
resultado = document.getElementById("resultado");
calc = document.getElementById("calc");
const calcPotencia = document.getElementById("calcPotencia");
const decibeles = document.getElementById("decibeles");
calc.addEventListener('click', ()=>{
    potencia =parseFloat(document.getElementById("potencia").value);
    potenciaRef = parseFloat(document.getElementById("potenciaRef").value);
    voltaje = parseFloat(document.getElementById("voltaje").value);
    if(!isNaN(voltaje)){
        const r =20*Math.log10(voltaje);
        resultado.textContent = r+" dB";
    }else{
        if (!isNaN(potencia)){
            if(isNaN(potenciaRef)){
                const r =10*Math.log10(potencia);
                resultado.textContent = r+" dB";
                decibeles.value = r;
            }else{
                const r =10*Math.log10(potencia/potenciaRef);
                resultado.textContent = r;
                decibeles.value = r;
            }
        }else{
            resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
        }
    }
});

calcPotencia.addEventListener('click', () =>{
    const decibelesValue = parseFloat(decibeles.value);
    if(!isNaN(decibelesValue)){
        const r =10**(decibelesValue/10);
        const resultadoPotencia = document.getElementById("resultadoPotencia");
        resultadoPotencia.textContent = r;
    }else{
        resultadoPotencia.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});