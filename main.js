// Obtener los cuadros almacenados en el localStorage
let tiendaLocalStorage = localStorage.getItem("tienda");
let tiendaArr = tiendaLocalStorage ? JSON.parse(tiendaLocalStorage) : [];

// Variables globales
let main = document.getElementById("main");

// Crear el formulario de ingreso llamando la funcion
crearFormIngreso();

// Crear el los cuadros dentro del div id="divMostrar"
verCuadros();

