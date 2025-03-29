# Estructuras de Control: if, else if, else

Las estructuras de control permiten decidir el flujo de ejecución en un programa en función de condiciones específicas.

## Uso de `if`
El bloque `if` evalúa una condición y ejecuta el código dentro de su bloque `{}` si la condición es verdadera.

```javascript
let a = 10;
if (a >= 10) {
    console.log('A es mayor o igual a 10');
}
console.log('Fin del programa');
```

### Uso de `if` y `else`
Cuando se quiere manejar una condición alternativa en caso de que la primera sea falsa, se usa `else`.

```javascript
let b = 10;
if (b >= 10) {
    console.log('B es mayor o igual a 10');
} else {
    console.log('B es menor a 10');
}
```

## Uso de `else if`
Si hay múltiples condiciones que evaluar, se pueden encadenar con `else if`.

```javascript
const hoy = new Date(); // Obtenemos la fecha actual
let dia = hoy.getDay(); // Obtenemos el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)

if (dia === 0) {
    console.log('Hoy es domingo');
} else if (dia === 1) {
    console.log('Hoy es lunes');
} else if (dia === 2) {
    console.log('Hoy es martes');
} else if (dia === 3) {
    console.log('Hoy es miércoles');
} else {
    console.log('Hoy es otro día de la semana');
}
```

## Diferencia entre `==` y `===`
- `==` compara solo el valor, sin considerar el tipo de dato.
- `===` compara tanto el valor como el tipo de dato.

Ejemplo:
```javascript
let numero = '10';
if (numero == 10) {
    console.log('Número es 10 con comparación débil (==)');
}
if (numero === 10) {
    console.log('Número es 10 con comparación estricta (===)');
} else {
    console.log('Número NO es 10 en comparación estricta (===)');
}
```

## Conclusión
Las estructuras de control `if`, `else if` y `else` son fundamentales para el control del flujo en JavaScript. Se recomienda usar `===` en lugar de `==` para evitar errores relacionados con la conversión implícita de tipos.

