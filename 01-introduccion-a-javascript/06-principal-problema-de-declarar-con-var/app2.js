
// ------------------- Problema de declarar con var -------------------
console.log(variable); // Salida por consola undefinded.
console.log(variable + " - Ejecutando variable"); // Salida por consola: "undefinded - Ejecutando variable"

// Javascript al undefined lo concatena al string que se le pasa, por lo que la salida por consola es "undefined - Ejecutando variable".

var variable = 'La variable aquí se inicializa';

console.log(variable2); // Salida por consola undefinded.
console.log(variable2 + " - Ejecutando variable2"); // Salida por consola: ERROR (Yá que no encuentra referencia de la variable, evitando el problema de declarar con var
// que concatenaba el valor undefined al string que se le pasaba).

let variable2 = 'La variable2 aquí se inicializa';