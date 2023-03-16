/* 2. Modifica el programa anterior: si los números no son
 un número o son menores o iguales a ceros, que los vuelva a pedir. */

let number1=parseInt(prompt("Introduce el numero1:"));

while(typeof number1 !=="number" || number1<=0){
    alert("el numero 1 no ha sido introducido correctamente");
    number1=parseInt(prompt("vuelve a introducir el numero1:"));
}

let number2=parseInt(prompt("Introduce el numero2:"));

while(typeof number2 !=="number" || number2<=0){
    alert("el numero 2 no ha sido introducido correctamente");
    number2=parseInt(prompt("vuelve a introducir el numero2:"));
}


if(number1>number2){
   alert(`El numero ${number1} es mas grande que el numero ${number2} `);
}
else if(number2>number1){
    alert(`El numero ${number2} es mas grande que el numero ${number1} `);
}else{
    alert(`Los dos numeros son iguales`);
}
