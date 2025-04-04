// Problemas

/**
 * Lo que sucede es que si quisieramos agregar a cada objeto el metodo imprimir,
 * tendríamos que hacerlo manualmente, por cada objeto que creamos.
 * Esto es un problema, ya que si quisieramos agregar un nuevo método a todos los objetos,
 */
const fher = {
    name: 'Fernando',
    age: 35,
    imprimir() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
}
const luis = {
    name: 'Luis',
    age: 30,
}
const pedro = {
    name: 'Pedro',
    age: 25,
}

fher.imprimir();

// Persona como función constructora
// En lugar de crear un objeto literal, creamos una función constructora
function Persona(nombre, edad) {
    console.log('Se ejecutó esta función');
    this.name = nombre;
    this.age = edad;
    this.imprimir = () => {
        console.log(`nombre: ${this.name} - edad: ${this.age}`);
    };
};

// La palabra NEW le dice javascript que queremos crear una nueva instancia de un objeto
const maria = new Persona('Maria', 29);
console.log(maria)
const melania = new Persona('Melania', 19);
melania.imprimir();