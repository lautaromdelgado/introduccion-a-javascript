# Lógica Booleana en JavaScript

La lógica booleana es fundamental en la programación y nos permite trabajar con valores `true` y `false` para controlar el flujo de nuestras aplicaciones. JavaScript ofrece operadores lógicos que permiten evaluar expresiones y tomar decisiones.

## Operador de Negación (`!`)
La negación (`!`) invierte el valor booleano de una expresión:

```js
console.log(true);  // true
console.log(!true); // false
console.log(!false); // true
```

Podemos aplicarlo en cualquier expresión que devuelva un booleano:

```js
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

console.log(!regresaTrue()); // false
```

## Operador AND (`&&`)
El operador AND (`&&`) devuelve `true` si **todas** las expresiones son verdaderas:

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

Ejemplo con funciones:

```js
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.log(regresaFalse() && regresaTrue()); // false
```

> **Nota:** Si la primera expresión es `false`, JavaScript no evalúa la segunda expresión.

## Operador OR (`||`)
El operador OR (`||`) devuelve `true` si **al menos una** expresión es verdadera:

```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

Ejemplo con funciones:

```js
console.log(regresaTrue() || regresaFalse()); // true
```

> **Nota:** Si la primera expresión es `true`, JavaScript no evalúa la segunda expresión.

## Evaluaciones en Expresiones Largas
Se pueden encadenar varias expresiones para determinar un resultado final:

```js
console.warn('=====Sentencias largas=====');
console.log(true && true && true && true && false); // false
console.log(false || false || false || true); // true
```

La lógica booleana nos ayuda a estructurar el comportamiento de nuestras aplicaciones de manera eficiente y evitar evaluaciones innecesarias.

