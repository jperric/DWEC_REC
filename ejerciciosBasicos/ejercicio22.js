/* 22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contrepetidas = (frase, palabra) => {



    let frasesepa = frase.split(" ");

    let cont = 0;

//hacerlo sin bucle for 
//macht


    for (let index = frasesepa.length - 1; index >= 0; index--) {

        if (frasesepa[index] == palabra) {
            cont++;
        }
    }

    return cont;

}

console.log(contrepetidas("hola como estas hola", "hola"));