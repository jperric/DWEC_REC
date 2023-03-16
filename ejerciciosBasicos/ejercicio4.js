/* 4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
hasta introducir un número negativo y entonces mostrar el resultado. */
let num, sum=0, prod=0, media , res, res2, i=0;

num= parseInt(prompt("introduce un numero: "))


while(num>0){

    i++;

res = sum+num;
alert(`${sum} + ${num} es igual a ${res} `);

res2=prod*num;
alert(`${sum} multiplicado por ${num} es igual a ${res2} `);

num= parseInt(prompt("introduce otro numero: "))


};

media=num/i;
alert(`la media de ${num} entre ${i} es igual a ${media} `);