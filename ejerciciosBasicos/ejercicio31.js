/* 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) */




const añosdiferencia = fecha => {
    //La fecha actual - la fecha que le he pasado
    const currentDay = new Date();
    //le paso el valor en absoluto (positivo)
    return Math.abs(currentDay.getFullYear()-fecha.getFullYear());
};

//Ejemplos
const dia =new Date ('2002-08-06');

console.log(añosdiferencia(dia));
