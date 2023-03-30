/* 27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no. */


const vectornum = [2,3,4,5,6];

//a
const numeroelementos = (vectornum) =>vectornum.length;

console.log(numeroelementos(vectornum));


//b 
const calcularparesyimpares = (vectornum) =>{

    let pares = vectornum.filter(number => number % 2 == 0);
    let impares = vectornum.filter(number => number % 2 !== 0);


    return {
        pares: pares,
       impares: impares,
    };
}

       
        console.log(calcularparesyimpares(vectornum));

//c

const sumadenegativos = (vectornum) =>{

vectornum.reduce()

}
   
  