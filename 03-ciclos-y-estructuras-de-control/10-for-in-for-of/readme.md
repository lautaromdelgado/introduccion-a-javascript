# ✨ Bucles en JavaScript: `for`, `for...in` y `for...of`

Los bucles (`loops`) en JavaScript nos permiten recorrer estructuras de datos como `arrays` y `objetos`. En este documento, aprenderemos las diferencias entre `for`, `for...in` y `for...of` con ejemplos claros y explicativos. 

---

## ⚡ For Tradicional

El `for` clásico nos permite iterar sobre los elementos de un array utilizando un índice.

```javascript
const heroes = ['Batman', 'Superman', 'Aquaman', 'Flash', 'Green Lantern'];

console.warn('=== For tradicional ===');
for (let i = 0; i < heroes.length; i++) {
    console.log(`${i}: ${heroes[i]}`);
}
```
✅ **Útil cuando necesitas acceder al índice de cada elemento.**

---

## 🌟 For...in

El `for...in` recorre las propiedades enumerables de un **objeto** o los índices de un **array**.

```javascript
console.warn('=== For in ===');
for (let index in heroes) {
    console.log(`${index}: ${heroes[index]}`);
}
```
✅ **Recomendado para recorrer objetos, aunque puede usarse con arrays (pero no es la mejor opción).**

⚠️ **No garantiza el orden de los elementos en los objetos.**

---

## 🔍 For...of

El `for...of` nos permite recorrer **valores** directamente sin necesidad de usar índices.

```javascript
console.warn('=== For of ===');
for (let heroe of heroes) {
    console.log(heroe);
}
```
✅ **Ideal para recorrer arrays de manera limpia y sencilla.**

🚀 **Más legible y eficiente que `for...in` para recorrer arrays.**

---

## 🎯 ¿Cuándo usar cada uno?

| Tipo de Bucle  | ¿Cuándo usarlo? |
|---------------|---------------|
| `for` tradicional | Cuando necesitas el índice de los elementos. |
| `for...in` | Para recorrer propiedades de objetos (⚠️ no recomendado para arrays). |
| `for...of` | Para recorrer directamente los valores de un array o iterable. |

---

## 💡 Conclusión

Cada tipo de bucle tiene su propósito en JavaScript. **Elige el que mejor se adapte a tu caso de uso** y ¡feliz coding! 🚀