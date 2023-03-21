/* 11. Programa una función que determine si un número es par o impar, pe. miFuncion(29)
devolverá Impar. */


const esimpar = (num) =>{

    if (num===0) {
        return "par";
    }else if(num==1){
        return "impar";
    }else{
    
    return esimpar(num -2);

    }


}




console.log(esimpar(5));
console.log(esimpar(4));
console.log(esimpar(7));