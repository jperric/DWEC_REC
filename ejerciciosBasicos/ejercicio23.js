/* 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
    igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */


const espalindromo = frase => {

    frase = frase.toLowerCase(frase);
    frase = frase.replaceall(" ","");
    frase = frase.replaceall(",","");
    frase = frase.replaceall("á","a");
    frase = frase.replaceall("é","e");
    frase = frase.replaceall("í","i");
    frase = frase.replaceall("ó","o");
    frase = frase.replaceall("ú","u");


    let fraseinvertida = frase.reverse().join("");

  //ternario

    if (fraseinvertida === frase) {
        return `Esta frase es palindroma`;
    } else {
        return `Esta frase no es palindroma`
    }

}

console.log(espalindromo("hola"));
console.log(espalindromo("Salas"));
console.log(espalindromo("ojo rojo"));
