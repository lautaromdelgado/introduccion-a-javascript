# 🚀 Sección 3: ¡Domina los valores en JavaScript!

## 📌 1. Valores por Referencia vs. Valores Primitivos
- **Primitivos**: Se copian por **valor** (números, strings, booleanos, null, undefined, symbol, BigInt).
- **Referencias**: Se copian por **referencia** (objetos, arrays, funciones).
- ¡Cuidado con modificar referencias! 🔥 Usa el **spread operator (...)** para copiar sin afectar el original.

```js
let a = [1, 2, 3];
let b = [...a]; // Copia segura
b.push(4);
console.log(a); // [1, 2, 3] ✅
console.log(b); // [1, 2, 3, 4] ✅
```

---

## 🧠 2. Comparaciones: `==` vs. `===`
- `==` compara **valor** (convierte tipos si es necesario ⚠️).
- `===` compara **valor y tipo** (¡seguro y recomendado!).

```js
console.log(5 == "5"); // true 😱 (convierte "5" a número)
console.log(5 === "5"); // false 🚀 (tipo y valor distintos)
```

---

## 🔄 3. Control de Flujo: `if`, `else`, `else if`
Toma decisiones en tu código:

```js
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

**Alternativa PRO con Objetos**:
```js
const diasSemana = { 0: "Domingo", 1: "Lunes", 2: "Martes" };
console.log(diasSemana[new Date().getDay()] || "Día no válido");
```

---

## 🛠️ 4. Lógica Booleana en Acción
- **Negación (`!`)**: Invierte un valor booleano.
- **AND (`&&`)**: Evalúa hasta encontrar `false`.
- **OR (`||`)**: Evalúa hasta encontrar `true`.

```js
console.log(true && false); // false ❌
console.log(true || false); // true ✅
```

⚡ **Optimización:**
```js
const mensaje = usuario || "Invitado"; // Si usuario es null, usa "Invitado"
console.log(mensaje);
```

---

## 🎯 5. Pro Tips con Operadores
### 🔥 `&&` y `||` como atajos
- `&&` devuelve el último valor verdadero o el primer falso.
- `||` devuelve el primer valor verdadero.

```js
console.log(true && "Hola" && 42); // 42 ✅
console.log(false || null || "Soy un valor válido"); // "Soy un valor válido" ✅
```

🚀 **Usa estos trucos para simplificar tu código y hacerlo más eficiente!**

