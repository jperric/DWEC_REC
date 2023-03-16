/* 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario. */

num1=parseInt(prompt(`Dime el primer numero`));

num2=parseInt(prompt(`Dime el último numero`));

for (let index = num1+1; index < num2; index++) {
   
    if(index%2!==0){
        console.log(index);
    } 

 }