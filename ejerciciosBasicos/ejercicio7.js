/* 7. Mostrar todos los números divisores de un número introducido por el usuario. */

num1=parseInt(prompt(`Dime un numero`));
for (let index = num1; index >= 1; index--) {

    if (num1%index===0) {

       console.log(index);

    }
    
}





