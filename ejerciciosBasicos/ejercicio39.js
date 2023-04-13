/* 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true] */

let v=["x",10,"x",2,10,10, true,true];


const eliminaRepetidos=(v)=>{
eliminados=v.filter((x,index)=>v.indexOf(x) === index);
return eliminados;
}

console.log(eliminaRepetidos(v));