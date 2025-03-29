# 🚀 PRO-TIPS: Funciones en JavaScript

## 📌 Retorno de Objetos Literales
Cuando la propiedad del objeto se llama igual que la variable, se puede simplificar la sintaxis:

```js
function crearPersona(nombre, apellido) {
    return { nombre, apellido };
}

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona); // { nombre: 'Fernando', apellido: 'Herrera' }
```

✅ Con función de flecha:
```js
const crearPersonaFlecha = (nombre, apellido) => ({ nombre, apellido });
console.log(crearPersonaFlecha('Fernando', 'Herrera'));
// { nombre: 'Fernando', apellido: 'Herrera' }
```

---

## 📌 Impresión de Argumentos
### En funciones normales:
```js
function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos('Fernando', 'Herrera');
```

🚨 **Las funciones de flecha NO tienen `arguments`, por lo que se usa `rest (...)`**

✅ Con función de flecha:
```js
const imprimeArgumentosFlecha = (...args) => args;
console.log(imprimeArgumentosFlecha('Fernando', 'Herrera'));
// [ 'Fernando', 'Herrera' ]
```

🎯 Si queremos separar el primer argumento del resto:
```js
const imprimirArgumentosFlecha2 = (edad, ...args) => args;
const resultado = imprimirArgumentosFlecha2(10, 'Fernando', 'Herrera');
console.log(resultado);
// [ 'Fernando', 'Herrera' ]
```

📌 También podemos devolver un objeto con los argumentos restantes:
```js
const imprimirArgumentosFlecha3 = (edad, ...args) => ({ args });
console.log(imprimirArgumentosFlecha3(10, 'Fernando', 'Herrera'));
// { args: [ 'Fernando', 'Herrera' ] }
```

✅ Desestructuración de un array devuelto:
```js
const [casado, vivo, nombre, saludo] = imprimirArgumentosFlecha2(true, false, 'Fernando', 'Hola!');
console.log({ casado, vivo, nombre, saludo });
// { casado: true, vivo: false, nombre: 'Fernando', saludo: 'Hola!' }
```

---

## 📌 Desestructuración de Argumentos
Supongamos que tenemos el siguiente objeto:
```js
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
```

👀 Manera tradicional:
```js
const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
};

imprimePropiedades(tony);
```

🎯 **Desestructuración optimizada con valores por defecto:**
```js
const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};

imprimePropiedades2(tony);
// { nombre: 'Tony Stark' }
// { codeName: 'Ironman' }
// { vivo: false }
// { edad: 40 }
// { trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ] }
```

---

📌 **Resumen de Pro-Tips:**
✅ Retorna objetos sin redundancia.
✅ Usa `rest (...)` para capturar argumentos en funciones de flecha.
✅ Desestructura argumentos para escribir código más limpio.
✅ Agrega valores por defecto en la desestructuración.

🔥 **Con estos consejos, tu código será más eficiente y legible!** 🚀

