# Proyecto: Hola Mundo en JavaScript

Este proyecto demuestra el uso básico de `console.log()` para imprimir mensajes en la consola del navegador.

## ¿Qué es `console.log()`?

En JavaScript, `console.log()` es una función utilizada para mostrar mensajes en la consola del navegador o en entornos de desarrollo. Es una herramienta fundamental para la depuración de código, permitiendo visualizar el estado de variables y el flujo de ejecución del programa.

## Archivos del Proyecto

### `index.html`
Este archivo es el punto de entrada de la aplicación y carga el script `app.js`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola-Mundo</title>
</head>

<body>
    <!-- Llamo al script del app.js -->
    <script src="app.js"></script>
</body>

</html>
```

### `app.js`
Este archivo contiene el código JavaScript que imprime "Hola mundo!" en la consola del navegador.

```javascript
/* Imprimir un mensaje en consola:
Hola mundo! (como salida en consola) */

console.log('Hola mundo!');
```

## ¿Cómo ejecutar este código?

1. Abre el archivo `index.html` en un navegador web.
2. Abre las herramientas de desarrollo del navegador (`F12` o `Ctrl+Shift+I` en la mayoría de los navegadores).
3. Ve a la pestaña **Console** (Consola).
4. Deberías ver el mensaje: `Hola mundo!` impreso en la consola.

## ¿Por qué es importante `console.log()`?
- Es útil para depurar errores en el código.
- Permite inspeccionar valores de variables durante la ejecución.
- Es una herramienta fundamental en el desarrollo y aprendizaje de JavaScript.

## Notas Adicionales
Puedes modificar el contenido dentro de `console.log()` para imprimir otros mensajes y experimentar con diferentes tipos de datos como números, objetos y arrays.

