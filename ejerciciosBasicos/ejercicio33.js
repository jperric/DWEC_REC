/* 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
    Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
    ¡ o ¿ */

    const validarNombre = (nombre)=>{
            let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
            return regularNombre.test(nombre);
        }
        console.log(validarNombre("Manolito Jim"));
        console.log(validarNombre("Jesús Miguel"));
        console.log(validarNombre("Jesús56 Miguel"));