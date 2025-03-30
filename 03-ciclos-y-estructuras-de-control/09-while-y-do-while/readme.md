# 🚀 Ciclos While y Do While en JavaScript

Los ciclos en JavaScript nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición. En este caso, exploraremos `while` y `do while`.

---

## 🔄 ¿Qué es un ciclo?
Los ciclos (`loops`) son estructuras de control que nos permiten ejecutar un código múltiples veces sin necesidad de escribirlo repetidamente.

### 🔹 While
El ciclo `while` ejecuta un bloque de código **mientras la condición sea verdadera**.

### 🔹 Do While
El ciclo `do while` ejecuta el código **al menos una vez**, incluso si la condición es falsa desde el inicio.

---

## 📌 Ejemplo práctico

```javascript
// Arreglo de autos
const carros = ['Mazda', 'Toyota', 'Honda', 'Chevrolet', 'Kia'];
let i = 0; // Variable de control

console.log("\n=== WHILE ===\n");
// 🔁 While: Se ejecuta mientras la condición sea verdadera
while (i < carros.length) {
    console.log(carros[i]); // Imprime el auto en la posición actual
    i++; // Incrementa el índice
}

console.log("\n=== DO WHILE ===\n");
// 🔁 Do While: Se ejecuta al menos una vez
i = 0;
do {
    console.log(carros[i]); // Imprime el auto en la posición actual
    i++;
} while (i < carros.length);
```

🔎 **Diferencia clave:**
- `while` primero evalúa la condición antes de ejecutar el código.
- `do while` ejecuta el código al menos una vez antes de evaluar la condición.

---

## ⛔ Rompiendo el ciclo con `break`
A veces queremos detener un ciclo antes de que se complete. Para eso usamos `break`.

```javascript
console.log("\n=== USANDO BREAK ===\n");
i = 0;
while (i < carros.length) {
    if (carros[i] === 'Toyota') {
        break; // 🚨 Rompe el ciclo cuando encuentra 'Toyota'
    }
    console.log(carros[i]);
    i++;
}
```

---

## ⏭️ Saltando una iteración con `continue`
Si queremos omitir un valor y seguir con el ciclo, usamos `continue`.

```javascript
console.log("\n=== USANDO CONTINUE ===\n");
i = 0;
while (i < carros.length) {
    if (carros[i] === 'Toyota') {
        i++;
        continue; // ⏩ Salta esta iteración y sigue con el siguiente auto
    }
    console.log(carros[i]);
    i++;
}
```

---

## ⚠️ Consideraciones importantes
- Si la condición en `while` es `false`, el código **nunca se ejecutará**.
- `do while` **siempre se ejecutará al menos una vez**, sin importar la condición.
- **Evita ciclos infinitos**: Asegúrate de modificar la variable de control en cada iteración.

---

🎯 ¡Ahora ya sabes cómo usar `while` y `do while` de manera efectiva en JavaScript! 🚀

