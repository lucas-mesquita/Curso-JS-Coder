




/* fetch("./tienda.json")
.then((response) => response.json())
.then((data) => console.log(data));
 */




// Obtener los cuadros almacenados en el localStorage
/* let tiendaLocalStorage = localStorage.getItem("tienda");

tiendaLocalStorage ? [] : localStorage.setItem("tienda", JSON.stringify(tienda));

let tiendaArr = tiendaLocalStorage ? JSON.parse(tiendaLocalStorage) : []; */

// Variables globales
let main = document.getElementById("main");

// Crear el formulario de ingreso llamando la funcion
//

traerCuadros();

// Crear el los cuadros dentro del div id="divMostrar"
verCuadros();

