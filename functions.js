////////////////////// Funcion crear Formulario de ingreso de cuadros //////////////////

const crearFormIngreso = () => {
  // Crear el formulario
  let formulario = document.createElement("form");
  formulario.id = "formularioIngreso";
  formulario.classList.add("m-auto");
  formulario.classList.add("row");
  formulario.classList.add("mb-3");
  formulario.style.maxWidth = "500px";

  // Crear el input de nombre
  let labelNombre = document.createElement("label");
  labelNombre.innerHTML = "Nombre:";
  labelNombre.classList.add("form-label");
  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.required = "true";
  inputNombre.classList.add("form-control");
  formulario.appendChild(labelNombre);
  formulario.appendChild(inputNombre);

  // Crear el select de material
  let labelMaterial = document.createElement("label");
  labelMaterial.innerHTML = "Material:";
  labelMaterial.classList.add("form-label");
  let selectMaterial = document.createElement("select");
  selectMaterial.id = "material";
  selectMaterial.classList.add("form-select");

  // Obtener los materiales almacenados en el localStorage
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

  // Crear el input de categoría
  let labelCategoria = document.createElement("label");
  labelCategoria.innerHTML = "Categoría:";
  labelCategoria.classList.add("form-label");
  let inputCategoria = document.createElement("input");
  inputCategoria.type = "text";
  inputCategoria.id = "categoria";
  inputCategoria.required = "true";
  inputCategoria.classList.add("form-control");
  formulario.appendChild(labelCategoria);
  formulario.appendChild(inputCategoria);

  // Crear el input de ruta de imagen
  let labelRutaImagen = document.createElement("label");
  labelRutaImagen.innerHTML = "Ruta de imagen:";
  labelRutaImagen.classList.add("form-label");
  let inputRutaImagen = document.createElement("input");
  inputRutaImagen.type = "text";
  inputRutaImagen.id = "rutaImagen";
  inputRutaImagen.required = "true";
  inputRutaImagen.classList.add("form-control");
  formulario.appendChild(labelRutaImagen);
  formulario.appendChild(inputRutaImagen);

  // Crear el input de precio
  let labelPrecio = document.createElement("label");
  labelPrecio.innerHTML = "Precio:";
  labelPrecio.classList.add("form-label");
  let inputPrecio = document.createElement("input");
  inputPrecio.type = "number";
  inputPrecio.id = "precio";
  inputPrecio.required = "true";
  inputPrecio.classList.add("form-control");
  formulario.appendChild(labelPrecio);
  formulario.appendChild(inputPrecio);

  // Crear el input de stock
  let labelStock = document.createElement("label");
  labelStock.innerHTML = "Stock:";
  labelStock.classList.add("form-label");
  let inputStock = document.createElement("input");
  inputStock.type = "number";
  inputStock.id = "stock";
  inputStock.required = "true";
  inputStock.classList.add("form-control");
  formulario.appendChild(labelStock);
  formulario.appendChild(inputStock);

  // Crear el botón de guardar
  let botonGuardar = document.createElement("button");
  botonGuardar.innerHTML = "Guardar";
  botonGuardar.classList.add("btn");
  botonGuardar.classList.add("btn-primary");
  formulario.appendChild(document.createElement("hr"));
  formulario.appendChild(botonGuardar);

  // Agregar el formulario al cuerpo del documento
  main.appendChild(formulario);

  // Asignar el evento click al botón de guardar
  botonGuardar.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log(`dddddd${inputNombre.value}`);

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
    verCuadros();
  });
};

////////////////////// Funcion para renderizar cuadros en un Section ////////////////////// 

const verCuadros = () => {
  // Si está creado, lo reseteamos
  let existe = document.getElementById("containerCards");
  if (existe) {
    existe.remove();
  }

  // Creamos el div Container
  let containerCards = document.createElement("section");
  containerCards.id = "containerCards";
  containerCards.classList.add("container-fluid");
  main.appendChild(containerCards);

  // Creamos el divMostrar
  let divMostrar = document.createElement("div");
  divMostrar.id = "divMostrar";
  divMostrar.classList.add("row");
  divMostrar.classList.add("justify-content-center");
  divMostrar.classList.add("gap-3");

  // Agregar divMostrar al cuerpo de container
  containerCards.appendChild(divMostrar);

  // Filtrar los tipos de cuadro para no mostrar los materiales
  let cuadros = tiendaArr.filter((objeto) => objeto.tipo === "cuadro");
  console.log(cuadros);

  // Crear una tarjeta para cada cuadro
  cuadros.forEach((cuadro) => {
    const card = document.createElement("div");
    card.classList.add("col-auto");
    card.classList.add("card");
    card.style.width = "18rem";

    // Verifica si la url se renderiza bien sino pone un rectangulo gris
    let img = cuadro.img ? `${cuadro.img}` : "https://cdn.memegenerator.es/descargar/18415767";

    // Construir el contenido de la tarjeta
    card.innerHTML = `<img src="${img}" alt="${cuadro.nombre}" class="card-img-top ">
                        <div class="card-body">
                          <h5 class="card-title">${cuadro.nombre}</h5>
                          <p class="card-text">
                            Material: ${cuadro.material}<br>
                            Categoría: ${cuadro.categoria}<br>
                            Precio: $${cuadro.precio}<br>
                            Stock: ${cuadro.stock}
                          </p>
                          <div class="d-flex justify-content-center gap-1">
                          <input type="number" id="cantidad${cuadro.id}" name="cantidad" min="1" max="${cuadro.stock}" value="1" style="width:3rem;">
                          <a class="btn btn-primary" id="btnSeleccionar${cuadro.id}">Seleccionar</a>
                          </div>
                        </div>`;

    // Agregar la tarjeta al div de resultado
    divMostrar.appendChild(card);
    // Agregar containerCards al cuerpo del documento
    main.appendChild(containerCards);

    /////////// Boton Seleccionar ////////////////////

    let btnSeleccionar = document.getElementById(`btnSeleccionar${cuadro.id}`);

    btnSeleccionar.addEventListener('click', () => {
      let cantidad = document.getElementById(`cantidad${cuadro.id}`).value;
      let textoCantidad = cantidad === '1' ? 'unidad' : 'unidades';

      Toastify({
        text: `Seleccionaste ${cantidad} ${textoCantidad} de ${cuadro.nombre}`,
        duration: 2000,
        gravity: 'bottom', // `top` or `bottom`
        position: 'right', // `left`, `center` or `right`
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();

      EliminarStock();
    });
  });
};

const EliminarStock = () => {

}
;
