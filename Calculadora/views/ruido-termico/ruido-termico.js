resultado = document.getElementById("resultado");
calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const banda = parseFloat(document.getElementById("banda").value);
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    if(!isNaN(banda) && !isNaN(temperatura)){
        const r = banda*temperatura*(1.380649*(10**(-23)));
        resultado.textContent = r+" w";
    }else{
        resultado.textContent = "Error: Ingrese valores correctos en todos los campos"
    }
});