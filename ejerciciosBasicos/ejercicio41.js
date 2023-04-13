/* 41. Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroRamdom = (min,max) => parseInt(Math.random()*(max-min)+min);


console.log(numeroRamdom(501,600));