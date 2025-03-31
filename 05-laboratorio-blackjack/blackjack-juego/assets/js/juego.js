/* 2C = Two of Clubs */
/* 2D = Two of Diamonds */
/* 2H = Two of Hearts */
/* 2S = Two of Spades */

// Es un juego de cartas, en el que el objetivo es sumar 21 puntos
// o lo más cercano a 21 sin pasarse.

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck); // Mostrar el deck de cartas mezclado en la consola

    return deck; // Retornar el deck de cartas
}

// Pedir una carta del deck
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'; // Lanzar un error si no hay cartas en el deck
    }
    const cartaElegida = deck.pop(); // Sacar la última carta del deck
    console.log(deck); // Mostrar el deck de cartas restante en la consola
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

const punto = valorCarta(pedirCarta()); // Obtener el valor de la carta
console.log({ punto }); // Mostrar el valor de la carta en la consola