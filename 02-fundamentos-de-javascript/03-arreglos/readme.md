# Arreglos en JavaScript

Los **arreglos** en JavaScript son estructuras que permiten almacenar múltiples valores en una sola variable. Son un tipo de **objeto** que actúa como una lista ordenada de elementos.

## Características de los Arreglos

- Pueden contener cualquier tipo de dato.
- Su índice comienza desde **0**.
- Son dinámicos, es decir, pueden crecer o reducirse en tamaño.

### Declaración de Arreglos
Existen varias formas de declarar un arreglo en JavaScript:

```javascript
const arr = new Array(10); // Crea un arreglo con 10 posiciones vacías.
console.log(arr); // [ <10 empty items> ]

const arr1 = []; // Crea un arreglo vacío.
console.log(arr1); // []

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos[0]); // Acceder al primer elemento -> 'Mario 3'
```

### Arreglos con Diferentes Tipos de Datos

En JavaScript, los arreglos pueden contener múltiples tipos de datos debido a su **tipado débil**.

```javascript
let mezcla = [true, 123, 'Fernando', 1 + 2, function () { }, () => { }, { a: 1 }, ['X', 'Megaman', 'Zero']];
console.log(mezcla);
```

Para acceder a elementos anidados:

```javascript
console.log(mezcla[7][1]); // 'Megaman'
```

## Métodos y Propiedades de los Arreglos
### Propiedades
- **`length`**: Devuelve la cantidad de elementos en un arreglo.

```javascript
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length); // Largo: 4
```

### Métodos
#### Recorrer un Arreglo
Para recorrer los elementos de un arreglo se puede usar `forEach`:

```javascript
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});
```

#### Agregar Elementos
- **`push()`**: Agrega un elemento al final del arreglo.
- **`unshift()`**: Agrega un elemento al inicio del arreglo.

```javascript
juegos.push('F-Zero');
console.log(juegos); // ['Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero']

juegos.unshift('Fire Emblem');
console.log(juegos); // ['Fire Emblem', 'Zelda', 'Mario', 'Metroid', 'Chrono', 'F-Zero']
```

#### Eliminar Elementos
- **`pop()`**: Elimina el último elemento.
- **`splice(pos, num)`**: Elimina elementos desde una posición específica.

```javascript
juegos.pop();
console.log(juegos); // Último elemento eliminado.

juegos.splice(1, 2);
console.log(juegos); // Elimina dos elementos desde la posición 1.
```

#### Buscar Elementos
- **`indexOf()`**: Devuelve la posición de un elemento o `-1` si no existe.

```javascript
let metroidIndex = juegos.indexOf('Chrono');
console.log({ metroidIndex }); // { metroidIndex: 1 }
```

## Conclusión
Los arreglos en JavaScript son herramientas fundamentales para manipular y organizar datos. Conociendo sus propiedades y métodos, se pueden optimizar procesos y mejorar el manejo de la información en nuestras aplicaciones.

