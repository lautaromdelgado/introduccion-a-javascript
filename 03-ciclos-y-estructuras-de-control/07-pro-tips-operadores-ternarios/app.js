// Retornar el número mayor entre dos números
const elMayor = (a, b) => {
    // Si a es mayor, retorna a, sino, retorna b.
    return (a > b) ? a : b;
}
// Retornar el número mayor entre dos números simplificado
const elMayor2 = (a, b) => (a > b) ? a : b;

// Ejemplo de uso
console.log(elMayor(10, 51));
console.log("\n=============================\n");
console.log(elMayor2(11, 10));

console.log("\n=============================\n");
const tieneMembresia = (miembro) => miembro ? "puedes pasar" : "no puedes pasar";
console.log(tieneMembresia(true)); // puedes pasar
console.log(tieneMembresia(false)); // no puedes pasar

const amigo = false;
const amigosArr = [
    "Pedro",
    "Juan",
    "Luis",
    "Jorge",
    amigo ? "Carlos" : "Juan Cruz", // Evalua si amigo es true o false, para saber que guardar
];
console.table(amigosArr); // [ 'Pedro', 'Juan', 'Luis', 'Jorge', 'Carlos' ]

// En vez de utilizar un if, else if y else, podríamos simplificar el código
// en el siguiente ejercicio.
console.log("\n=============EJERCICIO DE NOTAS==============\n");
const nota = 98;
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                    nota >= 70 ? 'C' : 'F';

console.log(`Tu nota es ${nota} y tu grado es ${grado}`);