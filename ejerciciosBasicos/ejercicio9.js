/* 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado. */

let num1=parseInt(prompt(`Dime el primer numero`));

while(isNaN(num1) || num1<=0){
    alert("el numero 1 no ha sido introducido correctamente");
    num1=parseInt(prompt("vuelve a introducir el numero1:"));
}

let num2=parseInt(prompt(`Dime el numero 2`));

while(isNaN(num2) || num2<=0){
    alert("el numero 2 no ha sido introducido correctamente");
    num2=parseInt(prompt("vuelve a introducir el numero2:"));
}



let operacion=prompt(`Introduceme la operacion que quieres realizar (+ , - , * y / )`);


while(operacion !== "+" && operacion !== "-" && operacion !== "*"  && operacion !== "/"){
alert("la operacion no ha sido introducida correctamente");
operacion=prompt("vuelve a introducir la operacion que quieres realizar (suma, resta, multiplicacion y division)");
}

switch (operacion) {
    case ("+"):
       console.log(num1+num2);
        break;
    case ("-"):
       console.log(num1-num2);
        break;
    case ("*"):
       console.log(num1*num2);
        break;
    case("/"):
   console.log(num1/num2);
        break;
}