# ✨ Blackjack en JavaScript - Versión Optimizada ✨

Este README es una guía interactiva y visual sobre los **cambios y optimizaciones** realizadas al código original del juego **Blackjack** 🃏. ¡Aprendé cómo mejorar tu código y hacerlo más limpio, reutilizable y mantenible! 🌟

---

## 🔄 Refactor principal: Modularización con IIFE

Se encapsuló todo el código dentro de una **IIFE** (Immediately Invoked Function Expression) para:

- Evitar contaminar el **scope global**.
- Crear un **módulo autocontenido** con sus propias variables privadas y funciones.
- Exponer solo lo necesario mediante `return` (como `nuevoJuego`).

```js
const miModulo = (() => {
    'use strict';
    // Todo el juego encapsulado aquí
})();
```

---

## 🎩 Separación de responsabilidades

Se crearon funciones específicas para dividir tareas:

- `crearDeck()` ✔️: crea y baraja el mazo.
- `pedirCarta()` ✔️: toma una carta del mazo.
- `valorCarta()` ✔️: calcula el valor de una carta.
- `acumularPuntos(carta, turno)` ✔️: actualiza el puntaje del jugador o computadora.
- `crearCarta(carta, turno)` ✔️: renderiza visualmente la carta.
- `turnoComputadora(puntosMinimos)` ✔️: ejecuta el turno de la IA.
- `determinarGanador()` ✔️: evalúa y muestra al ganador.

Esto mejora:
- Reutilización de funciones
- Legibilidad del código
- Mantenimiento futuro

---

## 🤹🏼‍♂️ Escalabilidad: Juego para múltiples jugadores

El array `puntosJugadores` ahora se **inicializa de forma dinámica**, permitiendo escalar el juego a más de 2 jugadores con facilidad:

```js
const inicializarJuego = ( numJugadores = 2 ) => {
    puntosJugadores = Array(numJugadores).fill(0);
    //...
};
```

---

## 💪 Manejo de estado en UI

Los botones se **habilitan/deshabilitan dinámicamente** para controlar las acciones del usuario de forma correcta y prevenir errores:

```js
btnPedir.disabled = false;
btnDetener.disabled = false;
```

Y al finalizar turno:
```js
btnPedir.disabled = true;
btnDetener.disabled = true;
```

---

## 🥳 Interacción desde el HTML

Solo se expone `nuevoJuego` al scope global desde el módulo:

```js
return {
  nuevoJuego: inicializarJuego
};
```

Y se usa en el HTML:

```html
<script>
  document.querySelector('#btnNuevo').addEventListener('click', () => {
    miModulo.nuevoJuego();
  });
</script>
```

---

## 🚀 Mejoras extra:

- Uso de `forEach()` en lugar de bucles tradicionales para limpieza.
- ✔️ Código DRY (Don't Repeat Yourself): se evita repetir lógica como acumulación de puntos o creación de cartas.
- ✔️ Uso de `const` y `let` correctamente.
- ✔️ Uso de `setTimeout()` para mostrar el resultado tras animaciones (mejora UX).

---

## 🌟 Resultado final

Juego modular, escalable, mantenible, intuitivo y limpio, sin afectar la experiencia del usuario.

---

## 🚀 Consejo final:

> "Refactorizar no es solo hacer que funcione... es hacer que tenga sentido a largo plazo."

---

¡Segú seguís desarrollando juegos con JavaScript! 🎮🚀

