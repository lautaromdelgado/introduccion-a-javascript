// *Javascript es débilmente tipado
// El tipo de dato describe el contenido del valor que tienen las variables.

// -- Primitivos: Información que no son objetos y son inmutables.
/*
* Boolean: true/false :: Verdadero y falso
* Null: null :: Valor especial que indica la ausencia de un valor.
* Undefined: undefined :: Valor especial que indica que una variable no ha sido inicializada.
* Number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 :: Números
* String: 'Hola mundo' :: Cadena de texto
* Symbol :: Valor único que no puede ser cambiado.
*/

// !Introducción general a los tipos de datos primitivos en JavaScript
let nombre = 'Peter Parker'; // String
console.log(nombre); // Salida por consola: "Peter Parker"

// Cambiando el valor de la variable
nombre = 'Ben Parker'; // String
console.log(nombre); // Salida por consola: "Ben Parker"

// Error si reinicializamos la misma variable, es decir, si inicializamos una variable
// y posteriormente volvemos a declarar la misma variable con el mismo nombre. Retornará un error

// !ESTO RETORNA UN ERROR
// let name = 'Peter Parker';
// let name = 'Ben Parker';

/*
    Más formas de declarar variables de tipo string
*/
let name1 = 'Lionel Messi'; // Comillas simples
let name2 = "Cristiano Ronaldo"; // Comillas dobles
let name3 = `Neymar Jr`; // Backticks

/*
* Recomendaciones: El uso de backticks, comillas dobles o comillas sencillas
* queda a disposición del desarrollador, en el día a día. Las comillas sencillas
* son más ligeras, pero las comillas dobles son más fácil de leer mientras que
* los backticks son más versátiles.
*/

// Para saber el tipo de dato al que apunta una variable.
console.log(typeof name1); // Salida por consola: "string"

// ---> Boolean <---
let esMarvel = true; // Boolean (Sin comillas o backticks sino sería un string)
let estoNoEsMarvel = false; // Boolean
console.log(typeof esMarvel); // Salida por consola: "boolean"

// ---> Números <---
let edad = 33; // Number
console.log(typeof edad); // Salida por consola: "number"
let altura = 1.70; // Number
console.log(typeof altura); // Salida por consola: "number"

// ---> Undefined <---
let superPoder; // Undefined
console.log(typeof superPoder); // Salida por consola: "undefined"

// ---> Null <---
let soyNull = null; // Null
console.log(typeof soyNull); // Salida por consola: "object"

// ---> Symbol <---
let symbol1 = Symbol('a'); // Symbol
console.log(typeof symbol1); // Salida por consola: "symbol"
let symbol2 = Symbol('a'); // Symbol
console.log(typeof symbol2); // Salida por consola: "symbol"

// Comparando dos símbolos (nunca serán iguales)
console.log(symbol1 === symbol2); // Salida por consola: "false"