# Resumen de la Sección 2 - Fundamentos de JavaScript

## Tipos de Datos Primitivos

JavaScript cuenta con varios tipos de datos primitivos:
- **String**: Cadenas de texto (Ejemplo: `'Hola Mundo'`)
- **Number**: Valores numéricos (Ejemplo: `42`, `3.14`)
- **Boolean**: Valores `true` o `false`
- **Undefined**: Variable declarada sin valor asignado
- **Null**: Representa la ausencia intencional de valor
- **Symbol**: Valores únicos e inmutables
- **BigInt**: Números enteros extremadamente grandes

```js
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
let sinValor;
let nulo = null;
```

## Tipo de Datos por Referencia

Los objetos en JavaScript son tipos de datos por referencia. Esto significa que cuando se asigna un objeto a una nueva variable, ambas variables apuntan al mismo objeto en memoria.

```js
let persona = { nombre: "Carlos", edad: 30 };
let otraPersona = persona;
otraPersona.edad = 35;
console.log(persona.edad); // 35
```

## Declaración de Variables

JavaScript tiene tres formas de declarar variables:
- `var`: Global o de función, puede ser reasignada y redeclarada.
- `let`: Bloque de alcance, puede ser reasignada pero no redeclarada.
- `const`: Bloque de alcance, no puede ser reasignada ni redeclarada.

```js
var globalVar = "Soy global";
let variableLet = "Solo existe en su bloque";
const constante = "No se puede cambiar";
```

## Objetos Literales

Los objetos en JavaScript se pueden crear usando la sintaxis de objeto literal.

```js
const persona = {
  nombre: "Ana",
  edad: 28,
  profesion: "Desarrolladora",
};
console.log(persona.nombre); // Ana
```

## Arreglos

Los arreglos permiten almacenar múltiples valores en una sola variable.

```js
const frutas = ["Manzana", "Pera", "Banana"];
console.log(frutas[1]); // Pera
```

### Métodos comunes de arreglos:
- `.push(elemento)`: Agrega un elemento al final
- `.pop()`: Elimina el último elemento
- `.shift()`: Elimina el primer elemento
- `.unshift(elemento)`: Agrega un elemento al inicio
- `.splice(inicio, cantidad)`: Elimina o reemplaza elementos

```js
const numeros = [1, 2, 3, 4];
numeros.push(5); // [1, 2, 3, 4, 5]
numeros.pop(); // [1, 2, 3, 4]
```

## Funciones en JavaScript

### Funciones Tradicionales

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Juan")); // Hola, Juan
```

### Funciones de Flecha

```js
const saludarFlecha = (nombre) => `Hola, ${nombre}`;
console.log(saludarFlecha("María"));
```

## Desestructuración

La desestructuración permite extraer valores de objetos y arreglos de forma sencilla.

### Desestructuración de Objetos

```js
const usuario = { nombre: "Lucas", edad: 22 };
const { nombre, edad } = usuario;
console.log(nombre, edad); // Lucas 22
```

### Desestructuración de Arreglos

```js
const colores = ["Rojo", "Verde", "Azul"];
const [primero, segundo] = colores;
console.log(primero, segundo); // Rojo Verde
```

## Pro-Tips

### Retorno Implícito en Funciones de Flecha

Si una función de flecha retorna un objeto, se debe envolver entre paréntesis:

```js
const crearPersona = (nombre, edad) => ({ nombre, edad });
console.log(crearPersona("Pedro", 30)); // { nombre: 'Pedro', edad: 30 }
```

### Uso de `arguments` en Funciones

Las funciones normales tienen acceso a `arguments`, pero las de flecha no.

```js
function mostrarArgs() {
  console.log(arguments);
}
mostrarArgs(1, 2, 3); // [1, 2, 3]

const mostrarArgsFlecha = (...args) => console.log(args);
mostrarArgsFlecha(1, 2, 3); // [1, 2, 3]
```

### Copia de Objetos y Arreglos sin Referencia

Usa el operador **spread (`...`)** para copiar objetos o arreglos sin modificar el original.

```js
const persona = { nombre: "Sofía", edad: 25 };
const nuevaPersona = { ...persona };
nuevaPersona.nombre = "Marta";
console.log(persona.nombre); // Sofía
```

```js
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros];
nuevosNumeros.push(4);
console.log(numeros); // [1, 2, 3]
```

---
Este resumen cubre los fundamentos clave de JavaScript explicados en la Sección 2. Con estos conceptos dominados, estarás listo para profundizar en temas más avanzados. 🚀

