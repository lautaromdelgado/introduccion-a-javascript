let a = 10,
    b = 20,
    c = 30,
    d = 40,
    e = a + b + c + d;

console.log(e); // 100
console.warn(e); // 100
console.error(e); // 100
console.info(e); // 100

// ! No se recomienda usar console.log() para imprimir varias variables
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);
console.log('e', e);

// * Se recomienda usar console.log({entre llaves}) para imprimir varias variables
console.table({ a });
console.table({ b });
console.table({ c });
console.table({ d });
console.table({ e });

// * Se recomienda usar console.table() para imprimir varias variables
console.table({ a, b, c, d, e });

// * declarar variables en una sola línea
let l = 'Hola',
    m = 'Mundo',
    n = 'JavaScript',
    o = 'ES6';

const SALUDO = `${l} ${m} ${n} ${o}`; // Hola Mundo JavaScript ES6
console.log(SALUDO); // Hola Mundo JavaScript ES6 por consola del navegadorr