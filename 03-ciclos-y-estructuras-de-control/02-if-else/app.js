// Una estructurra de control nos permite decidir el flujo de control
// en nuestra aplicación

let a = 10; // Declaración de la variable a
if (a >= 10) {
    console.log('A es mayor o igual a 10');
}
console.log('Fin del programa')

let b = 10; // Declaración de la variable b
if (b >= 10) {
    console.log('B es mayor o igual a 10');
} else {
    console.log('B es menor a 10');
}

//! Hay excepciones como el undedfined, null, asignación

// Creo una nueva instancia del objeto DATE
const hoy = new Date(); // Obtenemos la fecha actual
console.log(hoy); // Imprimimos la fecha actual en la consola
let dia = hoy.getDate();
console.log(dia); // Imprimimos el día actual en la consola

// Ejemplo de flujo de control con if-else
if (dia === 0) {
    console.log('Hoy es domingo');
} else {
    console.log('Hoy no es domingo');
}

// Diferencias == y ===
// == Compara solo el valor
// === Compara el valor y el tipo de dato
// Ejemplo:
//* if (dia == 0) (Acá preguntamos si dia es igual a 0 en cuanto a valor pero sin tener el cuenta el tipo)
//* if (dia === 0) (Acá preguntamos si dia es igual a 0 en cuanto a valor y tipo de dato)

// Ejemplo de flujo de control con if-else y else-if
if (dia === 0) {
    console.log('Hoy es domingo');
} else if (dia === 1) {
    console.log('Hoy es lunes');
} else if (dia === 2) {
    console.log('Hoy es martes');
} else if (dia === 3) {
    console.log('Hoy es miércoles');
}
/* etc.. */