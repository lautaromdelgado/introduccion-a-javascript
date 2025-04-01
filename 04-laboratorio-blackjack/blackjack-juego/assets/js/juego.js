/* 2C = Two of Clubs */
/* 2D = Two of Diamonds */
/* 2H = Two of Hearts */
/* 2S = Two of Spades */

// Es un juego de cartas, en el que el objetivo es sumar 21 puntos
// o lo más cercano a 21 sin pasarse.

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;

//* Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'); // Botón para pedir carta
const btnDetener = document.querySelector('#btnDetener'); // Botón para detener el juego
const btnNuevo = document.querySelector('#btnNuevo'); // Botón para iniciar un nuevo juego

const divJugador = document.querySelector('#jugador-cartas'); // Div para mostrar las cartas del jugador
const divComputadora = document.querySelector('#computadora-cartas'); // Div para mostrar las cartas del jugador

const puntosHTML = document.querySelectorAll('small'); // Obtener todos los elementos <small> del HTML

// Crear un nuevo deck de cartas
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        // Agregar los números del 2 al 10
        for (let tipo of tipos) {
            // Agregar los tipos de cartas (C, D, H, S)
            deck.push(`${i}${tipo}`); // Agregar el número y el tipo de carta
        }
    }

    // Agregar los tipos de cartas (C, D, H, S)
    for (let tipo of tipos) {
        // Agregar las cartas especiales (A, J, Q, K)
        for (let esp of especiales) {
            deck.push(`${esp}${tipo}`); // Agregar las cartas especiales (A, J, Q, K)
        }
    }

    deck = _.shuffle(deck); // Mezclar el deck de cartas
    console.log
    return deck; // Retornar el deck de cartas
}

// Pedir una carta del deck
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'; // Lanzar un error si no hay cartas en el deck
    }
    const cartaElegida = deck.pop(); // Sacar la última carta del deck
    return cartaElegida; // Retornar la carta elegida
}

// Obtener el valor de la carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); // Obtener el valor de la carta (sin el tipo)
    //* Retonar el valor de la carta
    //* Si el valor es NaN (no es un número),
    //* entonces es una carta especial (A, J, Q, K)
    //* Si es una A, retornar 11, si es J, Q o K retornar 10
    //* Si es un número, retornar el número como valor.
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
    // Retornar el valor de la carta (A = 11, J, Q, K = 10, su valor numérico)
}

crearDeck(); // Inicializar el juego

pedirCarta(); // Pedir una carta del deck

//* Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(); // Pedir una carta del deck
    puntosJugador = puntosJugador + valorCarta(carta); // Obtener el valor de la carta
    console.log({ puntosJugador }); // Mostrar el valor de la carta en la consola
    puntosHTML[0].innerText = puntosJugador; // Mostrar el valor de la carta en el HTML

    // Aparecer cartas
    const imgCarta = document.createElement('img'); // Crear un elemento <img> para mostrar la carta
    imgCarta.src = `assets/cartas/${carta}.png`; // Mostrar la carta en el HTML
    imgCarta.classList.add('carta'); // Agregar la clase carta al elemento <img>
    divJugador.append(imgCarta); // Agregar la carta al div del jugador

    // Lógica para manejar que el jugador perdio.
    if (puntosJugador > 21) {
        btnPedir.disabled = true; // Deshabilitar el botón de pedir carta
        btnDetener.disabled = true; // Deshabilitar el botón de detener el juego
        // Llama al turno de la computadora
        turnoComputadora(puntosJugador); // Pasar los puntos del jugador a la computadora
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true; // Deshabilitar el botón de pedir carta
        btnDetener.disabled = true; // Deshabilitar el botón de detener el juego
        // Llama al turno de la computadora
        turnoComputadora(puntosJugador); // Pasar los puntos del jugador a la computadora
    }
});

//* De la computadoracurrículum vitae
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta(); // Pedir una carta del deck
        puntosComputadora = puntosComputadora + valorCarta(carta); // Obtener el valor de la carta
        console.log({ puntosComputadora }); // Mostrar el valor de la carta en la consola
        puntosHTML[1].innerText = puntosComputadora; // Mostrar el valor de la carta en el HTML

        // Aparecer cartas
        const imgCarta = document.createElement('img'); // Crear un elemento <img> para mostrar la carta
        imgCarta.src = `assets/cartas/${carta}.png`; // Mostrar la carta en el HTML
        imgCarta.classList.add('carta'); // Agregar la clase carta al elemento <img>
        divComputadora.append(imgCarta); // Agregar la carta al div del jugador

        // Si el jugador se pasó de 21, la computadora gana automáticamente
        if (puntosMinimos > 21) {
            break; // Rompemos el ciclo
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
}

// Detener el juego
btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true; // Deshabilitar el botón de pedir carta
    btnDetener.disabled = true; // Deshabilitar el botón de detener el juego
    // Llama al turno de la computadora
    turnoComputadora(puntosJugador); // Pasar los puntos del jugador a la computadora
});

// Nuevo juego
btnNuevo.addEventListener('click', () => {
    deck = []; // Reinicar el deck
    deck = crearDeck(); // Crear un nuevo deck
    puntosJugador = 0; // Reiniciar los puntos del jugador
    puntosComputadora = 0; // Reiniciar los puntos de la computadora
    puntosHTML[0].innerText = 0; // Reiniciar los puntos del jugador en el HTML
    puntosHTML[1].innerText = 0; // Reiniciar los puntos de la computadora en el HTML
    btnPedir.disabled = false; // Habilitar el botón de pedir carta
    btnDetener.disabled = false; // Habilitar el botón de detener el juego
})