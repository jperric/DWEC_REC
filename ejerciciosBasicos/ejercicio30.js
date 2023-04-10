/* 30. Programa una función para saber la edad de una persona, sabiendo la fecha de nacimiento. */

const calcularEdad=(fecha)=> {
   // crea un nuevo objeto `Date`
let today = new Date();
 
// `getDate()` devuelve el día del mes (del 1 al 31)
let day = today.getDate();
 
// `getMonth()` devuelve el mes (de 0 a 11)
let month = today.getMonth() + 1;
 
// `getFullYear()` devuelve el año completo
let year = today.getFullYear();

let fechadividida = fecha.split("/");
fecha=year-fecha[3];
console.log(fecha);

    return edad;
}

console.log(calcularEdad(06/08/2002));