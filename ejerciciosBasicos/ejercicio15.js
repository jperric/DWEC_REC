/* 15. Indica si un NIF es válido o no. */
let characters = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
const dnivalido = dni =>{

let numerosdni = parseInt(dni.substring(0,8));
let letradni = dni.substring(8,9).toUpperCase();



if(characters[numerosdni % 23 ] === letradni){

    return 'dni valido'; 

}else{

    return 'dni no valido';

}



}

console.log(dnivalido("47344300L"));