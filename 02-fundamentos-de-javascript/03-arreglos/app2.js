// Metodos y propiedades de los arreglos.

// Métodos: Son funciones que vienen internas de lo arreglos.

// Propiedades: Son variables que vienen internas de los arreglos.

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// length(cubitos en vscode): Son métodos
// Si un metodo es morado necesita () para ejecutarse,
// Mientras que si es azul no necesita () para ejecutarse.
console.log('Largo:', juegos.length); // Largo: 4

let primero = juegos[0]; // Para el indice del primero
let ultimo = juegos[juegos.length - 1]; // Para obtener el ultimo elemento del arreglo.
// Dentro de los [] también se pueden realizar calculos matematicos.
console.log({ primero, ultimo });

// Barrer cada uno de los elementos del arreglo.
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});
// Salida por consola:
// { elemento: 'Zelda', indice: 0, arr: [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }
// { elemento: 'Mario', indice: 1, arr: [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }
// { elemento: 'Metroid', indice: 2, arr: [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }
// { elemento: 'Chrono', indice: 3, arr: [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }

//* Metodo para insertar un nuevo elemento al arreglo de juegos
let nuevaLongitud = juegos.push('F-Zero'); // Agrega un elemento al final del arreglo.
console.log({ nuevaLongitud, juegos });
// Salida por consola:
// { nuevaLongitud: 5, juegos: [ 'Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero' ] }

//* Metodo para insertar un nuevo elemento al inicio del arreglo de juegos
juegos.unshift('Fire Emblem'); // Agrega un elemento al inicio del arreglo.
console.log({ juegos });
// Salida por consola:
// { juegos: [ 'Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero' ] }

//* Metodo para eliminar el ultimo elemento del arreglo de juegos
let juegoBorrado = juegos.pop(); // Elimina el ultimo elemento del arreglo.
console.log({ juegoBorrado, juegos });
// Salida por consola:
// { juegoBorrado: 'F-Zero', juegos: [ 'Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono' ] }

//* Borrar un elemento en alguna posición en especifico
let pos = 1;
// splice(posición, cantidad de elementos a borrar)
juegos.splice(pos, 2); // Elimina 2 elementos a partir de la posición 1.
console.log({ juegos });
// Salida por consola:
// { juegos: [ 'Fire Emblem', 'Chrono' ] }

//* Encontrar la posición de un elemento en el arreglo.
let metroidIndex = juegos.indexOf('Chrono'); // Encuentra la posición del elemento en el arreglo.
console.log({ metroidIndex });
// Salida por consola:
// { metroidIndex: 1 }
//!  Si regresa -1 significa que no lo encontró.