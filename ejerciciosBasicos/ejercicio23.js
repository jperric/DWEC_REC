/* 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
    igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

    const espalindromo = frase =>{

        frase = frase.toLowerCase(frase);
      
       frase = frase.split(' ').join('');


        let fraseinvertida = "";

        for (let index = frase.length -1 ; index >=0; index--) {

            fraseinvertida=fraseinvertida+ frase[index];
        }

        if (fraseinvertida===frase) {
            return `Esta frase es palindroma`;
        }else{
          return  `Esta frase no es palindroma`
        }

    }

    console.log(espalindromo("hola"));
    console.log(espalindromo("Salas"));
    console.log(espalindromo("ojo rojo"));
