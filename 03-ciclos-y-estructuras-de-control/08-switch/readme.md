# 🎯 Sentencia `switch` en JavaScript

La sentencia `switch` en JavaScript es una alternativa al `if-else if-else`, permitiéndonos evaluar una expresión contra múltiples casos posibles de una manera más ordenada y legible. 🚀

---

## 🛠️ ¿Cómo funciona `switch`?

1. Evalúa una expresión.
2. Compara su valor con los `case` definidos (usa estrictamente `===` 🔍).
3. Ejecuta el código correspondiente al primer `case` que coincida.
4. Si no encuentra coincidencias, ejecuta el `default` (si está definido).

---

## 📌 Ejemplo práctico

```javascript
// Declaración del día
const dias = 0; // domingo

switch (dias /* Aquí hace un "===" para comparar */) {
    case 0: console.log('Domingo'); break;
    case 1: console.log('Lunes'); break;
    case 2: console.log('Martes'); break;
    case 3: console.log('Miércoles'); break;
    case 4: console.log('Jueves'); break;
    case 5: console.log('Viernes'); break;
    case 6: console.log('Sábado'); break;
    default: console.log('No es un día de la semana'); break;
    // Se ejecuta si ninguna de las condiciones anteriores se cumple
}
```

🔹 **Importante:**
- **`break` es clave** 🛑: Si se omite, JavaScript ejecutará los siguientes `case` en cadena (fall-through).
- **`default` es opcional**, pero recomendable si queremos manejar valores no esperados. 🧐

---

## 🎯 ¿Cuándo usar `switch`?
✅ Cuando tenemos múltiples condiciones basadas en un mismo valor.
✅ Si queremos mejorar la legibilidad y rendimiento comparado con varios `if-else if`.
✅ Para agrupar casos con lógica compartida (sin usar `break`).

```javascript
const fruta = 'manzana';

switch (fruta) {
    case 'banana':
    case 'manzana':
    case 'pera':
        console.log('Es una fruta popular 🍏');
        break;
    default:
        console.log('Fruta desconocida 🤷‍♂️');
}
```

📝 **Nota:** `switch` es útil, pero a veces los objetos o los operadores ternarios pueden ser alternativas más elegantes. 😉

---

## 🚀 Pro Tip
Si quieres manejar condiciones más avanzadas o evaluar rangos de valores, el `if-else` podría ser más flexible. Pero si trabajas con valores exactos (`string`, `number`), `switch` es una opción poderosa y limpia. 💡

🔥 ¡Ahora ya dominas `switch` en JavaScript! ¿Listo para aplicarlo en tus proyectos? 😃