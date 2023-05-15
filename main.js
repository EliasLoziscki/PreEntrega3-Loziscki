//creamos una clase para las pinturas
class Pintura {
  constructor(id, nombre, marca, color, sitio, precio, imagen, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.sitio = sitio;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }
}

const albaObrasLatIntAntirreflex = new Pintura(
  01,
  "ALBA OBRAS LAT INT ANTIRREFLEX",
  "Alba",
  "blanco",
  "Interior",
  18105,
  "./recursos/imagenes/ALBA_OBRAS_LAT_INT_ANTIRREFLEX.png",
  1
);
const albaFrentesYMurosBlanco4 = new Pintura(
  02,
  "ALBA FRENTES Y MUROS BLANCO 4LTS",
  "Alba",
  "blanco",
  "Exterior",
  5770,
  "./recursos/imagenes/ALBAFRENT_FRENTES_Y_MUROS_BLANCO.png",
  1
);
const albaFrentesYMurosBlanco10 = new Pintura(
  03,
  "ALBA FRENTES Y MUROS BLANCO 10LTS",
  "Alba",
  "blanco",
  "Exterior",
  12910,
  "./recursos/imagenes/ALBAFRENT_FRENTES_Y_MUROS_BLANCO.png",
  1
);
const albaFrentesYMurosBlanco20 = new Pintura(
  04,
  "ALBA FRENTES Y MUROS BLANCO 20LTS",
  "Alba",
  "blanco",
  "Exterior",
  25000,
  "./recursos/imagenes/ALBAFRENT_FRENTES_Y_MUROS_BLANCO.png",
  1
);
const casablancaProInterior4 = new Pintura(
  05,
  "CASABLANCA PRO INTERIOR 4LTS",
  "Casablanca",
  "blanco",
  "Interior",
  3300,
  "./recursos/imagenes/CASABLANCA_PRO_INTERIOR_4_LTS.png",
  1
);
const casablancaProInterior10 = new Pintura(
  06,
  "CASABLANCA PRO INTERIOR 10LTS",
  "Casablanca",
  "blanco",
  "Interior",
  7290,
  "./recursos/imagenes/CASABLANCA_PRO_INTERIOR_4_LTS.png",
  1
);
const casablancaProInterior20 = new Pintura(
  07,
  "CASABLANCA PRO INTERIOR 20LTS",
  "Casablanca",
  "blanco",
  "Interior",
  11800,
  "./recursos/imagenes/CASABLANCA_PRO_INTERIOR_4_LTS.png",
  1
);
const casablancaPerformanceExtMateHidrorepelente4 = new Pintura(
  08,
  "CASABLANCA PERFORMANCE EXT MATE HIDROREPELENTE 4LTS",
  "Casablanca",
  "blanco",
  "Exterior",
  4915,
  "./recursos/imagenes/CASABLANCA_PERFORMANCE_EXT_MATE.png",
  1
);
const casablancaPerformanceExtMateHidrorepelente10 = new Pintura(
  09,
  "CASABLANCA PERFORMANCE EXT MATE HIDROREPELENTE 10LTS",
  "Casablanca",
  "blanco",
  "Exterior",
  10850,
  "./recursos/imagenes/CASABLANCA_PERFORMANCE_EXT_MATE.png",
  1
);
const casablancaPerformanceExtMateHidrorepelente20 = new Pintura(
  10,
  "CASABLANCA PERFORMANCE EXT MATE HIDROREPELENTE 20LTS",
  "Casablanca",
  "blanco",
  "Exterior",
  19800,
  "./recursos/imagenes/CASABLANCA_PERFORMANCE_EXT_MATE.png",
  1
);
const colorinLivingLatex = new Pintura(
  11,
  "COLORIN LIVING LATEX",
  "Colorin",
  "blanco",
  "Interior",
  6700,
  "./recursos/imagenes/COLORIN_LIVING_LATEX_X_4_LTS.png",
  1
);
const casablancaEntonador = new Pintura(
  12,
  "CASABLANCA ENTONADOR",
  "Casablanca",
  [],
  "",
  472,
  "./recursos/imagenes/CASABLANCA_ENTONADOR_120ML.png",
  1
);
const tersuaveEntonador = new Pintura(
  13,
  "TERSUAVE ENTONADOR",
  "Tersuave",
  [],
  "",
  849,
  "./recursos/imagenes/TERSUAVE_ENTONADOR_120ML.png",
  1
);
const albaEntonador = new Pintura(
  14,
  "ALBA ENTONADOR",
  "ALBA",
  [],
  "",
  500,
  "./recursos/imagenes/ALBA_ENTONADOR_120ML.png",
  1
);

