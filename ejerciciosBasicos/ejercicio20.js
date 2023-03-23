/* 20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (texto,veces) => {

  let textodevuelto = "";

  for (let index = 0; index < veces; index++) {
    textodevuelto = textodevuelto + texto + "\n";
  }

  return textodevuelto;

}

console.log(repetirTexto("hola",7));
console.log(repetirTexto("holaaaa",6));