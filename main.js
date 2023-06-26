

// Obtener los cuadros almacenados en el localStorage
/* let tiendaLocalStorage = localStorage.getItem("tienda");

tiendaLocalStorage ? [] : localStorage.setItem("tienda", JSON.stringify(tienda));

let tiendaArr = tiendaLocalStorage ? JSON.parse(tiendaLocalStorage) : []; */
//document.addEventListener("DOMContentLoaded", formIngreso)
/* let tienda =[];

const datosTienda = async () => {
try {
    const response = await fetch("./tienda.json");
    const data = await response.json();

    return data

} catch (error) {
    
}
}
console.log(datosTienda.data.response.json); */

// Formulario
let inputNombre = document.getElementById("nombre");
let selectMaterial = document.getElementById("material");
let inputCategoria = document.getElementById("categoria");
let inputRutaImagen = document.getElementById("rutaImagen");
let inputPrecio = document.getElementById("precio");
let inputStock = document.getElementById("stock");
let botonGuardar = document.getElementById("btnGuardar");

// Cards
let containerCards = document.getElementById("containerCards");
let divMostrar = document.getElementById("divMostrar");
let cuadros = [];


//Seleccionados
let seleccionMostrar = document.getElementById("seleccionMostrar");
let seleccionados =[];


// config del formulario de ingreso
formIngreso();

// Trae los cuadros del json y los muestra en cards
traerCuadros();
cargarSeleccionDesdeLocalStorage();
ingresarCuadro();
renderizarSeleccion();



