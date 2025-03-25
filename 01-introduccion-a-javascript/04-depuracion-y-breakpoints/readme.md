# Episodio: Depuración y Breakpoints

Este episodio introduce los conceptos de **depuración** en JavaScript y el uso de **breakpoints** en las herramientas de desarrollo del navegador.

## Archivos del Proyecto

### `index.html`
Este archivo HTML sirve como punto de entrada para ejecutar el código JavaScript en el navegador.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Depuración y Breakpoints</title>
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
Este archivo contiene código JavaScript para demostrar cómo funcionan los **breakpoints** y cómo depurar variables.

```javascript
// * Depuración y Breakpoints
let a = 10,
    b = 20,
    c = "Hola ",
    d = "Mundo",
    x = a + b;

// ** Breakpoint
const SALUDO = c + d;
```

#### Descripción del Código:
- Se declaran varias variables:
  - `a` y `b` son números.
  - `c` y `d` son cadenas de texto.
- Se calcula la suma de `a` y `b` y se almacena en la variable `x`.
- Se define una constante `SALUDO` que concatena las cadenas `c` y `d`.

#### Propósito:
- Demostrar cómo establecer breakpoints en el código para inspeccionar el valor de las variables en tiempo de ejecución.
- Facilitar la comprensión del flujo de ejecución del programa.

## Cómo Usar Este Episodio
1. Abre el archivo `index.html` en un navegador web.
2. Abre las herramientas de desarrollo del navegador (presiona `F12` o `Ctrl+Shift+I`).
3. Ve a la pestaña **"Sources"** y localiza el archivo `app.js`.
4. Establece un breakpoint en cualquier línea del archivo `app.js`.
5. Recarga la página para detener la ejecución en el breakpoint y observar los valores de las variables.

## Notas Adicionales
- Este episodio es una introducción básica a la depuración en JavaScript.
- Puedes modificar el código en `app.js` para experimentar con diferentes valores y ver cómo cambian las variables en tiempo de ejecución.

