// Declaración del día
const dias = 0; // domingo

switch (dias /* (Aquí hace un "===" para comparar */) {
    case 0: console.log('Domingo'); break;
    case 1: console.log('Lunes'); break;
    case 2: console.log('Martes'); break;
    case 3: console.log('Miércoles'); break;
    case 4: console.log('Jueves'); break;
    case 5: console.log('Viernes'); break;
    case 6: console.log('Sábado'); break;
    default: console.log('No es un día de la semana'); break;
    // Se ejecuta si ninguna de las condiciones anteriores se cumple
}

// Debemos colocar braak para
// que javascript no siga ejecutando el resto de los casos