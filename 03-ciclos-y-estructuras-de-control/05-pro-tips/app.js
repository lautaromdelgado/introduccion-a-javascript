
// Asignaciones de operadores
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo' && 1 && 2 && 3; // true && 'Hola mundo' => 'Hola mundo' && 1 => 1 && 2 => 2 && 3 => 3
console.log({ a1, });
// Porque el operador && devuelve el último valor verdadero que encuentra,
// o el primer valor falso que encuentra. En este caso, todos son verdaderos,
// por lo que devuelve el último valor verdadero que encuentra, que es 3.


// * En este caso el operador && devuelve el primer valor falso que encuentra,
// * que es soyFalso, por lo que devuelve soyFalso.
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
console.log({ a2 });

// Como la primera sentencia es falsa, ejecuta la segunda sentencia
// la cual es un string 'ya no soy falso', por lo que devuelve 'ya no soy falso'.
// * En este caso el operador || devuelve el primer valor verdadero que encuentra.
const a3 = soyFalso || 'ya no soy falso';
console.log({ a3 });

// Regresa 'Ya no soy falso denuevo'
// No retorna un True porque ya encontró el primer verdadero para ejecutarse.
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso denuevo' || true;
console.log({ a4 });