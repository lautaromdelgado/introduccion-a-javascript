// !! Principal problema permite remplazar objetos y propiedades
// !! del principal objeto global WINDOW

// var outerHeight = 100000;
// var outerWidth = 140000;

// Estás nombres de variables son variables predeterminadas del objeto window
// * En la consola del navegador colocando window.outerHeight y window.outerWidth puedes obtener el valor real de estás variables.

/*
Pero si en el código se declara una variable con el mismo nombre, se remplazará el valor de la variable global window.
Lo cual puede ser un problema si se está trabajando con librerías o frameworks que dependen de esas variables.
*/

let outerHeight = 100;
const outerWidth = 140;

// ** Estás no sobreescriben el valor de las variables globales window.outerHeight y window.outerWidth