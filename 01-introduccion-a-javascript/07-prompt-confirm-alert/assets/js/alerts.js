/* --- ALERT ---*/
// Objetivo: Mostrar un mensaje de alerta en el navegador
alert('Hola mundo'); // esta instrucción es bloqueante, hasta que el usuario haga click.

/* --- PROMPT ---*/
// Mostrar un mensaje estilo input para que ingrese un dato
let nombre = prompt('¿Cuál es tu nombre?', 'Escribe tu nombre aquí');
// Mostrar por consola el nombre ingresado por el usuario
console.log(nombre);

/* --- CONFIRM ---*/
const decision = confirm('¿Estás seguro de borrar esto?'); // Devuelve solo true o false
console.log(decision); // Muestra por consola la decisión del usuario

/*
IMPORTANTE:
- El método prompt() siempre devuelve un string.
- El método confirm() siempre devuelve un booleano.
- El método alert() no devuelve nada.

Ademas las tres functions son bloqueantes, es decir, detienen la ejecución del código hasta que el usuario interactúe con ellas.

* Estos 3 métodos forman parte del objeto Window
! Si se corre este código en otro lugar o navegador web que no tenga la instacia de Window
! este código simplemente no va a funcionar.
*/