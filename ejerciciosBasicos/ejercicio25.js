/* 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    un sentido que en otro), pe. miFuncion(2002) devolverá true. */

    const esCapicua = (num)=>{

      if(typeof num != "number") return null;


        num=num.toString();
        let numarray= num.split("");
        //Si no le añado las "" se coloca con coma.
        let numinvertido= numarray.reverse().join("");



        //OPERADOR TERNARIO
    /*    if(num==numinvertido){
        return true;
       }else{
        return false;
       } */

      return (num==numinvertido) ? true : false ;

      }

    console.log(esCapicua("hol2"));
    console.log(esCapicua(2002));
