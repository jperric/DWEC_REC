/* 32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarLetras=(texto)=>{

let textoModificado = texto.replace(/ /g,'');
    return {
        consonantes:textoModificado.match(new RegExp(/[aeiou]/ig)).length,
        vocales:textoModificado.match(new RegExp(/[^aeiou]/ig)).length
    }
}


let texto = prompt("Escribe una cadena");
console.log(contarLetras(texto));
