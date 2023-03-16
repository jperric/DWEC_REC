/* 1. Dados dos números indicar cuál es mayor, menor 
o si son iguales. */

let number1=parseInt(prompt("Introduce el numero1:"));
let number2=parseInt(prompt("Introduce el numero2:"));




if(number1>number2){
   alert(`El numero ${number1} es mas grande que el numero ${number2} `);
}
else if(number2>number1){
    alert(`El numero ${number2} es mas grande que el numero ${number1} `);
}else{
    alert(`Los dos numeros son iguales`);
}
