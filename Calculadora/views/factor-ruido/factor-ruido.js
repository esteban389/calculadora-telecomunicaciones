resultado = document.getElementById("resultado");
calc = document.getElementById("calc");
const calcIndice = document.getElementById("calcIndice");
const factor = document.getElementById("factor-ruido");

calc.addEventListener('click', ()=>{
    const señali = parseFloat(document.getElementById("señali").value);
    const ruidoi = parseFloat(document.getElementById("ruidoi").value);
    const señalo = parseFloat(document.getElementById("señalo").value);
    const ruidoo = parseFloat(document.getElementById("ruidoo").value);
    if(!isNaN(señali) && !isNaN(ruidoi) && !isNaN(señalo) && !isNaN(ruidoo)){
        const r = (señali/ruidoi)/(señalo/ruidoo);
        factor.value = r;
        resultado.textContent = r;
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});

calcIndice.addEventListener('click',() => {
    const factorValue = parseFloat(factor.value);
    const indice = document.getElementById("indice");

    if(!isNaN(factorValue)){
        const r = 10*Math.log10(factorValue);
        indice.textContent = r;
    }else{
        indice.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});