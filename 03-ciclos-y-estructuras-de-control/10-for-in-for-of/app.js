const heroes = ['Batman', 'Superman', 'Aquaman', 'Flash', 'Green Lantern'];

// Barrer cada uno de los elementos e imprimirlo en consola.
console.warn('=== For tradicional ===');
for (let i = 0; i < heroes.length; i++) {
    console.log(`${i}: ${heroes[i]}`);
}

console.warn('=== For in ===');
// El for in es para barrer objetos, no arreglos.
for (let index in heroes) {
    console.log(`${index}: ${heroes[index]}`);
}

console.warn('=== For of ===');
// El for of es para barrer arreglos, no objetos.
for (let heroe of heroes) {
    console.log(heroe);
}