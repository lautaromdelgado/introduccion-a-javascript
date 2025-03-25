# Proyecto: Consola

Este proyecto tiene como objetivo enseñar el uso de la **consola del navegador** para depuración y visualización de datos en JavaScript.

## Archivos del Proyecto

### `index.html`
Este archivo HTML es el punto de entrada del proyecto. Su propósito principal es cargar el archivo JavaScript `app.js` para ejecutarlo en el navegador.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consola</title>
</head>

<body>
    <script src="app.js"></script>
</body>

</html>
```

#### Descripción:
- Define una estructura básica de un documento HTML.
- Incluye el archivo `app.js` mediante la etiqueta `<script>` para ejecutar el código JavaScript.

### `app.js`
Este archivo contiene ejemplos de uso de la consola del navegador para imprimir y visualizar valores.

```javascript
let a = 10,
    b = 20,
    c = 30,
    d = 40,
    e = a + b + c + d;

console.log(e); // 100
console.warn(e); // 100
console.error(e); // 100
console.info(e); // 100

// ! No se recomienda usar console.log() para imprimir varias variables
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);
console.log('e', e);

// * Se recomienda usar console.log({entre llaves}) para imprimir varias variables
console.table({ a });
console.table({ b });
console.table({ c });
console.table({ d });
console.table({ e });

// * Se recomienda usar console.table() para imprimir varias variables
console.table({ a, b, c, d, e });

// * Declarar variables en una sola línea
let l = 'Hola',
    m = 'Mundo',
    n = 'JavaScript',
    o = 'ES6';

const SALUDO = `${l} ${m} ${n} ${o}`; // Hola Mundo JavaScript ES6
console.log(SALUDO); // Hola Mundo JavaScript ES6 por consola del navegador
```

#### Descripción del Código:
- Se declaran varias variables (`a`, `b`, `c`, `d`) y se calcula su suma en `e`.
- Se usan diferentes métodos de `console`:
  - `console.log()` para imprimir valores normales.
  - `console.warn()` para mostrar advertencias.
  - `console.error()` para errores.
  - `console.info()` para información.
- Se demuestra la diferencia entre `console.log()` y `console.table()` para visualizar múltiples variables.
- Se muestra cómo declarar múltiples variables en una sola línea y concatenarlas en un saludo.

## Cómo Usar Este Proyecto
1. Abre el archivo `index.html` en un navegador web.
2. Abre las herramientas de desarrollo del navegador (generalmente con `F12` o `Ctrl+Shift+I`).
3. Ve a la pestaña **"Console"**.
4. Observa la salida de los diferentes métodos de `console`.
5. Modifica el código en `app.js` para experimentar con diferentes valores y métodos de consola.

## Notas Adicionales
- Este proyecto es una introducción básica al uso de la consola del navegador en JavaScript.
- `console.table()` es una excelente herramienta para visualizar objetos y conjuntos de datos de manera organizada.

