/* 2C = Two of Clubs */
/* 2D = Two of Diamonds */
/* 2H = Two of Hearts */
/* 2S = Two of Spades */

// Es un juego de cartas, en el que el objetivo es sumar 21 puntos
// o lo más cercano a 21 sin pasarse.

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    // Crear un nuevo deck de cartas
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

    console.log(deck); // Mostrar el deck de cartas en la consola
    deck = _.shuffle(deck); // Mezclar el deck de cartas
    console.log(deck); // Mostrar el deck de cartas mezclado en la consola

    return deck; // Retornar el deck de cartas
}

crearDeck();