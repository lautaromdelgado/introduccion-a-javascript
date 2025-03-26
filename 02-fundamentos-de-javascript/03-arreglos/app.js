// ------------- ARREGLOS -------------
/*
 * Son un objeto muy parecido a una lista de información,
 * que contienen un grupo de elementos
 */

// ! Generalmente todos los elementos dentro de un arreglo
// ! son del mismo tipo de dato. Pero como Javascript es de
// ! tipado débil, el arreglo puede contener cualquier tipo de dato.

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
// Los arreglos comienzan con la posición 0. [0, 1, 2].


// * Maneras de declarar un arreglo.
const arr = new Array(10); // Crear un arreglo de 10 elementos.
console.log(arr); // [ <10 empty items> ]

const arr1 = [];
console.log(arr1); // []

let videoGames = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoGames }); // { videoGames: [ 'Mario 3', 'Megaman', 'Chrono Trigger' ] }

// Si se quiere imprimir la primera posición del arreglo.
console.log(videoGames[0]); // Mario 3

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2, // Antes de que se imprima, javascript ejecuta la operación, y luego imprime el resultado.
    function () { },
    () => { },
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log(arregloCosas);
// [ true, 123, 'Fernando', 3, [Function], [Function],
// { a: 1 }, [ 'X', 'Megaman', 'Zero', 'Dr. Light', [Array] ] ]

// Ejercicio, retornar el valor del arreglo dónde dice 'Woodman'.
let paso1 = arregloCosas[7];
let paso2 = paso1[4];
console.log(paso2[1]); // Woodman

// Otra alternativa para acceder a 'Woodman'.
console.log(arregloCosas[7][4][1]); // Woodman