# Funciones en JavaScript

## Introducción
Las funciones en JavaScript son bloques de código reutilizables que ejecutan una tarea específica. Existen distintos tipos de funciones, cada una con sus particularidades y usos recomendados.

---

## Definición de Funciones
### Función Tradicional
Una función sirve para centralizar la lógica de un procedimiento:
```js
function saludar() {
    console.log('Hola Mundo');
}
// Llamamos a la función
saludar();
```

**Nota:** La diferencia entre una función y un método es que un método se encuentra dentro de un objeto, mientras que una función no.

---

## Funciones Anónimas
Las funciones anónimas son aquellas que no tienen un nombre propio, pero pueden asignarse a una variable:
```js
const saluda2 = function () {
    console.log('Hola Mundo');
}
// Llamamos a la función anónima
saluda2();
```
Este método evita que la función sea redeclarada accidentalmente en otro lugar del código.

---

## Funciones con Argumentos
Las funciones pueden recibir parámetros que permiten personalizar su ejecución:
```js
function saludarConArgumentos(nombre) {
    return console.log(`Hola ${nombre}`);
}
// Uso
saludarConArgumentos('Luis'); // Salida: Hola Luis
```
Si no se envía un argumento, la función devolverá `Hola undefined`.

```js
const saludarConArgumentos2 = function (apellido) {
    return console.log('Hola sr/a', apellido);
}
saludarConArgumentos2('Perez'); // Salida: Hola sr/a Perez
```

---

## Funciones de Flecha (Arrow Functions o Lambdas)
Las funciones de flecha son una sintaxis más compacta para definir funciones:
```js
const saludarFlecha = () => {
    console.log('Hola Flecha');
}
// Llamamos a la función
saludarFlecha(); // Salida: Hola Flecha
```

Si la función recibe argumentos:
```js
const saludarFlecha2 = (nombre, apellido) => {
    console.log('Hola', nombre, apellido);
}
saludarFlecha2('Luis', 'Perez'); // Salida: Hola Luis Perez
```

Si solo tiene un argumento, los paréntesis son opcionales:
```js
const saludarFlecha3 = nombreCompleto => {
    console.log('Hola', nombreCompleto);
}
saludarFlecha3('Luis Perez'); // Salida: Hola Luis Perez
```

---

## Funciones con Return
Las funciones pueden devolver valores en lugar de solo imprimir datos:
```js
const sumar = (a, b) => {
    return a + b;
}
console.log(sumar(5, 3)); // Salida: 8
```
Si la función solo tiene una línea, se puede simplificar:
```js
const sum = (a, b) => a + b;
console.log(sum(32, 10)); // Salida: 42
```

### Retorno de un valor aleatorio con función de flecha
```js
const obtenerRandomFlecha = () => Math.random();
console.log(obtenerRandomFlecha());
```

---

## Conclusión
Las funciones en JavaScript permiten modularizar el código, haciéndolo más reutilizable y fácil de entender. Las funciones de flecha simplifican la sintaxis y son ideales para funciones cortas. Para más información, consulta la [documentación oficial de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions).

