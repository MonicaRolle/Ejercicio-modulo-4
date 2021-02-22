// 


var calcularPesoIdeal = (sexo, altura) => (altura * 100 - 150) * (sexo === "hombre" ? 0.75 : 0.6) + 50;

var calcularExcesoDePeso = (peso ,pesoIdeal) => peso-pesoIdeal;

var notificaPesoIdeal = (pesoIdeal) => "tu peso ideal corresponde a " + pesoIdeal +  " kilos";

function notificaEstadoSobrepeso(excesoPeso){
    if(excesoPeso >= 1){
        return "Cuidado exceso de peso. debes adelgazar "+ excesoPeso + " kilos" ;
    } else if(excesoPeso <= -1){
        return "come un poco mas, debes recuperar " + excesoPeso * -1
    }else{
        return "estas ideal de la muerte";
    }
}
var informePesoIdeal = (altura, peso, sexo)  => {
    var pesoIdeal= calcularPesoIdeal(sexo,altura);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(calcularExcesoDePeso(peso,pesoIdeal)));
}

informePesoIdeal(1.52, 66, "mujer");