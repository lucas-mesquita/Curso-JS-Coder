let nombre = prompt(`Bienvenido al cotizador de cuadros\nPor favor, ingrese su nombre`);
alert(`${nombre}, para realizar una cotizacion vamos\na solicitarte dos medidas en centímetros.`)

// Calcular m2
const m2 = (a, b) => (a * b) / 10000;

// Costos de materiales
const m2Lienzo = 100;
const m2Vidrio = 150;
const m2Aluminio = 200;

// Ingreso de medidas
let ancho = parseFloat(prompt('Ingrese el ancho a cotizar'));
while (isNaN(ancho)) {
  ancho = parseFloat(prompt('El valor ingresado no es válido. Ingrese el ancho a cotizar'));
}
console.log(ancho);
let alto = parseFloat(prompt('Ingrese el alto a cotizar'));
while (isNaN(alto)) {
  alto = parseFloat(prompt('El valor ingresado no es válido. Ingrese el alto a cotizar'));
}
console.log(alto);

let costoLienzo = m2(ancho, alto) * m2Lienzo;
let costoVidrio = m2(ancho, alto) * m2Vidrio;
let costoAluminio = m2(ancho, alto) * m2Aluminio;

let opcionCompra = Number(prompt(`El costo del cuadro en los diferentes materiales son:
1-Lienzo $${costoLienzo}
2-Vidrio $${costoVidrio}
3-Aluminio $${costoAluminio}
Por favor, ingrese un numero correspondiente a uno de los materiales.`));
while (isNaN(opcionCompra)) {
  opcionCompra = Number(prompt('Por favor, ingrese un numero correspondiente a uno de los materiales.'));
}

switch (opcionCompra) {
  case 1:
    alert(`El material seleccionado es Lienzo
    Puede realizar el pago de las siguientes maneras.
    Contado $${costoLienzo}
    3 Cuotas $${costoLienzo / 3}
    6 Cuotas $${(costoLienzo / 6) * 0.5}
    12 Cuotas $${(costoLienzo / 12) * 0.1}
    Con esta información comunicarse con un operador.`)
    break;

  case 2:
    alert(`El material seleccionado es Vidrio
    Puede realizar el pago de las siguientes maneras.
    Contado $${costoVidrio}
    3 Cuotas $${costoVidrio / 3}
    6 Cuotas $${(costoVidrio / 6) * 0.5}
    12 Cuotas $${(costoVidrio / 12) * 0.1}
    Con esta información comunicarse con un operador.`)
    break;

  case 3:
    alert(`El material seleccionado es Aluminio
    Puede realizar el pago de las siguientes maneras.
    Contado $${costoAluminio}
    3 Cuotas $${costoAluminio / 3}
    6 Cuotas $${(costoAluminio / 6) * 0.5}
    12 Cuotas $${(costoAluminio / 12) * 0.1}
    Con esta información comunicarse con un operador.`)
    break;
  default:
    opcionCompra = Number(prompt('Por favor, ingrese un numero correspondiente a uno de los materiales.'))
    break;

}
