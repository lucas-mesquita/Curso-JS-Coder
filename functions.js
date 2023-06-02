// Funciones
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
    const cuotas6 = ((costo / 6) * 1.05).toFixed(2);
    const cuotas12 = ((costo / 12) * 1.1).toFixed(2);

    return `Puede realizar el pago de las siguientes maneras:
  Contado $${contado}
  En 3 cuotas de $${cuotas3}
  En 6 cuotas de $${cuotas6}
  En 12 cuotas de $${cuotas12}`;
};

// Función para validar un dato string
const validarString = (valor) => {
    return valor && typeof valor === 'string' && valor.trim() !== '';
};

// Función para validar un dato numérico
const validarNumero = (valor) => {
    return !isNaN(valor) && typeof valor === 'number' && isFinite(valor);
};
///////////////////////////////////////////////////////////////////

// Funcion para crear Formulario ingreso de cuadros

const crearFormIngreso = () => {
    // Eliminar el formulario existente (si existe)
    let formularioExistente = document.getElementById("formularioIngreso");
    if (formularioExistente) {
      formularioExistente.remove();
    }
  
    // Crear el formulario
    let formulario = document.createElement("div");
    formulario.id = "formularioIngreso";
    formulario.classList.add("form");
  
    // Crear el input de nombre
    let labelNombre = document.createElement("label");
    labelNombre.innerHTML = "Nombre:";
    labelNombre.classList.add("label");
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.classList.add("input");
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombre);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el select de material
    let labelMaterial = document.createElement("label");
    labelMaterial.innerHTML = "Material:";
    let selectMaterial = document.createElement("select");
    selectMaterial.id = "material";
  
    // Obtener los materiales almacenados en el localStorage
    let tiendaLocalStorage = localStorage.getItem("tienda");
    let tiendaArr = tiendaLocalStorage ? JSON.parse(tiendaLocalStorage) : [];
    let materiales = tiendaArr.filter((objeto) => objeto.tipo === "material");

    // Crear las opciones del select con los materiales disponibles
    materiales.forEach((material) => {
      let opcion = document.createElement("option");
      opcion.value = material.nombre;
      opcion.text = material.nombre;
      selectMaterial.appendChild(opcion);
    });
  
    formulario.appendChild(labelMaterial);
    formulario.appendChild(selectMaterial);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el input de categoría
    let labelCategoria = document.createElement("label");
    labelCategoria.innerHTML = "Categoría:";
    let inputCategoria = document.createElement("input");
    inputCategoria.type = "text";
    inputCategoria.id = "categoria";
    formulario.appendChild(labelCategoria);
    formulario.appendChild(inputCategoria);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el input de ruta de imagen
    let labelRutaImagen = document.createElement("label");
    labelRutaImagen.innerHTML = "Ruta de imagen:";
    let inputRutaImagen = document.createElement("input");
    inputRutaImagen.type = "text";
    inputRutaImagen.id = "rutaImagen";
    formulario.appendChild(labelRutaImagen);
    formulario.appendChild(inputRutaImagen);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el input de precio
    let labelPrecio = document.createElement("label");
    labelPrecio.innerHTML = "Precio:";
    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.id = "precio";
    formulario.appendChild(labelPrecio);
    formulario.appendChild(inputPrecio);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el input de stock
    let labelStock = document.createElement("label");
    labelStock.innerHTML = "Stock:";
    let inputStock = document.createElement("input");
    inputStock.type = "number";
    inputStock.id = "stock";
    formulario.appendChild(labelStock);
    formulario.appendChild(inputStock);
    formulario.appendChild(document.createElement("br"));
  
    // Crear el botón de guardar
    let botonGuardar = document.createElement("button");
    botonGuardar.innerHTML = "Guardar";
    formulario.appendChild(botonGuardar);
  
    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(formulario);
  
    // Asignar el evento click al botón de guardar
    botonGuardar.addEventListener("click", () => {
      // Obtener los valores del formulario
      let nombre = inputNombre.value;
      let material = selectMaterial.value;
      let categoria = inputCategoria.value;
      let rutaImagen = inputRutaImagen.value;
      let precio = inputPrecio.value;
      let stock = inputStock.value;
  
      // Crear un objeto con los datos del formulario
      let objetoFormulario = {
        id: tiendaArr.length + 1, // Obtener el ID como uno más que el último elemento en tiendaArr
        nombre,
        tipo: "cuadro",
        material,
        categoria,
        img: rutaImagen,
        precio,
        stock
      };
  
      // Agregar el nuevo objeto al array de datos
      tiendaArr.push(objetoFormulario);
  
      // Guardar los datos en el localStorage
      localStorage.setItem("tienda", JSON.stringify(tiendaArr));
  
      // Refrescar el formulario
      formulario.reset();
    });
  };
  

const verCuadros = () => {
    // Obtener el div de destino
    const divResultado = document.getElementById("divResultado");
  
    // Obtener los cuadros almacenados en el localStorage
    const tienda = localStorage.getItem("tienda");
    const cuadros = JSON.parse(tienda);
  
    // Limpiar el contenido del div de resultado
    divResultado.innerHTML = "";
  
    // Crear una tarjeta para cada cuadro
    cuadros.forEach((cuadro) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Construir el contenido de la tarjeta
      card.innerHTML = `<img src="${cuadro.img}" alt="${cuadro.nombre}" class="card-img-top">
                        <div class="card-body">
                          <h5 class="card-title">${cuadro.nombre}</h5>
                          <p class="card-text">
                            Material: ${cuadro.material}<br>
                            Categoría: ${cuadro.categoria}<br>
                            Precio: $${cuadro.precio}<br>
                            Stock: ${cuadro.stock}
                          </p>
                        </div>`;
  
      // Agregar la tarjeta al div de resultado
      divResultado.appendChild(card);
    });
  };