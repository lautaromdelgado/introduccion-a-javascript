/* 
    Días de semana abrimos a las 11,
    pero los fines de semana abrimos a las 9
*/

//* Entra a un sitio web, para consultar si está abierto hoy..
const dia = new Date().getDay(); // Para obtener el día de hoy
// Domingo: 0, Lunes: 1, Martes: 2, Miércoles: 3, Jueves: 4, Viernes: 5, Sábado: 6
const hora = new Date().getHours(); // Para obtener la hora actual

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos

//* Resolver sin operador ternario
// Si el día es igual a 0 o 6 (domingo o sábado)
if (dia === 0 || dia === 6) {
    // Decimos que es fin de semana
    console.log('Fin de semana');
    horaApertura = 9; // abrimos a las 9
} else {
    // De lo contrario es día de semana
    console.log('Día de semana');
    horaApertura = 11; // abrimos a las 11
}

// Si la hora es menor a la hora de apertura
if (hora < horaApertura) {
    // Declaramos que estamos cerrados
    mensaje = `Estamos cerrados, hoy abrimos a las ${horaApertura}`;
} else {
    // De lo contrario, esta abierto
    mensaje = 'Estamos abiertos';
}
console.log(horaApertura); // Imprimos la hora de apertura
console.log('=== SIN OPERADOR TERNMARIO ===')
console.log(`${mensaje}\n`); // Imprimo el mensaj

//* Resolver con el operador ternario
horaApertura = [0, 6].includes(dia) ? 9 : 11; // Si el día es igual a 0 o 6 (domingo o sábado) abrimos a las 9, de lo contrario abrimos a las 11
mensaje = hora < horaApertura ? `Estamos cerrados, hoy abrimos a las ${horaApertura}` : 'Estamos abiertos'; // Si la hora es menor a la hora de apertura, estamos cerrados, de lo contrario estamos abiertos
console.log('=== CON OPERADOR TERNARIO ===')
console.log(mensaje); // Imprimo el mensaje
