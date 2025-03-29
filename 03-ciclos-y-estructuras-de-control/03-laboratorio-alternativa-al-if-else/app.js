// Sin usar if-else o switch
// Unicamente objetos para realizar la misma tarea e imprimir
// en consola el día de la semana

//* Resolución con un objeto
let hoy = new Date();
let dia = hoy.getDay(); // 0-6 (Domingo-Sábado)
let dias = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado"
}
console.log(dias[dia] || 'Día no válido'); // Imprime el día de la semana correspondiente

//* Alternativa con un arreglo
let diasArr = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(diasArr[dia] || 'Día no válido'); // Imprime el día de la semana correspondiente