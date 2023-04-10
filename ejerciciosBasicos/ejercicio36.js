/* 36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60] */

const numExtremos = (array) => {


    return console.log(`Array original= ${array}.
    \nValor máximo = ${Math.max(...array)}.
    \nValor mínimo = ${Math.min(...array)}.`);


}

let array = [2,4,8,19];

console.log(numExtremos(array));