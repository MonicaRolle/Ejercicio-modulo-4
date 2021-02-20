// 


function calcularPesoIdeal(sexo,altura){
    var factor = sexo ==="hombre"? 0.75: 0.6;
    return (altura * 100 - 150) * factor + 50;  
}

function calcularExcesoDePeso(peso ,pesoIdeal){
    return peso-pesoIdeal;
}

function notificaPesoIdeal(pesoIdeal){
    return "tu peso ideal corresponde a " + pesoIdeal +  " kilos";
}

function notificaEstadoSobrepeso(excesoPeso){
    if(excesoPeso >= 1){
        return "Cuidado exceso de peso. debes adelgazar ", excesoPeso 
    } else if(excesoPeso <= -1){
        return "come un poco mas, debes recuperar " + excesoPeso * -1
    }else{
        return "estas ideal de la muerte";
    }
}

function informePesoIdeal(altura, peso, sexo){
    var pesoIdeal= calcularPesoIdeal(sexo,altura);
    var excesoPeso = calcularExcesoDePeso(peso,pesoIdeal);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(excesoPeso));
}

informePesoIdeal(1.52, 66, "mujer");


