/* 16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A */


const dibujo = (letra,num)=>{
 
    let mostrar="";

    for (let index = num; index >= 0; index--) {
     

        let num2=index;

        for (let index = 0; index < num2; index++) {
           mostrar= mostrar + letra;
        }
        
        

        mostrar=mostrar + "\n";

    }

     

    return mostrar;

}

console.log(dibujo("A",10));