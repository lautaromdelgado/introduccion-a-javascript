# Objetos Literales en JavaScript

## ¿Qué son los objetos literales?
En JavaScript, un objeto literal es una estructura de datos que almacena pares clave-valor. Las claves son los nombres de las propiedades y los valores pueden ser cualquier tipo de dato, incluyendo otros objetos o arreglos.

## Creación de un Objeto Literal
```js
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
```

## Acceder a las Propiedades
Podemos acceder a las propiedades de un objeto de dos formas:

### Notación de punto:
```js
console.log(personaje.nombre); // 'Tony Stark'
console.log(personaje.coords.lat); // 34.034
```

### Notación de corchetes:
```js
console.log(personaje['nombre']); // 'Tony Stark'
console.log(personaje['ultima-pelicula']); // 'Infinity War'
```

## Modificar Propiedades
```js
personaje.edad = 45;
personaje.casado = true;
console.log(personaje);
```

## Eliminar Propiedades
```js
delete personaje.edad;
console.log(personaje);
```

## Contar Propiedades
```js
console.log('Cantidad de trajes:', personaje.trajes.length);
```

## Acceder al último Elemento de un Arreglo dentro de un Objeto
```js
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);
```

## Convertir un Objeto en un Arreglo de Pares Clave-Valor
```js
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
```

## Obtener Solo las Claves o los Valores del Objeto
```js
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

const valores = Object.values(personaje);
console.log(valores);
```

## Congelar un Objeto (Evitar Modificaciones)
```js
Object.freeze(personaje);
// No se podrán agregar ni modificar propiedades
personaje.dinero = 100000;
console.log(personaje.dinero); // undefined
```

## Recursos Adicionales
Para aprender más sobre objetos literales en JavaScript, consulta la documentación oficial:
[MDN - Objetos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)

