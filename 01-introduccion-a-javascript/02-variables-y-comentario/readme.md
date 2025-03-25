# Variables y Comentarios en JavaScript

Este documento explica el uso de **variables y comentarios** en JavaScript, destacando las mejores prácticas y su funcionamiento.

## Comentarios en JavaScript

Los comentarios permiten agregar notas en el código para mejorar su comprensión. No afectan la ejecución del programa y pueden ser de dos tipos:

### Comentarios de una sola línea
Se utilizan con `//` y se aplican a todo el contenido de la misma línea.
```javascript
// Esto es un comentario de una sola línea
let a = 10; // También puede estar al final de una línea de código
```

### Comentarios de varias líneas
Se inician con `/*` y finalizan con `*/`. Permiten escribir comentarios extensos.
```javascript
/* 
   Esto es un comentario
   en varias líneas
*/
```

## Variables en JavaScript

JavaScript permite declarar variables utilizando `var`, `let` y `const`. Cada una tiene características diferentes:

### Declaración de Variables
```javascript
let a = 10;
var b = 10;
const c = 10;
```

### Diferencias entre `var`, `let` y `const`

#### `var` (NO RECOMENDADO)
- Permite reasignar y redeclarar la misma variable.
- Tiene un **ámbito de función**, lo que puede causar problemas de seguridad y mantenimiento.
```javascript
var x = 5;
var x = 10; // Esto es permitido con var
console.log(x); // 10
```

#### `let` (RECOMENDADO)
- Permite reasignar el valor, pero **no permite redeclarar la misma variable en el mismo ámbito**.
- Tiene un **ámbito de bloque**, lo que mejora la seguridad del código.
```javascript
let y = 5;
y = 20; // Se puede reasignar
console.log(y); // 20
```

#### `const` (PARA VALORES QUE NO CAMBIAN)
- Debe declararse con un valor asignado.
- **No permite reasignar ni redeclarar**.
- Hace referencia a un valor en memoria que no puede cambiar.
```javascript
const z = 30;
z = 40; // Error: No se puede reasignar una constante
```

### Declaración en una sola línea
Se pueden declarar múltiples variables en una sola línea para mayor claridad.
```javascript
let y = 10, x = 20, z = 30;
const d = y + x + z;
console.log(d); // 60
```

## Conclusión
- **Usa `let` para variables que pueden cambiar.**
- **Usa `const` para valores que deben permanecer constantes.**
- **Evita `var` debido a su comportamiento problemático.**
- **Utiliza comentarios para documentar tu código de manera efectiva.**

¡Ahora estás listo para trabajar con variables y comentarios en JavaScript de manera eficiente! 🚀