//VALOR - REFERENCIA
let a = 10;
let b = a; // Copia el valor de a en b
a = 30; // Cambia el valor de a

console.log({ a, b }); // 30, 10

// REFERENCIA
let juan = { nombre: 'Juan', edad: 30 };
let ana = juan; // Copia la referencia de juan en ana
ana.nombre = 'Ana'; // Cambia el nombre de ana
// ! Cambia en el objeto el nombre para ambos tanto para ANA como para Juan.
// * En Javascript todos los objetos son pasados por referencia.
// * Mientras que todos los primitivos se pasan por valor.

console.log({ juan, ana })

// Ejemplo 2
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
const tony = cambiaNombre(peter); // Cambia el nombre de peter a Tony

console.log({ peter, tony }) // { nombre: 'Tony' }, { nombre: 'Tony' }

// Como romper con la referencia
let lauta = { nombre: 'Taro' };
let lucas = { ...lauta }; // Crea una copia del objeto lauta en lucas
// * El operador de propagación (...) crea una copia superficial del objeto,

lucas.nombre = 'Lucas'; // Cambia el nombre de lauta a Lucas
console.log({ lucas }); // { lauta: { nombre: 'Lucas' } }

//! Cuando colocamos los "..." dentro de los parametros, es un parametro REST.
// Y quiere decir que une todos los argumentos restantes en un array.
// * En cambio, cuando lo usamos en un objeto, 
// * es un operador de propagación y crea una copia
// * superficial del objeto.

// ARREGLOS
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas; // Copia la referencia de frutas en otrasFrutas
otrasFrutas.push('Mango'); // Agrega una fruta a otrasFrutas
console.table({ frutas, otrasFrutas }) // { frutas: ['Manzana', 'Pera', 'Piña'] }, { otrasFrutas: ['Manzana', 'Pera', 'Piña', 'Mango'] }

// Aplicamos el operador de propagación para romper la referencia (SPREAD OPERATOR)
const masFrutas = [...frutas]; // Crea una copia del array frutas en masFrutas
masFrutas.push('Sandia'); // Agrega una fruta a masFrutas
console.table({ frutas, otrasFrutas, masFrutas })

// Otro ejemplo más
const nuevasFrutas = frutas.slice(); // Crea una copia del array frutas en nuevasFrutas
nuevasFrutas.push('Sandia'); // Agrega una fruta a nuevasFrutas
nuevasFrutas.push('Mandarina'); // Agrega una fruta a nuevasFrutas
console.table({ frutas, nuevasFrutas }) // { frutas: ['Manzana', 'Pera', 'Piña'] }, { nuevasFrutas: ['Manzana', 'Pera', 'Piña', 'Sandia'] }

console.log("\n\n");
//! Testear cual es el metodo más eficiente
console.time('slice');
const conSlice = frutas.slice(); // Crea una copia del array frutas en conSlice
console.timeEnd('slice'); // Mide el tiempo que tarda en crear la copia

console.time('spread');
const conSpread = [...frutas]; // Crea una copia del array frutas en conSpread
console.timeEnd('spread'); // Mide el tiempo que tarda en crear la copia