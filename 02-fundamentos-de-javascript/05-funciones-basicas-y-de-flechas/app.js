

// Una función sirve para centralizar la lógica de un procedimiento
function saludar() {
    console.log('Hola Mundo');
}

// Llamamos a la función
saludar();

// * La diferencia entre una función y un método es que el método se encuentra dentro de un objeto, mientrás que la función no.

// Es recomendable inicializar o crear funciones encima de la ejecución de las mismas, para que el código sea más legible.
// De esta manera es más sencillo saber qué hace el código.

// -- FUNCIÓN ANONIMA --
const saluda2 = function () {
    console.log('Hola Mundo');
}
// Si bien la función no tiene nombre, se puede asignar a una variable y llamarla de la misma manera que una función normal.
saluda2();
//* De esta manera, es como una manera segura y metodo de seguridad para saber que la función no se vuelva a declarar como una variable en ningún otro lugar.

// --- FUNCIONES CON ARGUMENTO ---
function saludarConArgumentos(nombre) {
    return console.log(`Hola ${nombre}`);
}
// Uso
saludarConArgumentos('Luis'); // Salida: Hola Luis
//! Si no mandadamos un argumento, la función devolverá "Hola undefined".

const saludarConArgumentos2 = function (apellido) {
    return console.log('Hola sr/a', apellido);
}
saludarConArgumentos2('Perez'); // Salida: Hola sr/a Perez

// --- LAMBDA O FUNCIONES DE FLECHA ---
// Se utilizan para simplificar la sintaxis de las funciones
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
saludarFlecha(); // Salida: Hola Flecha
// * Las funciones de flecha no necesitan la palabra reservada "function".
// Con argumentos
const saludarFlecha2 = (nombre, apellido) => {
    console.log('Hola', nombre, apellido);
}
saludarFlecha2('Luis', 'Perez'); // Salida: Hola Luis Perez

// * Cuándo se manda un solo argumento a la función de flecha no se incluyen los parentesis.
// ! Aunque queda más claro colocando los parentesis, ya que se puede confundir con un objeto de está manera deja planteado que es una función de flecha.
const saludarFlecha3 = nombreCompleto => {
    console.log('Hola', nombreCompleto);
}
saludarFlecha3('Luis Perez'); // Salida: Hola Luis Perez

// --- FUNCIONES CON RETURN ----
// Se utilizan para devolver un valor
const sumar = (a, b) => { // Los parametros serian a = 5, b = 3
    return a + b; // Devuelve la suma de a + b
}
// llamamos a sumar
console.log(sumar(5, 3)); // Salida: 8

// * Si no se coloca un return, la función devolverá "undefined".
const saluda = (nombre) => {
    return 'Hola querido', nombre;
    console.log('Soy una impresión en consola, que está después del return'); // Este código no se ejecuta, ya que la función retorno un valor y se detiene.
}

// Cuándo en la función solo tenemos una línea, resumidamente lo podemos realizar todo en una única línea.
const sum = (a, b) => a + b; //* Esto es completamente válido.
console.log(sum(32, 10)); // Salida: 42

// * A la siguiente función, transformarla en una función de flecha sin llaves {}.
function obtenerRandom() {
    return Math.random();
}
//* Solución
const obtenerRandomFlecha = () => Math.random();