/* 19. Programa una función que dada una String te devuelva un Array de textos separados por
cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

const separartexto = (texto, caracter) => texto.split(caracter);

console.log(separartexto("hola mundo hola", "o"));