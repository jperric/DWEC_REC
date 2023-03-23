/* 17. Programa una función que cuente el número de caracteres
 de una cadena de texto, pe. miFunción("Hola Mundo")
  devolverá 10. */


  const devolver =(texto)=>{
    let contador=0;
    let textodevuelto="";

for (let index = 0; index < texto.length; index++) {
  textodevuelto=textodevuelto+texto+"\n";
  contador=contador+1;
    
}

/* return textodevuelto; */
return contador;
  }

  console.log(devolver("hola"));
  console.log(devolver("holaaaa"));