# Alert, Confirm y Prompt en JavaScript

En JavaScript, existen tres funciones fundamentales para interactuar con los usuarios a través de la interfaz del navegador: `alert()`, `prompt()` y `confirm()`. Estas funciones pertenecen al objeto global `window` y permiten mostrar mensajes, solicitar información y confirmar decisiones.

## 1. `alert()` - Mostrar un mensaje de alerta

El método `alert()` muestra un cuadro de diálogo con un mensaje y un botón de "Aceptar". Es útil para enviar notificaciones al usuario.

```javascript
alert('Hola mundo');
```

📌 **Nota:** Esta función es bloqueante, lo que significa que la ejecución del código se detiene hasta que el usuario haga clic en "Aceptar".

---

## 2. `prompt()` - Solicitar un dato al usuario

El método `prompt()` muestra un cuadro de diálogo con un campo de entrada para que el usuario ingrese un valor. Se pueden pasar dos argumentos:
- El mensaje que se mostrará al usuario.
- Un valor por defecto en el campo de entrada (opcional).

```javascript
let nombre = prompt('¿Cuál es tu nombre?', 'Escribe tu nombre aquí');
console.log(nombre);
```

📌 **Notas:**
- El valor ingresado siempre se devuelve como una cadena (`string`).
- Si el usuario presiona "Cancelar", `prompt()` devuelve `null`.
- También es bloqueante, deteniendo la ejecución hasta que el usuario ingrese un valor o cierre la ventana emergente.

---

## 3. `confirm()` - Confirmar una acción

El método `confirm()` muestra un cuadro de diálogo con un mensaje y dos botones: "Aceptar" y "Cancelar". Devuelve `true` si el usuario presiona "Aceptar" y `false` si presiona "Cancelar".

```javascript
const decision = confirm('¿Estás seguro de borrar esto?');
console.log(decision);
```

📌 **Notas:**
- Es una función bloqueante.
- Devuelve un booleano (`true` o `false`), útil para confirmar acciones antes de ejecutarlas.

---

## 🚀 Importante:
- Estas funciones son parte del objeto `window`, por lo que no funcionan fuera del entorno del navegador.
- Al ser bloqueantes, pueden afectar la fluidez de la experiencia del usuario en una aplicación web.
- Para una mejor experiencia, se recomienda el uso de modales personalizados en lugar de estas funciones nativas.

Estos métodos son básicos en la interacción con los usuarios, pero en aplicaciones modernas suelen reemplazarse por alternativas más dinámicas como modales de librerías como SweetAlert o Bootstrap Modal. 🎯

