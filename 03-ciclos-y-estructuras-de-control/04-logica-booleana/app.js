// Creación de una función de flecha
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}
// Creación de una función de flecha
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la genación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(false); // false

//* Se puede aplicar la "!" negación en cualquier caso que
//* se devuelva un booleano

// Devuelve True si todos los valores son verdaderos
console.warn('And');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//* Aplicando con booleanos negados
console.log(!false && !false); // true
console.log(!false && !true); // false
console.log(!true && !false); // false
console.log(!true && !true); // false

console.log("==========================");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // true
//* Solo imprime "Regresa falso" pero no "Regresa verdadero" ¿Por qué?
// Javascript al ver una sentencia AND y ya la primera condición es falsa
// no evalua la segunda condición, por lo que no ejecuta la función.

console.log("==== && ====");
regresaFalse() && regresaTrue(); // false

console.log("==== || ====");
console.warn("Or");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("==========================");
console.log(regresaTrue() || regresaFalse()); // true
console.log(regresaFalse() || regresaTrue()); // true
//* En este caso, al ser una sentencia OR,
//* si la primera condición es verdadera

console.log("=== evaluación funciones ===")
regresaTrue() || regresaFalse(); // true
//* En este caso, al ser una sentencia OR,
//* Al ser la primer condición verdadera,
//* No evalua la segunda condición.

// Sentencias largas
console.warn('=====Sentencias largas=====');
console.log(true && true && true && true && false); // false
console.log(false || false || false || true); // true