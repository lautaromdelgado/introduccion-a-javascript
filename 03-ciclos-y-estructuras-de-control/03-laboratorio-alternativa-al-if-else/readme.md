# Laboratorio: Alternativa al if-else

## Introducción
En este laboratorio exploramos cómo evitar el uso de estructuras condicionales `if-else` o `switch`, utilizando objetos y arreglos para manejar lógica de selección de manera más eficiente y limpia.

## Alternativa con un objeto
Podemos utilizar un objeto en lugar de múltiples condiciones `if-else`. La clave del objeto representa un valor de entrada (en este caso, el número del día de la semana), y el valor asociado es la respuesta deseada.

### Ejemplo con un objeto:
```javascript
let hoy = new Date();
let dia = hoy.getDay(); // Retorna un número entre 0 y 6 (Domingo-Sábado)

let dias = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado"
};

console.log(dias[dia] || 'Día no válido'); // Devuelve el día de la semana correspondiente
```

## Alternativa con un arreglo
Otra opción eficiente es usar un arreglo, donde los índices corresponden directamente a los días de la semana.

### Ejemplo con un arreglo:
```javascript
let diasArr = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

console.log(diasArr[dia] || 'Día no válido'); // Devuelve el día de la semana correspondiente
```

## Ventajas de estas alternativas
- **Código más limpio y legible**: Evita múltiples estructuras `if-else` anidadas.
- **Mayor eficiencia**: La búsqueda en un objeto o arreglo tiene una complejidad de O(1), mientras que en un `if-else` anidado puede ser O(n) en el peor de los casos.
- **Fácil mantenimiento**: Se pueden agregar nuevas claves o valores sin modificar múltiples condiciones en el código.

Estas técnicas son útiles cuando se necesita una correspondencia directa entre valores sin lógica adicional. 🚀

