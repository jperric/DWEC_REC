/* 12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */

const calculadorag= (num, grado) => {

if (grado=="c") {

  resultc= (num+32)*5/9;
  return resultc +" farenheit"
}

if(grado=="f"){
    resultf=(num-32)*5/9;
    return resultf +" celcius"
}

}

console.log(calculadorag(100, "f"));