const arrayPinturas = [
  albaObrasLatIntAntirreflex,
  albaFrentesYMurosBlanco4,
  albaFrentesYMurosBlanco10,
  albaFrentesYMurosBlanco20,
  casablancaProInterior4,
  casablancaProInterior10,
  casablancaProInterior20,
  casablancaPerformanceExtMateHidrorepelente4,
  casablancaPerformanceExtMateHidrorepelente10,
  casablancaPerformanceExtMateHidrorepelente20,
  colorinLivingLatex,
  casablancaEntonador,
  tersuaveEntonador,
  albaEntonador,
];

//usuarios registrados - datos de inicio de sesion
const usuarios = [
  { usuario: "andres", contrasenia: 123 },
  { usuario: "luciana", contrasenia: 456 },
];

let llamandoUsuario = localStorage.getItem("usuario_registrado");

//declaramos el array carrito el cual estrae su contenido gracias a Json del localStorage, en caso de que no exista ningún objeto “carrito” almacenado en el Local Storage, se crea un arreglo vacío.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Declaramos la funcion que llebara el total de lo comprado y se podra visualizar en el carrito. Esta funcion la estaremos llamando cada ves que se produsca un cambio en el carrito haci se actualiza el valor total del carrito en la pagina
const totalCarritoRender = () => {
  const carritoTotal = document.getElementById("carritoTotal");
  carritoTotal.innerHTML = "";
  let total = carrito.reduce((acumulador, { precio, cantidad }) => {
    return acumulador + precio * cantidad;
  }, 0);
  carritoTotal.innerHTML = `El total de su compra es: $${total}`;
};

//declaro una funcion para que pueda visualizar cuantos productos hay en el carrito. Esta funcion tambien la llamo cada vez que se actualiza los elementos de carrito, ya sea por agregado o eliminacion de productos
const renderizarNumeroCarrito = () => {
  const cantidadTotalDeProductos = document.getElementById("numeroCarrito");
  cantidadTotalDeProductos.innerText = "0";
  let numeroTotal = carrito.reduce((acc, { cantidad }) => {
    return acc + cantidad;
  }, 0);
  cantidadTotalDeProductos.innerText = `${numeroTotal}`;
};

//declaramos la funcion que creara la lista de producto que selecciona el usuario y podra ver en el carrito. esta funcion la estaremos llamando cada vez que se agregue o elimine un producto, haci se actualiza en la pagina estos cambios inmediatamente
const renderizarCarrito = () => {
  const listaCarrito = document.getElementById("listaCarrito");
  listaCarrito.innerHTML = "";
  carrito.forEach(({ nombre, precio, cantidad, id }) => {
    let elementoLista = document.createElement("li");
    elementoLista.className = "row justify-content-between";
    let nombreDiv = document.createElement("div");
    let precioDiv = document.createElement("div");
    let cantidadDiv = document.createElement("div");
    let botonDiv = document.createElement("div");

    nombreDiv.className = "nombre-col";
    precioDiv.className = "precio-col";
    cantidadDiv.className = "cantidad-col";
    botonDiv.className = "boton-col";

    nombreDiv.innerHTML = nombre;
    precioDiv.innerHTML = `p/u: $${precio}`;
    cantidadDiv.innerHTML = `cant.: ${cantidad}`;
    botonDiv.innerHTML = `<button onclick = "eliminarDelCarrito(${id})" class="btn-close" aria-label="Close"></button>`;

    elementoLista.appendChild(nombreDiv);
    elementoLista.appendChild(precioDiv);
    elementoLista.appendChild(cantidadDiv);
    elementoLista.appendChild(botonDiv);

    listaCarrito.appendChild(elementoLista);
  });
};

