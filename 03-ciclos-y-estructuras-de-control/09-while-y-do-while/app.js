// Estructura de ciclos
// While y Do While.

// * ¿Que son los ciclos?
// Los ciclos son estructuras de control que nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición. En JavaScript, existen varios tipos de ciclos, 
// pero en este caso nos enfocaremos en el ciclo while y el ciclo do while.

// Arreglo de autos
const carros = ['Mazda', 'Toyota', 'Honda', 'Chevrolet', 'Kia'];
let i = 0; // Variable de control

// Ciclo while
// El ciclo while ejecuta un bloque de código 
// mientras la condición sea verdadera.
console.log("\n=== WHILE ===\n");
while (i < carros.length) {
    console.log(carros[i]); // Imprimimos el elemento actual del arreglo
    i++; // Incrementamos la variable de control
}

console.log("\n=== DO WHILE ===\n");
// Ciclo do while
i = 0;
do {
    console.log(carros[i]); // Imprimimos el elemento actual del arreglo
    i++; // Incrementamos la variable de control
} while (i < carros.length); // La condición se evalúa al final del ciclo
// En este caso, el ciclo do while se ejecutará al menos una vez,
// incluso si la condición es falsa desde el principio.

//! Las condiciones While y Do While con
//! undefinded, null, false, 0, NaN, '' son falsas
//! y no se ejecutará el ciclo.

i = 0; // Reiniciamos la variable de control
// Para romper el ciclo podemos usar la palabra reservada break
while (i < carros.length) {
    if (carros[i] === 'Toyota') { //! Se va a romper el ciclo cuándo encuentre a 'Toyota'
        break; // Rompe el ciclo si encuentra 'Toyota'
    }
    console.log('con break: ' + carros[i]); // Imprimimos el elemento actual del arreglo
    i++; // Incrementamos la variable de control
}

i = 0; // Reiniciamos la variable de control
// Para saltearnos un valor y que se siga ejecutando el ciclo
while (i < carros.length) {
    if (carros[i] === 'Toyota') { //! Va a obviar el valor 'Toyota'
        i++; // Incrementamos la variable de control
        continue; // Salta el ciclo si encuentra 'Toyota'
    }
    console.log('con continue: ' + carros[i]); // Imprimimos el elemento actual del arreglo
    i++; // Incrementamos la variable de control
}