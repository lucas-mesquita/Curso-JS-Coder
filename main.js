// Definir constantes y variables globales
const materiales = {
  lienzo: { nombre: "Lienzo", precio: 2000, stock: 10 },
  vidrio: { nombre: "Vidrio", precio: 2500, stock: 5 },
  aluminio: { nombre: "Aluminio", precio: 3000, stock: 8 }
};

// Definir funciones
const m2 = (ancho, alto, material, personalizado) => {
  let precio = material.precio;
  if (personalizado) {
    precio += 1000; // agregar costo extra de diseño
  }
  return (ancho * alto * precio) / 10000;
};

const generarInfoPagos = (costo) => {
  const contado = costo.toFixed(2);
  const cuotas3 = (costo / 3).toFixed(2);
  const cuotas6 = ((costo / 6) * 1.5).toFixed(2);
  const cuotas12 = ((costo / 12) * 1.1).toFixed(2);
  
  return `Puede realizar el pago de las siguientes maneras:
Contado $${contado}
3 Cuotas $${cuotas3}
6 Cuotas $${cuotas6}
12 Cuotas $${cuotas12}
Con esta información comunicarse con un operador.`;
};

const obtenerMedida = (mensaje) => {
  let medida = NaN;
  while (isNaN(medida)) {
    medida = parseFloat(prompt(mensaje));
    if (isNaN(medida)) {
      alert("El valor ingresado no es válido. Ingrese una medida en centímetros.");
    }
  }
  return medida;
};

// Solicitar información al usuario
let nombre = prompt("Bienvenido al cotizador de cuadros. Por favor, ingrese su nombre:");
alert(`Hola, ${nombre}. Para realizar una cotización, vamos a solicitarle dos medidas en centímetros.`);
console.log(nombre);
const ancho = obtenerMedida("Ingrese el ancho a cotizar:");
const alto = obtenerMedida("Ingrese el alto a cotizar:");

let opcionCompra = NaN;
const esPersonalizado = confirm("¿Desea personalizar su cuadro por un costo adicional de $1000?");
while (isNaN(opcionCompra) || opcionCompra < 1 || opcionCompra > 3) {
  opcionCompra = parseInt(prompt(`El costo del cuadro en los diferentes materiales son:
  1- Lienzo $${materiales.lienzo.precio}
  2- Vidrio $${materiales.vidrio.precio}
  3- Aluminio $${materiales.aluminio.precio}
  Por favor, ingrese un número correspondiente a uno de los materiales.`));
  if (isNaN(opcionCompra) || opcionCompra < 1 || opcionCompra > 3) {
    alert("El valor ingresado no es válido. Ingrese un número correspondiente a uno de los materiales.");
  }
}
// Calcular costo de material
const materialSeleccionado = materiales[Object.keys(materiales)[opcionCompra - 1]];
const costoMaterial = m2(ancho, alto, materialSeleccionado);

// Verifica si el material seleccionado esta en stock
if (materialSeleccionado.stock <= 0) {
  alert(`Lo sentimos, el material ${materialSeleccionado.nombre} no está disponible en este momento.`);
  return;
}

// Mostrar información al usuario
const infoPagos = generarInfoPagos(costoMaterial);
alert(`El material seleccionado es ${materialSeleccionado.nombre}.\n${infoPagos}`);
