/* 18. Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola". */

const recortar = (palabra, numero) =>palabra.substring(0, numero);

console.log(recortar("hola", 2));