// agregar al carrito el producto, si este ya existe se le suma 1 en cantidad
const agregarAlCarrito = (prodId) => {
  const existe = carrito.some((prod) => prod.id === prodId);
  if (existe) {
    carrito = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
      return prod;
    });
  } else {
    const item = arrayPinturas.find((prod) => prod.id === prodId);
    carrito.push({ ...item, cantidad: 1 });
  }
  renderizarCarrito();
  totalCarritoRender();
  renderizarNumeroCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// utiliso Toastify
//declaro la funcion mensajeEmergente, este funcion la utilizaremos al agregar un producto, al elimnar un producto, carrito vacio y debes registrarte, el paremetro es para cambiar el mensaje según la ocacion.
const mensajeEmergente = (mensaje) => {
  Toastify({
    text: mensaje,
    duration: 2000,
    newWindow: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );",
    },
  }).showToast();
};

//declaramos la función que creara los productos que visualizaremos en formato de card en la pagina
const renderizarProductos = () => {
  //vinculamos y creamos un div, lo rellenamos, le agregamos className - vinculamos a un boton para despues este lo agregue al array del carrito
  const contenedorProductos = document.getElementById("contenedorCartas");
  arrayPinturas.forEach(
    ({ id, nombre, marca, color, sitio, precio, imagen }) => {
      const div = document.createElement("div");
      div.className = "col-xs-12 col-md-6 col-lg-4 col-xxl-3";
      div.innerHTML = `<div class="card" id="producto${id}">  
                <img src="${imagen}" class="card-img-top" alt="imagen de ${nombre}">
                <div class="card-body h6 row justify-content-evenly align-content-end">
                    <h5 class="card-title">${nombre}</h5>
                    <p>${marca} - ${sitio} - ${color} </p>
                    <p class="card-text card-precio">$${precio.toLocaleString(
                      `es-ES`
                    )}</p>
                    <button class="btn" id="btnProducto${id}">Agregar</button>
                </div>
            </div>`;

      contenedorProductos.appendChild(div);

      const boton = document.getElementById(`btnProducto${id}`);
      boton.addEventListener(`click`, (e) => {
        e.preventDefault();
        agregarAlCarrito(id);
        mensajeEmergente("1 producto agregado");
      });
    }
  );
};

//declaramos una función para vaciar completamnte el carrito
const borrarCarrito = () => {
  carrito = [];
};

// funcion para eliminar productos del carrito, vinculado al boton de la lista del carrito
const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  mensajeEmergente("Eliminaste un producto");
  renderizarCarrito();
  totalCarritoRender();
  renderizarNumeroCarrito();
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//usando la libreria SweetAlert

const inicioDeSesion = () => {
  if (localStorage.getItem("sesion_iniciada") !== "true") {
    Swal.fire({
      title: "Inicia sesión",
      html: `
            <form>
                <input type="text" id="login" class="swal2-input" placeholder="Usuario">
                <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
            </form>`,
      confirmButtonText: "Iniciar",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup("").querySelector("#login").value;
        const password = Swal.getPopup("").querySelector("#password").value;
        const usuario = usuarios.find(
          (e) => e.usuario === login && e.contrasenia == password
        );
        if (!usuario) {
          Swal.showValidationMessage(
            `Usuario o contraseña incorrectos. Usa: "andres" 123 o "luciana" 456`
          );
          localStorage.setItem("sesion_iniciada", false);
          return false;
        } else {
          localStorage.setItem("sesion_iniciada", true);
          localStorage.setItem("usuario_registrado", login);
          return true;
        }
      },
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          `Bienvenid@ ${
            llamandoUsuario[0].toUpperCase() + llamandoUsuario.substring(1)
          }` // lo arme de esta forma, por que si en esta pagina implemento una formulario de registro y al nombre(en este caso usuario) pueda adaptarlo para el saludo, al registrarse deberia tener usuario, nombre y sexo por lo menos para un mensaje mas personalizado, aunque ya podria modigficar la primera letra del nombre al llenar el formulario. analizar mas profundamente. Idea futura
        );
      }
    });
  } else {
    Swal.fire({
      title: "Cierre de sesión",
      text: "¿Deseas cerrar sesion?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("sesion_iniciada", false);
      } else {
        localStorage.setItem("sesion_iniciada", true);
      }
    });
  }
};

