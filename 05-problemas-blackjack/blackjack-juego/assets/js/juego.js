// * Patrón modulo
(() => {
    'use strict'; // Modo estricto de JavaScript

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

        // Implementación para que espere 1 segundo antes de mostrar el resultado
        // Esto permitira que se muestren las cartas en el frontend
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana!'); // Si los puntos son iguales, nadie gana
            } else if (puntosMinimos > 21) {
                alert('Computadora gana!'); // Si el jugador se pasó de 21, la computadora gana
            } else if (puntosComputadora > 21) {
                alert('El jugador gana!'); // El jugador gana la mano
            } else {
                alert('Computadora gana!'); // La computadora gana la mano
            }
        }, 30); // Esperar 3 segundo antes de mostrar el resultado

    }

    // Botón detener el juego
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true; // Deshabilitar el botón de pedir carta
        btnDetener.disabled = true; // Deshabilitar el botón de detener el juego
        // Llama al turno de la computadora
        turnoComputadora(puntosJugador); // Pasar los puntos del jugador a la computadora
    });

    // Botón nuevo juego
    btnNuevo.addEventListener('click', () => {
        // Eliminar los elementos del HTML
        const cartas = document.querySelectorAll('.carta'); // Obtener todas las cartas del HTML
        cartas.forEach(carta => carta.remove()); // Eliminar las cartas del HTML

        // Manejar el mazo de cartas
        deck = []; // Reiniciar el deck de cartas
        deck = crearDeck(); // Crear un nuevo deck
        puntosJugador = 0; // Reiniciar los puntos del jugador
        puntosComputadora = 0; // Reiniciar los puntos de la computadora
        puntosHTML[0].innerText = 0; // Reiniciar los puntos del jugador en el HTML
        puntosHTML[1].innerText = 0; // Reiniciar los puntos de la computadora en el HTML
        btnPedir.disabled = false; // Habilitar el botón de pedir carta
        btnDetener.disabled = false; // Habilitar el botón de detener el juego
    });
})();

/*
    De esta manera el usuario ya no va a poder hacer trampa,
    poder acceder a las funciones, variables que no le corresponden.
    Se va a crear un espacio privado, donde las variables y
    funciones no van a ser accesibles desde el exterior.
    Solo se va a poder acceder a las funciones y variables que
    se declaren dentro del módulo.
*/