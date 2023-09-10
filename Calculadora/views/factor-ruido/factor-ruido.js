//Agregar indice de ruido en esta pagina
resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const señali = parseFloat(document.getElementById("señali").value);
    const ruidoi = parseFloat(document.getElementById("ruidoi").value);
    const señalo = parseFloat(document.getElementById("señalo").value);
    const ruidoo = parseFloat(document.getElementById("ruidoo").value);
    if(!isNaN(señali) && !isNaN(ruidoi) && !isNaN(señalo) && !isNaN(ruidoo)){
        const r = (señali/ruidoi)/(señalo/ruidoo);
        resultado.textContent = r;
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});