const alert = document.getElementById("botonSweetAlert");
alert.addEventListener("click", () => {
  inicioDeSesion();
});

//declaramos la funcion finalizar compra. Si el array carrito tiene al menos un elemento se puede realizar la compra. Esto implica que eliminemos los productos del carrito, guardamos en el localStorage el carrito vacio renderisemos el carrito y el total de la compra haci se actualiza lo borrado en la pagina y aparece el mensaje de gracias pos su compra

const finalizaCompra = () => {
  return new Promise((resuelto, rechazado) => {
    if (localStorage.getItem("sesion_iniciada") === "true") {
      if (carrito.length > 0) {
        Swal.showLoading(); // Muestra la animación de carga
        setTimeout(() => {
          Swal.fire({
            title: "Confirmar compra",
            text: "¿Desea confirmar la compra?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              borrarCarrito();
              localStorage.setItem("carrito", JSON.stringify(carrito));
              renderizarCarrito();
              totalCarritoRender();
              renderizarNumeroCarrito();

              Swal.fire({
                title: `Muchas gracias ${llamandoUsuario[0].toUpperCase() + llamandoUsuario.substring(1)
                } por su compra`,
                text: "",
                icon: "success",
              });
              resuelto(); // Resolvemos la promesa cuando la operación asincrónica finaliza correctamente
            } else {
              rechazado(); // Rechazamos la promesa si el usuario cancela la compra
            }
          });
        }, 1500); // simulo una carga de 1.5seg. ¯\_(ツ)_/¯
      } else {
        mensajeEmergente("Tu carrito está vacío");
        rechazado(); // Rechazamos la promesa si el carrito está vacío
      }
    } else {
      mensajeEmergente("Debes iniciar sesión para continuar");
      rechazado(); // Rechazamos la promesa si el usuario no ha iniciado sesión
    }
  });
};

const compraFinal = document.getElementById("botonCompraFinal");
compraFinal.addEventListener("click", () => {
  finalizaCompra();
});

//llamamos a la funcion rederizarProductos para que cargue las card de los productos al html
renderizarProductos();

//llamo a totalCarritoRender haci al refrescar la pagina coloca el valor total de los productos que estan guardados en el localStorage
totalCarritoRender();

//renderizamosCarrito para al cargarse la pagina me cargue si hay elementos del carrito en el localStorage
renderizarCarrito();

//llamo a renederizarNumeroCarrito haci al refrescar la pagina coloca el numero de cuantos productos hay en el carrito si es que hay alguno producto guardado en el localStorage
renderizarNumeroCarrito();

//Usando una api del tiempo, datos extraidos de: https://rapidapi.com/weatherapi/api/weatherapi-com
nombreDeTuFuncion = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6675d9964fmsh08ae9faaa2f3195p165946jsn523e5a8f78ac",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=-34.6%2C%20-58.3",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const temperatura = data.current.temp_c;
      const icono = data.current.condition.icon;

      document.getElementById("temperatura").innerHTML = temperatura + "°C";
      document.getElementById("icono").setAttribute("src", "https:" + icono);
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("temperatura").innerHTML = "";
      document.getElementById("icono").setAttribute("src", "./recursos/icono/icono-color.png");
    });
};

nombreDeTuFuncion();
