// Función para mostrar los cuadros
const traerCuadros = async () => {
  try {
    const response = await fetch("./tienda.json");
    const data = await response.json();

    // Filtrar los tipos de cuadro para no mostrar los materiales
    cuadros = data.filter((objeto) => objeto.tipo === "cuadro");
    console.log(cuadros);

    // Crear una tarjeta para cada cuadro
    cuadros.forEach((cuadro) => {
      const card = document.createElement("div");
      card.classList.add("col-auto");
      card.classList.add("card");
      card.style.width = "18rem";

      // Verificar si la url se renderiza bien, sino utilizar una por defecto
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
                          <a class="btn btn-primary btnSeleccionar" data-id="${cuadro.id}">Seleccionar</a>
                          </div>
                        </div>`;

      // Agregar la tarjeta al div de resultado
      divMostrar.appendChild(card);
    });

    // Agregar el evento click para seleccionar cuadros
    const btnSeleccionar = document.querySelectorAll('.btnSeleccionar');
    btnSeleccionar.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const cantidad = document.getElementById(`cantidad${id}`).value;
        agregarSeleccion(id, cantidad);
      });
    });

  } catch (error) {
    console.log(error);
  }
};

// Función para agregar un cuadro a la selección
const agregarSeleccion = (id, cantidad) => {
  // Encontrar el cuadro seleccionado por su ID en el array de cuadros
  const cuadroSeleccionado = cuadros.find((cuadro) => cuadro.id === id);
  let textoCantidad = cantidad === '1' ? 'unidad' : 'unidades';

  if (cuadroSeleccionado) {
    // Verificar si el cuadro ya está en el array 'seleccionados'
    const existeSeleccion = seleccionados.some(
      (seleccionado) => seleccionado.id === cuadroSeleccionado.id
    );

    if (!existeSeleccion) {
      // Agregar el cuadro seleccionado al array 'seleccionados'
      seleccionados.push(cuadroSeleccionado);

      Toastify({
        text: `Seleccionaste ${cantidad} ${textoCantidad} de ${cuadroSeleccionado.nombre}`,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
          background: 'linear-gradient(to right, #00b09b, #96c93d)',
        },
      }).showToast();

      // Almacenar la selección en el Local Storage
      localStorage.setItem('seleccionados', JSON.stringify(seleccionados));

      // Renderizar la selección actualizada
      renderizarSeleccion();
    }
  }
};

// Función para renderizar los elementos seleccionados
const renderizarSeleccion = () => {
  // Vaciar el contenido previo del elemento
  seleccionMostrar.innerHTML = '';

  // Verificar si hay elementos seleccionados
  if (seleccionados.length === 0) {
    seleccionMostrar.textContent = 'No hay elementos seleccionados.';
    return;
  }

  // Recorrer los objetos seleccionados y crear elementos HTML para mostrarlos
  seleccionados.forEach((cuadro) => {
    const divCuadro = document.createElement('div');
    divCuadro.classList.add('container');
    divCuadro.innerHTML = `
      <img src="${cuadro.img}" alt="${cuadro.nombre}" class="container">
      <p>${cuadro.nombre} Seleccionado:${cantidad}</p>
      <input type="number" id="eliminarCantidad${cuadro.id}" name="eliminarCantidad" min="1" max="${cantidad}" value="1" style="width:3rem;">
      <button class="btn btn-primary btnEliminar" data-id="${cuadro.id}" class="btn btn-primary">Eliminar</button>
      <hr>
    `;
    seleccionMostrar.appendChild(divCuadro);
  });

  // Agregar el botón para eliminar toda la selección
  const btnEliminarTodo = document.createElement('button');
  btnEliminarTodo.classList.add('btn');
  btnEliminarTodo.classList.add('btn-primary');
  btnEliminarTodo.textContent = 'Eliminar toda la selección';
  seleccionMostrar.appendChild(btnEliminarTodo);

  // Agregar el evento click para eliminar elementos individuales
  const btnEliminarElemento = document.querySelectorAll('.btnEliminar');
  btnEliminarElemento.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const cantidad = document.getElementById(`eliminarCantidad${id}`).value;
      eliminarElementoSeleccionado(id, cantidad);
    });
  });

  // Agregar el evento click para eliminar toda la selección
  btnEliminarTodo.addEventListener('click', eliminarSeleccionCompleta);
};

// Función para eliminar un elemento seleccionado
const eliminarElementoSeleccionado = (id, cantidad) => {
  seleccionados = seleccionados.filter((cuadro) => cuadro.id !== id);

  // Actualizar el Local Storage con la selección modificada
  localStorage.setItem('seleccionados', JSON.stringify(seleccionados));

  renderizarSeleccion();
};

// Función para eliminar toda la selección
const eliminarSeleccionCompleta = () => {
  seleccionados = [];

  // Actualizar el Local Storage con la selección modificada
  localStorage.setItem('seleccionados', JSON.stringify(seleccionados));

  renderizarSeleccion();
};

// Función para cargar la selección almacenada en el Local Storage
const cargarSeleccionDesdeLocalStorage = () => {
  const seleccionGuardada = localStorage.getItem('seleccionados');
  if (seleccionGuardada) {
    seleccionados = JSON.parse(seleccionGuardada);
  }
};

// Función para inicializar el formulario de ingreso
const formIngreso = async () => {
  try {
    const response = await fetch("./tienda.json");
    const data = await response.json();

    // Filtrar los materiales
    let materiales = data.filter((objeto) => objeto.tipo === "material");

    // Crear las opciones del select con los materiales disponibles
    materiales.forEach((material) => {
      let opcion = document.createElement("option");
      opcion.value = material.nombre;
      opcion.text = material.nombre;
      selectMaterial.appendChild(opcion);
    });
  } catch (error) {
    console.log(error);
  }
};

// Función para ingresar un cuadro
const ingresarCuadro = () => {
  botonGuardar.addEventListener("submit", (e) => {
    e.preventDefault();
    // Obtener los valores del formulario
    let nombre = inputNombre.value;
    let material = selectMaterial.value;
    let categoria = inputCategoria.value;
    let rutaImagen = inputRutaImagen.value;
    let precio = inputPrecio.value;
    let stock = inputStock.value;

    // Crear un objeto con los datos del formulario
    let objetoFormulario = {
      id: cuadros.length + 1, // Obtener el ID como uno más que el último elemento en cuadros
      nombre,
      tipo: "cuadro",
      material,
      categoria,
      img: rutaImagen,
      precio,
      stock
    };

    // Agregar el objeto al array de cuadros
    cuadros.push(objetoFormulario);

    // Actualizar el Local Storage con el nuevo cuadro
    localStorage.setItem('cuadros', JSON.stringify(cuadros));

    // Resetear el formulario
    botonGuardar.reset();
  });
};