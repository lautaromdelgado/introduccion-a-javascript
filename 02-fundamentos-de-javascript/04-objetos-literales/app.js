// Como saber cuándo es un objeto, es sencillo, si no es un dato primitivo es porque es un objeto.

//* Tenemos objetos literales que tiene pares de valores, es decir, una propiedad y un valor.
// Para agregar nuevas propiedades dentro del objeto, se separa por coma "j".
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: { // Se pueden colocar objetos dentro de objetos
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'], // Se pueden colocar arreglos dentro de objetos
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War' // Se pueden colocar propiedades con guiones, pero no es recomendable.
}
// Imprimir el objeto completo
console.log(personaje);

// Para imprimir en pantalla a una referencia del objeto, en este caso nombre pero puede ser codeName, edad, etc.
console.log('Nombre: ' + personaje.nombre);

// Para imprimir en pantalla a una referencia del objeto con una notación diferente.
console.log('Nombre; ' + personaje['nombre']);

// Acceder a la edad del personaje, por ejemplo.
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords); // Imprime el objeto coords
console.log('Latitud:', personaje.coords.lat); // Imprime la latitud
console.log('Longitud:', personaje.coords.lng); // Imprime la longitud

//* Practica: Imprimir el número de trajes que tiene el personaje.
console.log('Cantidad de trajes que tiene el personaje:', personaje.trajes.length); // Imprime por consola: 3
//* Practica: Imprimir el último de los trajes que tiene lel personaje.
console.log('Último traje que tiene el personaje:', personaje.trajes[personaje.trajes.length - 1]); // Me imprime el último traje que es 'Hulkbuster'
//* Practica: Saber si el personaje esta vivo.
const x = 'vivo';
// Obtener información de un objeto
console.log('vivo:', personaje[x]);

// Obtener información de la última pelicula(Cuando viene desde el backend con "-" ejemeplo: "user-id").
console.log('Última pelicula:', personaje['ultima-pelicula']);

// ----------------- Más detalles -----------------
delete personaje.edad; // Elimina la propiedad edad del objeto personaje
console.log(personaje); // Imprime el objeto personaje sin la propiedad edad

personaje.casado = true; // Agrega la propiedad casado al objeto personaje
console.log(personaje); // Imprime el objeto personaje con la propiedad casado

const entriesPares = Object.entries(personaje); // Convierte el objeto personaje en un arreglo
console.log(entriesPares); // Imprime el objeto personaje en un arreglo

// Para congelar un objeto y no se pueda modificar
Object.freeze(personaje);
// ! Congela a las propiedades dentro del objeto pero no a las propiedades, de otro arreglo u objeto que este dentro del objeto.

personaje.dinero = 100000; // No se puede agregar la propiedad dinero al objeto personaje

const propiedades = Object.getOwnPropertyNames(personaje); // Obtiene las propiedades del objeto personaje
console.log(propiedades); // Imprime las propiedades del objeto personaje
// Salida por consola: [ 'nombre', 'codeName', 'vivo', 'coords', 'trajes', 'direccion', 'ultima-pelicula', 'casado' ]

const valores = values(personaje); // Obtiene los valores del objeto personaje
console.log(valores); // Imprime los valores del objeto personaje
// Salida por consola: [ 'Tony Stark', 'Ironman', false, { lat: 34.034, lng: -118.7 }, [ 'Mark I', 'Mark V', 'Hulkbuster' ], { zip: '10880, 90265', ubicacion: 'Malibu, California' }, 'Infinity War', true ]

//* Enlace directo al mejor material sobre objetos literales: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object