# Tipos de Datos Primitivos en JavaScript

JavaScript es un lenguaje **débilmente tipado**, lo que significa que no es necesario declarar explícitamente el tipo de una variable. En su lugar, el tipo de dato es determinado automáticamente en función del valor asignado.

## Tipos de Datos Primitivos

Los **tipos primitivos** en JavaScript representan información que **no es un objeto** y son **inmutables** (no pueden ser modificados directamente). Estos son:

### 1. **Boolean**
Es un tipo de dato lógico que solo puede tener dos valores: `true` o `false`.

```javascript
let esMarvel = true;
let estoNoEsMarvel = false;
console.log(typeof esMarvel); // "boolean"
```

### 2. **Null**
Es un valor especial que indica la **ausencia de un valor**.

```javascript
let soyNull = null;
console.log(typeof soyNull); // "object" (Esto es un bug histórico de JavaScript)
```

### 3. **Undefined**
Una variable declarada pero **no inicializada** tiene el valor `undefined`.

```javascript
let superPoder;
console.log(typeof superPoder); // "undefined"
```

### 4. **Number**
Incluye **números enteros y decimales**.

```javascript
let edad = 33;
let altura = 1.70;
console.log(typeof edad); // "number"
console.log(typeof altura); // "number"
```

### 5. **String**
Representa **cadenas de texto**.

```javascript
let nombre = 'Peter Parker';
console.log(typeof nombre); // "string"
```

También se pueden definir con comillas dobles (`""`), simples (`''`) o **backticks** (````).

```javascript
let name1 = 'Lionel Messi'; // Comillas simples
let name2 = "Cristiano Ronaldo"; // Comillas dobles
let name3 = `Neymar Jr`; // Backticks
```

🔹 **Recomendación:** El uso de comillas simples, dobles o backticks es decisión del desarrollador, aunque los backticks (` `` `) permiten interpolación y multilinea.

### 6. **Symbol**
Es un tipo de dato **único e inmutable**. Se usa para crear identificadores únicos.

```javascript
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1); // "symbol"
console.log(symbol1 === symbol2); // false (Son únicos)
```

## Conclusión
Los tipos de datos primitivos en JavaScript son la base del lenguaje. Es importante conocerlos para evitar errores y aprovechar al máximo la flexibilidad de JavaScript.

**Recuerda:** Puedes utilizar `typeof` para verificar el tipo de dato de una variable:

```javascript
console.log(typeof 10); // "number"
console.log(typeof "Hola"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (Bug en JS)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("a")); // "symbol"
```

