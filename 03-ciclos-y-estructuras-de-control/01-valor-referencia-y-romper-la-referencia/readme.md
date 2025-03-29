# Valores de referencia y romper la referencia en JavaScript

## 📌 Valor vs. Referencia
En JavaScript, los valores se pueden almacenar y manipular de dos maneras:

1. **Por valor**: Se aplica a los tipos de datos primitivos (números, strings, booleanos, null, undefined, symbols, BigInt). Cuando asignamos una variable a otra, se copia el valor.
2. **Por referencia**: Se aplica a objetos y arrays. En este caso, al asignar una variable a otra, ambas compartirán la misma referencia en memoria.

---

## 🔹 Valores primitivos (Por Valor)
Cuando se asigna un valor primitivo a otra variable, se copia el valor, por lo que modificar uno no afecta al otro.

```javascript
let a = 10;
let b = a; // Se copia el valor de 'a' en 'b'
a = 30; // Se cambia el valor de 'a'

console.log({ a, b }); // { a: 30, b: 10 }
```

Aquí, `b` mantiene el valor `10` porque se copió el valor de `a`, no la referencia.

---

## 🔹 Objetos y Referencias
Cuando se asigna un objeto a otra variable, ambas variables apuntan a la misma referencia en memoria.

```javascript
let juan = { nombre: 'Juan', edad: 30 };
let ana = juan; // Se copia la referencia de 'juan' en 'ana'
ana.nombre = 'Ana';

console.log({ juan, ana }); // { juan: { nombre: 'Ana', edad: 30 }, ana: { nombre: 'Ana', edad: 30 } }
```

Aquí, al modificar `ana.nombre`, también cambia `juan.nombre` porque ambos apuntan al mismo objeto en memoria.

---

## 🔹 Funciones y Referencias
Las funciones pueden modificar directamente los objetos si reciben una referencia.

```javascript
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
const tony = cambiaNombre(peter);

console.log({ peter, tony }); // { peter: { nombre: 'Tony' }, tony: { nombre: 'Tony' } }
```

Aquí, `peter` y `tony` apuntan al mismo objeto, por lo que la modificación dentro de la función afecta a ambos.

---

## 🚀 Cómo romper la referencia
Para evitar modificar el objeto original, podemos crear una copia con el operador **spread (`...`)**.

```javascript
let lauta = { nombre: 'Taro' };
let lucas = { ...lauta }; // Se crea una copia del objeto
lucas.nombre = 'Lucas';

console.log({ lauta, lucas }); // { lauta: { nombre: 'Taro' }, lucas: { nombre: 'Lucas' } }
```

Aquí `lucas` es una copia independiente de `lauta`, por lo que modificar `lucas.nombre` no afecta `lauta.nombre`.

---

## 🔹 Arreglos y Referencias
Los arreglos también se pasan por referencia.

```javascript
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });
```

Aquí, `otrasFrutas` y `frutas` apuntan al mismo array en memoria, por lo que agregar `'Mango'` a `otrasFrutas` también afecta `frutas`.

---

## 🚀 Rompiendo la referencia en arreglos
Para crear una copia de un array sin afectar el original, usamos el **spread operator (`...`)** o `slice()`.

### 🔹 Con spread operator
```javascript
const masFrutas = [...frutas];
masFrutas.push('Sandía');

console.table({ frutas, masFrutas });
```

### 🔹 Con slice()
```javascript
const nuevasFrutas = frutas.slice();
nuevasFrutas.push('Sandía', 'Mandarina');

console.table({ frutas, nuevasFrutas });
```

---

## ⚡ Comparando rendimiento: spread vs slice
Podemos medir qué método es más rápido:

```javascript
console.time('slice');
const conSlice = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const conSpread = [...frutas];
console.timeEnd('spread');
```

El resultado puede variar, pero en general `slice()` y `spread` tienen un rendimiento similar en la mayoría de los casos.

---

## 🎯 Conclusión
- **Los valores primitivos se copian por valor**, mientras que **los objetos y arrays se copian por referencia**.
- Para evitar modificar un objeto o array original, **usa el spread operator (`...`) o `slice()`**.
- **Las funciones pueden modificar objetos directamente** si reciben una referencia, por lo que es recomendable trabajar con copias cuando se necesita evitar modificaciones no deseadas.

¡Dominar estos conceptos te ayudará a evitar errores inesperados en tu código! 🚀