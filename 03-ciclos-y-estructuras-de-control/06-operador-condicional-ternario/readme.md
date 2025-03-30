# ✨ Operador Ternario en JavaScript ✨

El operador ternario (`? :`) es una alternativa concisa y eficiente a las estructuras `if-else`. Nos permite tomar decisiones en una sola línea de código.

## ✅ Sintaxis
```javascript
condicion ? expresion_si_verdadera : expresion_si_falsa;
```

## ⚡ Ejemplo Práctico: Horario de Apertura de una Tienda
Supongamos que queremos determinar si una tienda está abierta o cerrada según el día de la semana y la hora actual. 

### 📗 Solución sin operador ternario:
```javascript
const dia = new Date().getDay(); // Obtiene el día actual (0 = Domingo, 6 = Sábado)
const hora = new Date().getHours(); // Obtiene la hora actual

let horaApertura;
let mensaje;

if (dia === 0 || dia === 6) {
    horaApertura = 9; // Fin de semana
} else {
    horaApertura = 11; // Días de semana
}

if (hora < horaApertura) {
    mensaje = `Estamos cerrados, hoy abrimos a las ${horaApertura}`;
} else {
    mensaje = 'Estamos abiertos';
}

console.log(mensaje);
```

### 🚀 Solución con operador ternario:
```javascript
const horaApertura = [0, 6].includes(dia) ? 9 : 11;
const mensaje = hora < horaApertura ? `Estamos cerrados, hoy abrimos a las ${horaApertura}` : 'Estamos abiertos';

console.log(mensaje);
```

## 🔥 Ventajas del Operador Ternario
- **Código más compacto**
- **Fácil de leer en condiciones simples**
- **Menos líneas de código, mejor mantenibilidad**

## 🔎 Cuándo Usarlo
✔ Para asignaciones simples basadas en una condición.
✔ Cuando la lógica `if-else` es corta y clara.
❌ Evita su uso si las condiciones son complejas, ya que podría afectar la legibilidad del código.

---
✨ **¡Domina el operador ternario y haz tu código más eficiente!** ✨