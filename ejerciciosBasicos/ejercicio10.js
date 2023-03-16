/* 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
    sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

const esprimo = num => {

    let cont = 0;

    for (let index = num-1; index > 1; index--) {
        if (num % index == 0) {
            cont = cont + 1;
        }
    }

    if (cont == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(esprimo(5));
console.log(esprimo(4));
console.log(esprimo(7));