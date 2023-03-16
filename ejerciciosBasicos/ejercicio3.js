/* 3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo. */
let horas, minutos, segundos;
horas=23;
minutos=59;
segundos=59;

let horasx, minutosx, segundosx;

segundosx = segundos+1;
minutosx = minutos;
horasx = horas;

if(segundosx==60){
    segundosx=0;
    minutosx= minutosx+1;
}

if(minutosx==60){
    minutosx = 0;
    horasx = horasx+1;
}

if(horasx==24){
    horasx=00;
  
}

alert(`son las ${horasx}:${minutosx}:${segundosx}`);