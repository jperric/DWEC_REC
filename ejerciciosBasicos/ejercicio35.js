/* 35. Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

 
const numCuadrado= array => {
    const raizCuadrada = array.map(function (num) {
        return Math.pow(num,2);
});


return raizCuadrada;
}


let array= [2,4,6,8];
console.log(numCuadrado(array));