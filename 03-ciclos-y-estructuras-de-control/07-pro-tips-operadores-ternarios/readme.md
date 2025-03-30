# 🚀 PRO TIP: Dominando el Operador Ternario en JavaScript 🎯

El **operador ternario (`? :`)** en JavaScript es una forma elegante y compacta de escribir estructuras `if-else` en una sola línea. ¡Aprovecha su poder para escribir código más limpio y eficiente! 💡

---

## 🎭 Comparando Números: ¿Cuál es el Mayor?

```javascript
// Retorna el número mayor entre dos valores
const elMayor = (a, b) => {
    return (a > b) ? a : b;
};

// Versión aún más simplificada 😎
const elMayor2 = (a, b) => (a > b) ? a : b;

// Ejemplo de uso
console.log(elMayor(10, 51));
console.log(elMayor2(11, 10));
```

📝 **Explicación**:
- Si `a` es mayor que `b`, devuelve `a`, de lo contrario, devuelve `b`.
- La función `elMayor2` es una versión más corta que hace lo mismo en una única línea.

---

## 🔐 Acceso con Membresía

```javascript
const tieneMembresia = (miembro) => miembro ? "puedes pasar" : "no puedes pasar";

console.log(tieneMembresia(true));  // "puedes pasar"
console.log(tieneMembresia(false)); // "no puedes pasar"
```

📝 **Explicación**:
- Si `miembro` es `true`, retorna **"puedes pasar"**, de lo contrario, **"no puedes pasar"**.

---

## 👫 Lista de Amigos con Evaluación Ternaria

```javascript
const amigo = false;
const amigosArr = [
    "Pedro",
    "Juan",
    "Luis",
    "Jorge",
    amigo ? "Carlos" : "Juan Cruz", // Agrega "Carlos" si amigo es true, de lo contrario, "Juan Cruz"
];

console.table(amigosArr);
```

📝 **Explicación**:
- Si `amigo` es `true`, se agrega **"Carlos"** a la lista.
- Si `amigo` es `false`, se agrega **"Juan Cruz"** en su lugar.

---

## 📚 Evaluación de Notas con Ternarios Anidados 🎓

```javascript
const nota = 98;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log(`Tu nota es ${nota} y tu grado es ${grado}`);
```

📝 **Explicación**:
- Dependiendo del valor de `nota`, se asigna un grado diferente.
- Se reemplaza una estructura `if-else` larga por un operador ternario anidado.

---

## 🎯 Conclusión
✅ Usa el operador ternario para **simplificar código** y hacerlo más legible.
✅ Evita anidamientos innecesarios para mantener la **claridad**.
✅ Úsalo con moderación: en estructuras muy largas, `if-else` puede ser más comprensible. 😉

🔥 **¡Domina el operador ternario y lleva tu código al siguiente nivel!** 🚀

