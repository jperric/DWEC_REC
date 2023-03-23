/* 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
Mundo") devolverá "odnuM aloH". */

const invertirCadena = (cad) => {

///split
///reverse
//join

    var nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena = nuevaCadena + cad[i];
    }
    return nuevaCadena;
}

console.log(invertirCadena("hola mundo"));