# Palabras Reservadas y Nombres de Variables en JavaScript

En JavaScript, las palabras reservadas y las reglas para nombrar variables son esenciales para escribir código limpio y sin errores. A continuación, explicamos su uso y mejores prácticas.

## 1. Palabras Reservadas
Las **palabras reservadas** son términos que tienen un significado especial en JavaScript y **no pueden usarse como nombres de variables, funciones o identificadores**.

Ejemplo de palabras reservadas:
```javascript
// Esto generará un error
//! let const = 123;
```
Algunas de las palabras reservadas más comunes en JavaScript incluyen:
```text
if, while, for, try, enum, class, function, return, break, continue, case, switch,
default, delete, do, else, export, extends, finally, import, in, instanceof,
new, super, this, throw, typeof, var, void, with, yield, catch, debugger,
false, true, null, abstract, boolean, byte, char, double, final, float, goto,
implements, int, interface, long, native, package, private, protected, public,
short, static, synchronized
```

✅ **Uso correcto:**
```javascript
let constante = 123; // Correcto
```

## 2. Nombres de Variables
Para definir nombres de variables en JavaScript, existen ciertas reglas:

🔹 **Reglas generales:**
- No pueden iniciar con un número.
- Solo pueden contener letras, números, `$` o `_`.
- No pueden contener espacios ni puntos (`.`).
- No pueden coincidir con palabras reservadas.

✅ **Ejemplo correcto:**
```javascript
let miVariable = 10; // Correcto
let _privado = "Dato privado"; // Correcto
let $dinero = 1000; // Correcto
```

❌ **Ejemplo incorrecto:**
```javascript
let 1variable = 10; // ❌ Error: No puede comenzar con un número
let nombre.apellido = "Peter Parker"; // ❌ Error: No puede contener un punto
```

🔹 **Convenciones de escritura:**
En JavaScript, existen varias formas de escribir nombres de variables:
- `camelCase`: `miVariable` (✅ Recomendado en JavaScript)
- `snake_case`: `mi_variable` (Más común en Python)
- `PascalCase`: `MiVariable` (Usado en clases y constructores)

✅ **Ejemplo:**
```javascript
let nombreCompleto = "Tony Stark"; // camelCase (Recomendado)
let NombreCompleto = "Steve Rogers"; // PascalCase (Usado en clases)
let nombre_completo = "Bruce Banner"; // snake_case (Menos común en JS)
```

## 3. Buenas Prácticas
✔ Usa nombres descriptivos para las variables.
✔ Sigue una convención consistente (`camelCase` en JavaScript).
✔ Evita caracteres especiales innecesarios (`$` y `_` solo si es relevante).
✔ No uses nombres muy genéricos como `a`, `b`, `dato`.

```javascript
// ❌ Malas prácticas
let x = 10; // Poco descriptivo
let d = "John"; // No indica qué representa

// ✅ Buenas prácticas
let edadUsuario = 30;
let nombreUsuario = "John Doe";
```

## Conclusión
Las palabras reservadas no pueden utilizarse como nombres de variables, y es importante seguir reglas y convenciones para definir variables correctamente en JavaScript. Un código limpio y estructurado facilita su lectura y mantenimiento.

