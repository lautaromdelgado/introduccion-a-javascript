# Problemas y Necesidades de Clases en JavaScript

## 📌 El problema inicial
Antes de que JavaScript introdujera las clases en ES6, la manera más común de crear objetos con funcionalidades compartidas era mediante objetos literales y funciones constructoras.

```js
// Problema: Métodos repetidos en cada objeto
const fher = {
    name: 'Fernando',
    age: 35,
    imprimir() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
};

const luis = {
    name: 'Luis',
    age: 30,
};

const pedro = {
    name: 'Pedro',
    age: 25,
};

fher.imprimir(); // Funciona solo para 'fher', los demás no tienen el método
```

### ❌ Problema:
Si quisiéramos agregar el método `imprimir()` a todos los objetos, tendríamos que hacerlo manualmente. Esto no es escalable y genera código repetitivo.

---

## 🔨 Solución con Funciones Constructoras
Para evitar la repetición, se usaban funciones constructoras con el operador `new` para crear instancias de objetos.

```js
// Función constructora para crear múltiples objetos con la misma estructura
function Persona(nombre, edad) {
    console.log('Se ejecutó esta función');
    this.name = nombre;
    this.age = edad;
    this.imprimir = () => {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    };
}

// Crear instancias
const maria = new Persona('Maria', 29);
console.log(maria);

const melania = new Persona('Melania', 19);
melania.imprimir(); // Ahora sí cada instancia tiene el método imprimir
```

🔹 **Cada instancia de `Persona` tiene sus propios datos y su propio método `imprimir()`.**

---

## ✅ Ventajas y ❌ Desventajas de las Funciones Constructoras

### ✅ Ventajas:
✔ Permiten crear múltiples objetos de forma más limpia.
✔ Eliminan la repetición de código.
✔ Siguen una estructura más organizada que los objetos literales.

### ❌ Desventajas:
✖ Cada instancia crea una nueva copia del método `imprimir()`, lo que puede afectar la memoria.
✖ No hay herencia natural como en las clases modernas.
✖ La sintaxis con `new` puede no ser intuitiva para principiantes.

---

## 🔚 Conclusión
Antes de la llegada de las clases en JavaScript, las funciones constructoras eran la mejor forma de simular la Programación Orientada a Objetos (POO). Permitían generar "molde" para nuestros objetos, evitando repetir métodos manualmente.

Sin embargo, con el tiempo, las clases llegaron para simplificar y optimizar aún más este proceso, haciéndolo más familiar a otros lenguajes como Java, C# o Python.

---

## 🎯 ¿Qué sigue?
💡 En las siguientes secciones aprenderás cómo usar **clases modernas en JavaScript**, crear instancias, usar constructores y trabajar con herencia para escalar tus proyectos de forma profesional.

📂 **Este contenido forma parte de la Sección 6 del curso: Fundamentos de JavaScript.**