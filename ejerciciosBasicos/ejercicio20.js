/* 20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo. */

const devolver =(texto)=>{
 
    let textodevuelto="";

for (let index = 0; index < texto.length; index++) {
  textodevuelto=textodevuelto+texto+"\n";
 
    
}

return textodevuelto; 

  }

  console.log(devolver("hola"));
  console.log(devolver("holaaaa"));