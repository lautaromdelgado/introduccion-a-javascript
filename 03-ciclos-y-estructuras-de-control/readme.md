# 📌 Resumen Sección 3: Valor y Referencia, Operadores y Bucles en JavaScript 🚀

## 🔹 1. Valor vs Referencia 📋

En JavaScript, las variables pueden almacenar datos de **tipo primitivo** o **referencias a objetos**.

### 🔥 Valores Primitivos (Se copian por valor)
- `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`, `BigInt`
- Cuando asignas una variable a otra, se copia el **valor**, no la referencia.

```js
let a = 10;
let b = a; // Se copia el valor
b = 20;
console.log(a); // 10 (No cambia)
console.log(b); // 20
```

### 🔥 Valores por Referencia (Se copian por referencia)
- **Objetos, Arrays, Funciones**.
- Al asignar una variable a otra, ambas apuntan al mismo espacio en memoria.

```js
let obj1 = { nombre: 'Lautaro' };
let obj2 = obj1; // Ambas variables apuntan al mismo objeto
obj2.nombre = 'Carlos';
console.log(obj1.nombre); // 'Carlos' (Ambas variables se ven afectadas)
```

### 🔥 Cómo romper la referencia
```js
let obj3 = { ...obj1 }; // Clonamos el objeto con spread operator
obj3.nombre = 'Pedro';
console.log(obj1.nombre); // 'Carlos' (Ahora son independientes)
console.log(obj3.nombre); // 'Pedro'
```

---

## 🔹 2. Operadores Lógicos y Ternario ⚡

### ✅ Operador `&&` (AND) y `||` (OR)
```js
const resultado = true && 'Hola' && 3; // Devuelve el último valor verdadero: 3
console.log(resultado);

const resultado2 = false || 'Hola' || 3; // Devuelve el primer valor verdadero: 'Hola'
console.log(resultado2);
```

### ✅ Operador Ternario `? :`
```js
const edad = 20;
const acceso = edad >= 18 ? 'Permitido' : 'Denegado';
console.log(acceso); // 'Permitido'
```

---

## 🔹 3. Switch 🛠️

El `switch` evalúa expresiones y ejecuta el **primer caso coincidente**.

```js
const dia = 2;
switch (dia) {
    case 1: console.log('Lunes'); break;
    case 2: console.log('Martes'); break;
    default: console.log('Día no válido');
}
```

---

## 🔹 4. Bucles en JavaScript 🔄

### ✅ `while` y `do while`
```js
let i = 0;
while (i < 3) {
    console.log(i); // 0, 1, 2
    i++;
}

do {
    console.log(i); // Se ejecuta al menos una vez
    i++;
} while (i < 3);
```

### ✅ `for`, `for...in`, `for...of`
```js
const heroes = ['Batman', 'Superman', 'Flash'];

// For clásico
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// For in (Recorre índices)
for (let i in heroes) {
    console.log(i, heroes[i]);
}

// For of (Recorre valores directamente)
for (let heroe of heroes) {
    console.log(heroe);
}
```

---

## 🎯 Conclusión

- **Valores primitivos** se copian por valor, mientras que **objetos y arrays** se copian por referencia.
- **Operadores lógicos** ayudan a simplificar condiciones.
- **El operador ternario** hace que las condiciones sean más cortas.
- **Switch** es útil para múltiples casos.
- **Bucles** (`while`, `for`) nos permiten recorrer datos fácilmente.

🚀 **¡Sigue practicando y dominarás JavaScript en poco tiempo!** 🚀