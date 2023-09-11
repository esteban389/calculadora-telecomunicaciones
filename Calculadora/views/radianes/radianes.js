let resultado = document.getElementById("resultado");
let calc = document.getElementById("calc");

calc.addEventListener('click', ()=>{
    const radianes =parseFloat(document.getElementById("radianes").value);
    const grados = parseFloat(document.getElementById("grados").value);
    let r;
    if (!isNaN(radianes)){
        r = (radianes*180);
        resultado.textContent = r+"°";
    }else{
        if(!isNaN(grados)){
            r = grados/180;
            resultado.textContent = r+"π";
        }else{
            resultado.textContent = "Error: Ingrese valores correctos en todos los campos";
        }
    }
});