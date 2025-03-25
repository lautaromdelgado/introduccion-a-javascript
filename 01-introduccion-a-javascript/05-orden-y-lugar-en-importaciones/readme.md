# Orden y Lugar de Importaciones en JavaScript

## Importancia de una Buena Estructuración de Directorios

Cuando trabajamos en proyectos que contienen múltiples archivos JavaScript y hojas de estilo CSS, es crucial mantener una estructura de directorios organizada. Esto mejora la mantenibilidad del código, facilita la escalabilidad y evita errores en las importaciones.

### Ejemplo de Estructuración de Directorios:
```
05-orden-y-lugar-en-importaciones/
│── assets/
│   │── css/
│   │   └── style.css
│   │── js/
│   │   ├── app.js
│   │   └── alerts.js
│── index.html
│── readme.md
```

### Beneficios de una Buena Estructura de Directorios:
1. **Modularidad**: Separa archivos según su funcionalidad, evitando archivos monolíticos difíciles de gestionar.
2. **Mantenibilidad**: Facilita la comprensión del código, especialmente en proyectos colaborativos.
3. **Evita Conflictos**: Reduce la probabilidad de errores al importar archivos.
4. **Mejor Rendimiento**: Una carga de archivos optimizada contribuye a un mejor tiempo de respuesta de la página.

---

## Orden en las Importaciones

El orden en el que se importan los archivos en HTML es clave para evitar errores de ejecución. Si un script intenta utilizar una variable o función que aún no ha sido declarada, la consola del navegador lanzará errores.

### Malas Prácticas:
Colocar scripts en el `<head>` puede bloquear la carga de la página y generar errores si intentan acceder a elementos HTML que aún no existen.
```html
<head>
    <script src="./assets/js/app.js" type="module"></script> <!-- No recomendado -->
</head>
```

### Buenas Prácticas:
1. **Importar primero las hojas de estilo CSS en el `<head>`**:
   ```html
   <link rel="stylesheet" href="./assets/css/style.css">
   ```

2. **Colocar los scripts al final del `<body>`**:
   ```html
   <script src="./assets/js/app.js" type="module"></script>
   <script src="./assets/js/alerts.js"></script>
   ```
   - Primero se importa `app.js` donde se declaran las variables.
   - Luego se importa `alerts.js`, que utiliza las variables declaradas en `app.js`.

3. **Evitar el uso de `var`**:
   ```js
   var miNombre = 'Lautaro';
   ```
   - `var` tiene un alcance global y puede generar problemas en proyectos grandes.
   - Se recomienda usar `let` o `const`.

### Notas Finales:
- **Evitar importar archivos JavaScript en el `<head>`** para no bloquear la carga del HTML.
- **Importar en el orden correcto** para evitar referencias a variables no inicializadas.
- **Usar el atributo `type="module"`** cuando sea necesario para gestionar mejor las dependencias entre scripts.

Siguiendo estas buenas prácticas, aseguramos un código más limpio, organizado y fácil de mantener en proyectos JavaScript.

