// function submitName(){

// var fullName;

// //Obtener nombre
// var name = document.getElementById("input-name").value;
// fullName = name;

// //Obtener primer apellido
// var surname1 = document.getElementById("input-surname1").value;
// fullName = fullName + " " +surname1;

// //Obtenwer seundo apellido
// var surname2 = document.getElementById("input-surname2").value;
// fullName = fullName + " " +surname2;

// //pintamos el nombre completo
// document.getElementById("full-name").innerHTML = fullName;

// }

// //Registramos la funcion submitName como eventListener al clickar el bton enviar

// document.getElementById("button-submit").addEventListener("click",submitName);


/** Romper el codigo
 * 
 * function getName(){
 *  return document.getElementById("input-name").value;
 * }
 * function getSurname1(){
 *  return document.getElementById("input-surname1").value;
 * }
 * function getSurname2(){
 *  return document.getElementById("input-surname2").value;
 * }
 * 
 * function getFullName(){
 *    return getName() + " " + getSurname1() + " " + getSurname2();
 * }
 * 
 * function submitName(){
 *    return document.getElementById("full-name").innerTextL = getFullName();
 * }
 */
// ARROW FUNCTION
var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;

var getSurname2 = () => document.getElementById("input-surname2").value;

var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName();
}

document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);
