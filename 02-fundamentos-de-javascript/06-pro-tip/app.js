// RETORNOS
function crearPersona(nombre, apellido) {
    return { nombre, apellido } // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.
}

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona); // { nombre: 'Fernando', apellido: 'Herrera' }

// AHORA COMO UNA FUNCIÓN DE FLECHA
const crearPersonaFlecha = (nombre, apellido) => ({ nombre, apellido }); // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.
console.log(crearPersonaFlecha('Fernando', 'Herrera')); // { nombre: 'Fernando', apellido: 'Herrera' }

// IMPRIMIR ARGUMENTOS
//* En las funciones normales, los argumentos se pueden acceder a través de la variable arguments, 
//* que es un objeto similar a un array que contiene todos los argumentos pasados a la función.
//* Sin embargo, en las funciones de flecha no existe la variable arguments, por lo que se debe usar el
//* operador rest (...) para capturar los argumentos como un array.
function imprimeArgumentos() {
    console.log(arguments); // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.
}
imprimeArgumentos('Fernando', 'Herrera'); // { nombre: 'Fernando', apellido: 'Herrera' }

const imprimeArgumentosFlecha = (...args/*, No puedo venir ninguna otra cosa */) => args; // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.
console.log(imprimeArgumentosFlecha('Fernando', 'Herrera')); // { nombre: 'Fernando', apellido: 'Herrera' }

const imprimirArgumentosFlecha2 = (edad, ...args) => {
    return args; // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.
}

// Si el primer parametro lo queremos independente, entonces al rest le pasamos el resto de los argumentos
const imprimirArgumentosFlecha3 = (edad, ...args) => ({ args }); // Se retona un objeto literal, siempre y cuaándo la propiedad del objeto se llame igual que la variable.

// Si el primer parametro lo queremos independente, entonces al rest le pasamos el resto de los argumentos
const imprimirSinEdad = imprimirArgumentosFlecha2(10, 'Fernando', 'Herrera'); // { nombre: 'Fernando', apellido: 'Herrera' }
// { edad: 10 } { args: [ 'Fernando', 'Herrera' ] }

//* Si el primer parametro lo queremos independente, entonces al rest le pasamos el resto de los argumentos
const [casado, vivo, nombre, saludo] = imprimirArgumentosFlecha2(10, true, 'Fernando', 'Herrera', 'Hola chavales!');
// Desestructurando el array que retorna la función, para obtener los valores de cada uno de los argumentos
console.log({ casado, vivo, nombre, saludo });

// DESESTRUCTURACIÓN DE ARGUMENTOS
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
// ejemplo de destructuración de objetos
const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}
// Llama a la función imprimePropiedades y le pasa el objeto tony como argumento
imprimePropiedades(tony);

//* Pro-TIP de diferencia
const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15 /* (VALOR POR DEFECTO) */, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}
imprimePropiedades2(tony); // { nombre: 'Tony Stark' } { codeName: 'Ironman' } { vivo: false } { edad: 40 } { trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ] }