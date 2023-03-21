/* 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */


const descuento = (num, dto) =>{

   let result= num*dto/100;
 let resultadofinal=num-result;
return resultadofinal;
}


console.log(descuento(1000,20));