// var altura = 1.52;
// var peso = 66;
// var sexo = "mujer";

//0.75/0.6


function calcularPesoIdeal(sexo,altura){
    var factor = sexo === "mujer"? 0.6 : 0.75;
    return (altura * 100 - 150) * factor + 50;
    
}

function calcularExcesoPeso(pesoActual, pesoIdeal){
return pesoActual - pesoIdeal;
}

function notificaPesoIdeal(pesoIdeal){
    return "Tu peso ideal es "+ pesoIdeal;
}

function notificaEstadoSobrepesa(excesoPeso){
    if(excesoPeso <= -1){
        return "Pesas menos que el peso ideal"
    } else if(excesoPeso > 1){
        return "Pesas más que tu peso ideal";
    }else{
        return "Estas en tu peso ideal, sigue asi!";
    }
}

function informePesoIdeal(altura, peso, sexo){
    var pesoIdeal = calcularPesoIdeal(sexo,altura);
    var excesoPeso = calcularExcesoPeso(peso,pesoIdeal);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepesa(excesoPeso));
}
informePesoIdeal(1.52, 66,"mujer");