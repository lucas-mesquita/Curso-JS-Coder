// Obtener el botón de ingresoCuadro
let btnIngresoCuadro = document.getElementById("ingresoCuadro");
// Agregar evento de click al botón
btnIngresoCuadro.addEventListener("click", (e) => {
  // Crear el formulario de ingreso llamando la funcion
  crearFormIngreso();
});

// Obtener el botón de Ver Cuadros
let btnVerCuadro = document.getElementById("verCuadro");
// Agregar evento de click al botón
btnVerCuadro.addEventListener("click", (e) => {
  // Crear el formulario de ingreso llamando la funcion
  verCuadros();
});



/* // Ingresar Cuadro
if (eleccion === 1) {
  // Ingresar a stock
  let cuadroIngresado = false;
  let nuevoCuadro;

  while (!cuadroIngresado) {
    nuevoCuadro = {};
    nuevoCuadro.id = tienda.length + 1;

    let nombreValido = false;
    while (!nombreValido) {
      nuevoCuadro.nombre = prompt("Ingrese el nombre del cuadro:");
      const nombreEncontrado = tienda.every(item => item.nombre.toLowerCase() !== nuevoCuadro.nombre.toLowerCase());
      if (validarString(nuevoCuadro.nombre) && nombreEncontrado) {
        nombreValido = true;
      } else {
        alert("El nombre ingresado no es válido o ya existe. Por favor, ingrese un nombre válido para el cuadro.");
      }
    }

    nuevoCuadro.tipo = "cuadro";

    let materialValido = false;
    while (!materialValido) {
      nuevoCuadro.material = prompt("Ingrese el material del cuadro (lienzo, aluminio o vidrio):");
      const materialEncontrado = tienda.find(item => item.tipo === "material" && item.nombre.toLowerCase() === nuevoCuadro.material.toLowerCase());
      if (validarString(nuevoCuadro.material) && materialEncontrado) {
        materialValido = true;
      } else {
        alert("El material ingresado no es válido. Por favor, ingrese uno de los siguientes materiales: lienzo, aluminio o vidrio.");
      }
    }

    let categoriaValida = false;
    while (!categoriaValida) {
      nuevoCuadro.categoria = prompt("Ingrese la categoría del cuadro:");
      if (validarString(nuevoCuadro.categoria)) {
        categoriaValida = true;
      } else {
        alert("La categoría ingresada no es válida. Por favor, ingrese un valor válido.");
      }
    }

    let imgValida = false;
    while (!imgValida) {
      nuevoCuadro.img = prompt("Ingrese la ruta de la imagen del cuadro:");
      if (validarString(nuevoCuadro.img)) {
        imgValida = true;
      } else {
        alert("La ruta de la imagen ingresada no es válida. Por favor, ingrese un valor válido.");
      }
    }

    let precioValido = false;
    while (!precioValido) {
      const precioIngresado = parseFloat(prompt("Ingrese el precio del cuadro:"));
      if (!isNaN(precioIngresado) && precioIngresado > 0) {
        nuevoCuadro.precio = precioIngresado;
        precioValido = true;
      } else {
        alert("El precio ingresado no es válido. Por favor, ingrese un valor numérico mayor que cero.");
      }
    } 

    let stockValido = false;
    while (!stockValido) {
      const stockIngresado = parseInt(prompt("Ingrese el stock disponible del cuadro:"));
      if (!isNaN(stockIngresado) && stockIngresado >= 0) {
        nuevoCuadro.stock = stockIngresado;
        stockValido = true;
      } else {
        alert("El stock ingresado no es válido. Por favor, ingrese un valor numérico mayor o igual a cero.");
      }
    }

    tienda.push(nuevoCuadro);
    cuadroIngresado = true;

    // Mostrar información sobre el cuadro ingresado
    const infoCuadro = `ID: ${nuevoCuadro.id}
     Nombre: ${nuevoCuadro.nombre}
     Tipo: ${nuevoCuadro.tipo}
     Material: ${nuevoCuadro.material}
     Categoría: ${nuevoCuadro.categoria}
     Imagen: ${nuevoCuadro.img}
     Precio: ${nuevoCuadro.precio}
     Stock: ${nuevoCuadro.stock}
     `;

    alert("Información del cuadro ingresado:\n" + infoCuadro);
  }
}


// Ingresar al cotizador
else if (eleccion === 2) {

  alert(`Muy bien ${nombre}, para realizar una cotización, vamos a solicitarle dos medidas en centímetros.`);
  const ancho = obtenerMedida("Ingrese el ancho a cotizar:");
  const alto = obtenerMedida("Ingrese el alto a cotizar:");

  let opcionCompra = NaN;
  const esPersonalizado = confirm("¿Desea personalizar su cuadro por un costo adicional de $1000?");
  while (isNaN(opcionCompra) || opcionCompra < 1 || opcionCompra > 3) {
    opcionCompra = parseInt(prompt(`El costo del cuadro en los diferentes materiales es:
1- Lienzo $${tienda[0].precio}
2- Vidrio $${tienda[1].precio}
3- Aluminio $${tienda[2].precio}
Por favor, ingrese un número correspondiente a uno de los materiales.`));
    if (isNaN(opcionCompra) || opcionCompra < 1 || opcionCompra > 3) {
      alert("El valor ingresado no es válido. Ingrese un número correspondiente a uno de los materiales.");
    }
  }

  // Calcular costo de material
  const materialSeleccionado = tienda[opcionCompra - 1];
  const costoMaterial = m2(ancho, alto, materialSeleccionado, esPersonalizado);

  // Verifica si el material seleccionado está en stock
  if (materialSeleccionado.stock <= 0) {
    alert(`Lo sentimos, el material ${materialSeleccionado.nombre} no está disponible en este momento.`);
  } else {
    // Mostrar información al usuario
    const infoPagos = generarInfoPagos(costoMaterial);
    alert(`El material seleccionado es ${materialSeleccionado.nombre}.\n${infoPagos}`);
  }
}

 */