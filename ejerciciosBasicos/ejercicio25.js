/* 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
    un sentido que en otro), pe. miFuncion(2002) devolverá true. */

    const escapicua = (num)=>{

        num=num.toString();
        let numinvertido="";

        for (let index = num.length-1; index >=0; index--) {
           numinvertido=numinvertido+num[index];
            
        }

       if(num==numinvertido){
        return'el numero es capicua';
       }else{
        return'el numero no es capicua';
       }

    }

    console.log(escapicua("2002"));
    console.log(escapicua("20020"));
