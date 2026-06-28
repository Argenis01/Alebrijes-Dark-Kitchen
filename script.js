const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});
const menuItems = [
  { id: 1, categoria: "desayunos", nombre: "Pan Francés", descripcion: "Delicioso pan francés crujiente por fuera y tierno por dentro, perfecto para comenzar el día con un toque de sabor clásico.", precio: 100, imagen: "img/PanFrances.JPG" },
  { id: 2, categoria: "desayunos", nombre: "Club Sandwich", descripcion: "Combinación de pechuga de pollo, jamón, tocino y quesos fundentes, acompañado de papas a la francesa crujientes.", precio: 120, imagen: "img/ClubSandwich.JPG" },
  { id: 3, categoria: "desayunos", nombre: "Chilaquiles Rojos", descripcion: "Chilaquiles rojos acompañados de cecina, huevos estrellados o pechuga de pollo a la plancha.", precio: 110, imagen: "img/ChilaquilesRojos.jpeg" },
  { id: 4, categoria: "desayunos", nombre: "Chilaquiles Verdes", descripcion: "Chilaquiles verdes acompañados de cecina, huevos estrellados o pechuga de pollo a la plancha.", precio: 110, imagen: "img/ChilaquilesVerdes.jpeg" },
  { id: 5, categoria: "desayunos", nombre: "Chapata Toscana", descripcion: "Chapata con queso gouda, jamón de pollo ahumado, pepperoni y jamón serrano, con jitomate, lechuga, ensalada mediterránea y vinagreta de miel mostaza.", precio: 140, imagen: "img/ChapataToxcana.jpeg" },
  { id: 6, categoria: "desayunos", nombre: "Chilaquiles Divorciados", descripcion: "Chilaquiles divorciados con opción de cecina y huevos estrellados, o pechuga de pollo a la plancha y huevos.", precio: 130, imagen: "img/ChilaquilesDivorciados.jpeg" },
  { id: 7, categoria: "desayunos", nombre: "Enfrijoladas", descripcion: "Enfrijoladas con salsa cremosa de frijol, rellenas de pollo. Una opción auténtica y tradicional.", precio: 110, imagen: "img/Enfrijoladas.jpeg" },
  { id: 8, categoria: "desayunos", nombre: "Enchiladas Suizas", descripcion: "Enchiladas suizas rellenas de pollo y bañadas en salsa cremosa, perfectas para un desayuno lleno de sabor.", precio: 130, imagen: "img/EnchiladasSuizas.jpeg" },
  { id: 9, categoria: "desayunos", nombre: "Molletes", descripcion: "Molletes con queso gouda, chorizo, jamón y frijoles, acompañados de ensalada mexicana estilo pico de gallo.", precio: 100, imagen: "img/Molletes.jpeg" },

  { id: 10, categoria: "sushi", nombre: "Avocado Roll", descripcion: "Rollo de sushi con aguacate, preparado al momento con el estilo de Alebrijes Dark Kitchen.", precio: 135, imagen: "img/AvocadoRoll.jpeg" },
  { id: 11, categoria: "sushi", nombre: "Oniguiris", descripcion: "Oniguiris preparados con ingredientes frescos, ideales para disfrutar como platillo japonés ligero.", precio: 120, imagen: "img/Oniguiris.JPG" },
  { id: 12, categoria: "sushi", nombre: "Surimi Roll", descripcion: "Rollo de sushi con surimi, perfecto para los amantes del sabor clásico japonés.", precio: 120, imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=75" },
  { id: 13, categoria: "sushi", nombre: "Empanizado Roll", descripcion: "Rollo de sushi empanizado, crujiente por fuera y lleno de sabor por dentro.", precio: 110, imagen: "img/EmpanizadoRoll.jpeg" },
  { id: 14, categoria: "sushi", nombre: "Confetti Roll", descripcion: "Rollo especial con combinación de sabores y presentación colorida.", precio: 130, imagen: "img/ConfettiRoll.JPG" },
  { id: 15, categoria: "sushi", nombre: "Salmón Roll", descripcion: "Rollo con salmón, fresco y lleno de sabor.", precio: 145, imagen: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=75" },
  { id: 16, categoria: "sushi", nombre: "Español Roll", descripcion: "Rollo especial de la casa con una combinación única de ingredientes.", precio: 135, imagen: "img/EspañolRoll.JPG" },
  { id: 17, categoria: "sushi", nombre: "California Roll", descripcion: "Clásico rollo California preparado con el toque de Alebrijes Dark Kitchen.", precio: 135, imagen: "img/CaliforniaRoll.jpeg" },
  { id: 18, categoria: "sushi", nombre: "Pana Roll", descripcion: "Rollo especial para disfrutar en cualquier momento.", precio: 135, imagen: "img/PanaRoll.JPG" },
  { id: 19, categoria: "sushi", nombre: "Baff Roll Empanizado", descripcion: "Rollo empanizado con textura crujiente y sabor intenso.", precio: 110, imagen: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=75" },
  { id: 20, categoria: "sushi", nombre: "Mar y Tierra Roll", descripcion: "Rollo especial con combinación de sabores marinos y terrestres.", precio: 135, imagen: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=75" },
  { id: 21, categoria: "sushi", nombre: "Tropical Roll", descripcion: "Rollo con un toque tropical, fresco y diferente.", precio: 140, imagen: "img/TropicalRoll.JPG" },
  { id: 22, categoria: "sushi", nombre: "Crap Roll", descripcion: "Rollo especial de la casa, ideal para probar algo diferente.", precio: 135, imagen: "img/CrapRoll.JPG" },

  { id: 23, categoria: "hamburguesas", nombre: "Hamburguesa Texana", descripcion: "Hamburguesa estilo texano con el sabor intenso de Alebrijes Dark Kitchen.", precio: 150, imagen: "img/HamburguesaTexana.JPG" },
  { id: 24, categoria: "hamburguesas", nombre: "Hamburguesa Clásica", descripcion: "Hamburguesa clásica preparada al momento, ideal para cualquier antojo.", precio: 100, imagen: "img/HamburgesaClasica.JPG" },
  { id: 25, categoria: "hamburguesas", nombre: "Especial Burguer", descripcion: "Hamburguesa especial de la casa con combinación única de ingredientes.", precio: 170, imagen: "img/EspecialBurguer.jpeg" },
  { id: 26, categoria: "hamburguesas", nombre: "Hamburguesa Chicken-Crunchy", descripcion: "Hamburguesa de pollo crujiente, preparada para quienes buscan textura y sabor.", precio: 170, imagen: "img/HamburguesaChickenCrunchy.jpeg" },

  { id: 27, categoria: "snacks", nombre: "Orden de Alitas", descripcion: "Orden de alitas preparadas con el sabor de la casa.", precio: 135, imagen: "img/OrdenAlitas.JPG" },
  { id: 28, categoria: "snacks", nombre: "Orden de Papas a la Francesa", descripcion: "Papas a la francesa crujientes, perfectas para acompañar tu pedido.", precio: 60, imagen: "img/OrdenPapasalaFrancesa.jpeg" },
  { id: 29, categoria: "snacks", nombre: "Dedos de Queso", descripcion: "Dedos de queso dorados y crujientes, ideales para compartir.", precio: 150, imagen: "img/DedosQueso.png" },
  { id: 30, categoria: "snacks", nombre: "Orden Boneless", descripcion: "Boneless jugosos con el toque especial de Alebrijes.", precio: 145, imagen: "img/OrdenBoneless.JPG" },
  { id: 31, categoria: "snacks", nombre: "Orden de Papas Gajo", descripcion: "Papas gajo sazonadas, crujientes por fuera y suaves por dentro.", precio: 70, imagen: "img/OrdenPapasGajos.jpg" },

  { id: 32, categoria: "postres", nombre: "Flan Napolitano", descripcion: "Flan napolitano cremoso y dulce, perfecto para cerrar tu comida con un toque clásico.", precio: null, imagen: "img/FlanNapolitano.JPG" },

  { id: 33, categoria: "promociones", nombre: "Paquete Llenes Alebrijes", descripcion: "1 hamburguesa clásica + 1 rollo de sushi. Ideal para disfrutar lo mejor de Alebrijes en un solo paquete.", precio: 200, imagen: "img/PaqueteLlenesAebrijes.jpg" },
  { id: 34, categoria: "promociones", nombre: "Pareja Alebrijes", descripcion: "Rollo de sushi + 4 alitas + 3 dedos de queso + papas a la francesa. Perfecto para compartir.", precio: 275, imagen: "img/ParejaAlebrijes.jpeg" },
  { id: 35, categoria: "promociones", nombre: "Paquete Dúo Dinámico", descripcion: "2 hamburguesas clásicas + 7 alitas, 2 sabores a elegir, papas a la francesa, aderezo ranch y catsup.", precio: 310, imagen: "img/PaqueteDuoDinamico.jpeg" },
  { id: 36, categoria: "promociones", nombre: "Charola Alebrijes", descripcion: "Charola con 3 sabores de sushi, acompañados de 2 salsas con chile, 2 salsas naturales, tampico y aderezo chipotle. Perfecta para compartir.", precio: 350, imagen: "img/CharolaAlebrijes.jpeg" },
  { id: 37, categoria: "promociones", nombre: "Martes Sushi Lovers 2 x 180", descripcion: "Promoción válida solo los martes de 1:00 pm a 7:30 pm. Aplican restricciones.", precio: 180, imagen: "img/MatesSushiLovers.jpg" },
  { id: 38, categoria: "promociones", nombre: "Jueves de Sushi Admiradores 3 x 2", descripcion: "Promoción 3x2 pagando solo el precio del artículo más económico. Válida jueves de 1:00 pm a 7:30 pm.", precio: 270, imagen: "img/JuevesSushi.jpg" },
  { id: 39, categoria: "promociones", nombre: "Lunes de Rollitos", descripcion: "Promoción de lunes con deliciosos rollitos por solo $100 MXN. Válida lunes de 1:00 pm a 7:30 pm.", precio: 100, imagen: "img/LunesRollitos.jpg" },

  { id: 40, categoria: "refrescos", nombre: "Fresca", descripcion: "Refresco frío para acompañar tu pedido.", precio: 25, imagen: "img/Fresca.jpg" },
  { id: 41, categoria: "refrescos", nombre: "Manzana", descripcion: "Refresco sabor manzana frío para acompañar tus alimentos.", precio: 25, imagen: "img/Manzana.jpg" },
  { id: 42, categoria: "refrescos", nombre: "Sprite", descripcion: "Refresco Sprite frío.", precio: 25, imagen: "img/Sprite.jpg" },
  { id: 43, categoria: "refrescos", nombre: "Fanta de Naranja", descripcion: "Refresco Fanta sabor naranja frío.", precio: 25, imagen: "img/FantaNaranja.jpg" },
  { id: 44, categoria: "refrescos", nombre: "Coca Cola", descripcion: "Refresco Coca Cola frío.", precio: 25, imagen: "img/CocaCola.webp" }
];

let favoritos = JSON.parse(localStorage.getItem("favoritosAlebrijes")) || [];
let activeCategory = "todos";
let searchText = "";

const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.getElementById("menuTabs");
const searchMenu = document.getElementById("searchMenu");

function createProductCard(item) {
 const etiquetas = {
  desayunos: '<i class="fa-solid fa-fire"></i> Más pedido',
  sushi: '<i class="fa-solid fa-star"></i> Popular',
  hamburguesas: '<i class="fa-solid fa-crown"></i> Recomendado',
  snacks: '<i class="fa-solid fa-bolt"></i> Favorito',
  postres: '<i class="fa-solid fa-sparkles"></i> Nuevo',
  promociones: '<i class="fa-solid fa-tag"></i> Promo',
  refrescos: '<i class="fa-solid fa-thumbs-up"></i> Ideal'
};

  const tiempos = {
    desayunos: "15 min",
    sushi: "20 min",
    hamburguesas: "20 min",
    snacks: "15 min",
    postres: "8 min",
    promociones: "20 min",
    refrescos: "5 min"
  };

  const precio = item.precio !== null ? "$" + item.precio : "Por confirmar";
  const favorito = favoritos.includes(item.id) ? "fa-solid" : "fa-regular";

  return `
    <article class="product-card" onclick="abrirProducto(${item.id})">
      <div class="product-img">
        <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">

        <span class="product-badge">${etiquetas[item.categoria] || '<i class="fa-solid fa-utensils"></i> Nuevo'}</span>

        <button class="favorite-btn ${favoritos.includes(item.id) ? "is-favorite" : ""}" onclick="event.stopPropagation(); toggleFavorito(${item.id})">
  <i class="${favoritos.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart"></i>
</button>
      </div>

      <div class="product-body">
        <div class="product-meta">
          <span><i class="fa-solid fa-star"></i> 4.9</span>
          <span><i class="fa-regular fa-clock"></i> ${tiempos[item.categoria] || "15 min"}</span>
        </div>

        <p class="product-category">${item.categoria}</p>
        <h3 class="product-name">${item.nombre}</h3>
        <p class="product-desc">${item.descripcion}</p>

        <div class="spicy-level">${item.categoria === "sushi" ? "Preparado al momento" : "Hecho al momento"}</div>

        <div class="product-footer">
          <div>
            <span class="price-label">Precio</span>
            <span class="product-price">${precio}</span>
          </div>

         <button class="product-order" onclick="event.stopPropagation(); agregarAlCarrito(${item.id}, this, '${item.imagen}')">
  <i class="fa-solid fa-cart-plus"></i>
  ${item.precio === null ? "Consultar" : "Agregar"}
</button>
        </div>
      </div>
    </article>
  `;
}

function renderMenu() {
  let items = activeCategory === "todos"
    ? menuItems
    : menuItems.filter((item) => item.categoria === activeCategory);

  if (searchText.trim() !== "") {
    items = items.filter((item) =>
      item.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `<p class="no-results">No encontramos platillos con esa búsqueda.</p>`;
    return;
  }

  menuGrid.innerHTML = items.map(createProductCard).join("");
}
menuTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.remove("active");
    tab.setAttribute("aria-selected", "false");
  });

  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");

  activeCategory = btn.dataset.cat;
  renderMenu();
});

searchMenu.addEventListener("input", (e) => {
  searchText = e.target.value;
  renderMenu();
});
function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((fav) => fav !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritosAlebrijes", JSON.stringify(favoritos));
  renderMenu();

}

let carrito = JSON.parse(localStorage.getItem("carritoAlebrijes")) || [];

function guardarCarrito() {
  localStorage.setItem("carritoAlebrijes", JSON.stringify(carrito));
}

function actualizarContador() {
  const contador = document.getElementById("cartCount");
  const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  contador.textContent = total;
}

function agregarAlCarrito(id, boton = null, imagen = null) {
  const producto = menuItems.find((item) => item.id === id);
  if (!producto) return;

  const existe = carrito.find((item) => item.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  guardarCarrito();
  actualizarContador();
  animarContadorCarrito();
  
  setTimeout(() => {
  mostrarNotificacionProducto(producto);
}, 450);
  animarCarrito();
  if (boton && imagen) {
  animarImagenAlCarrito(boton, imagen);
}

  if (boton) {
    boton.classList.add("added");
    boton.innerHTML = `<i class="fa-solid fa-check"></i> Agregado`;

    setTimeout(() => {
      boton.classList.remove("added");
      boton.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Agregar`;
    }, 1200);
  }
}

function calcularTotal() {
  return carrito.reduce((total, item) => {
    return total + (item.precio || 0) * item.cantidad;
  }, 0);
}

function mostrarCarrito() {
  const modal = document.getElementById("cartModal");
  const lista = document.getElementById("cartItems");
  const empty = document.getElementById("emptyCart");
  const content = document.getElementById("cartContent");
  const totalTexto = document.getElementById("cartTotal");

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.style.display = "none";
    empty.style.display = "block";
    content.style.display = "none";
  } else {
    lista.style.display = "flex";
    empty.style.display = "none";
    content.style.display = "block";

    carrito.forEach((producto) => {
      const subtotal = (producto.precio || 0) * producto.cantidad;

      lista.innerHTML += `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${producto.imagen}" alt="${producto.nombre}">
          </div>

          <div class="cart-item-info">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio !== null ? "$" + producto.precio + " c/u" : "Precio por confirmar"}</p>

            <div class="cart-item-actions">
              <button onclick="disminuirCantidad(${producto.id})">−</button>
              <span>${producto.cantidad}</span>
              <button onclick="aumentarCantidad(${producto.id})">+</button>
            </div>
          </div>

          <div class="cart-item-side">
            <button class="cart-delete" onclick="eliminarProducto(${producto.id})">
              <i class="fa-solid fa-trash"></i>
            </button>

            <strong class="cart-subtotal">
              ${producto.precio !== null ? "$" + subtotal : "Por confirmar"}
            </strong>
          </div>
        </div>
      `;
    });
  }

  totalTexto.textContent = "$" + calcularTotal();
  modal.style.display = "flex";
}

function cerrarCarrito() {
  document.getElementById("cartModal").style.display = "none";
}

function aumentarCantidad(id) {
  const producto = carrito.find((item) => item.id === id);
  if (!producto) return;

  producto.cantidad++;
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function disminuirCantidad(id) {
  const producto = carrito.find((item) => item.id === id);
  if (!producto) return;

  producto.cantidad--;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter((item) => item.id !== id);
  }

  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter((item) => item.id !== id);

  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
}

function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarAlertaPremium(
      "Carrito vacío",
      "No tienes productos para eliminar.",
      "fa-cart-shopping"
    );
    return;
  }

  mostrarConfirmPremium();
}

function mostrarToast(mensaje) {
  const toast = document.getElementById("toast");

  toast.textContent = "✔ " + mensaje;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) {
    mostrarToast("Tu carrito está vacío");
    return;
  }

  const nombre = document.getElementById("clienteNombre").value.trim();
  const telefono = document.getElementById("clienteTelefono").value.trim();
  const direccion = document.getElementById("clienteDireccion").value.trim();
  const notas = document.getElementById("clienteNotas").value.trim();

  if (!nombre || !telefono || !direccion) {
    mostrarAlertaPremium(
  "Datos incompletos",
  "Por favor completa tu nombre, teléfono y dirección para enviar tu pedido.",
  "fa-user-pen"
);
return;
  }

  let mensaje = "Hola Alebrijes Dark Kitchen 👋%0A%0A";
  mensaje += "Quiero realizar este pedido:%0A%0A";

  carrito.forEach((producto) => {
    const subtotal = (producto.precio || 0) * producto.cantidad;

    mensaje += `${producto.cantidad} x ${producto.nombre}%0A`;

    if (producto.precio !== null) {
      mensaje += `Precio: $${producto.precio}%0A`;
      mensaje += `Subtotal: $${subtotal}%0A%0A`;
    } else {
      mensaje += "Precio: Por confirmar%0A%0A";
    }
  });

  mensaje += `TOTAL: $${calcularTotal()}%0A%0A`;
  mensaje += "DATOS DEL CLIENTE%0A";
  mensaje += `Nombre: ${nombre}%0A`;
  mensaje += `Teléfono: ${telefono}%0A`;
  mensaje += `Dirección: ${direccion}%0A`;

  if (notas) {
    mensaje += `Notas: ${notas}%0A`;
  }

  window.open("https://wa.me/529711132033?text=" + mensaje, "_blank");
}

actualizarContador();
let productoSeleccionado = null;
let cantidadModal = 1;

function abrirProducto(id) {
  const producto = menuItems.find((item) => item.id === id);
  if (!producto) return;

  productoSeleccionado = producto;
  cantidadModal = 1;

  document.getElementById("modalImg").src = producto.imagen;
  document.getElementById("modalImg").alt = producto.nombre;
  document.getElementById("modalNombre").textContent = producto.nombre;
  document.getElementById("modalDesc").textContent = producto.descripcion;
  document.getElementById("modalPrecio").textContent =
    producto.precio !== null ? "$" + producto.precio : "Precio por confirmar";
  document.getElementById("modalCantidad").textContent = cantidadModal;

  document.getElementById("productModal").style.display = "flex";
}

function cerrarProducto() {
  document.getElementById("productModal").style.display = "none";
}

function cambiarCantidad(valor) {
  cantidadModal += valor;

  if (cantidadModal < 1) {
    cantidadModal = 1;
  }

  document.getElementById("modalCantidad").textContent = cantidadModal;
}

function agregarDesdeModal() {
  if (!productoSeleccionado) return;

  for (let i = 0; i < cantidadModal; i++) {
    agregarAlCarrito(productoSeleccionado.id);
  }

  cerrarProducto();
}

renderMenu();

function animarCarrito() {
  const cart = document.querySelector(".cart-nav-btn");
  if (!cart) return;

  cart.classList.remove("cart-pop");
  void cart.offsetWidth;
  cart.classList.add("cart-pop");
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 900);
});
/* ================================
   ANIMAR NÚMEROS DEL HERO
================================ */

function animarContadores() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter, index) => {

        setTimeout(() => {

            if(counter.dataset.animated==="true") return;

            counter.dataset.animated="true";

            const target=parseFloat(counter.dataset.target);

            const decimal=counter.dataset.decimal==="true";

            const prefix=counter.dataset.prefix || "";

            const suffix=counter.dataset.suffix || "";

            let start=null;

            const duration=2800;

            function animate(timestamp){

                if(!start) start=timestamp;

                const progress=Math.min((timestamp-start)/duration,1);

                const value=target*progress;

                counter.textContent=
                prefix+
                (decimal?value.toFixed(1):Math.floor(value))
                +suffix;

                if(progress<1){

                    requestAnimationFrame(animate);

                }else{

    counter.textContent=
    prefix+
    (decimal?target.toFixed(1):Math.floor(target))
    +suffix;

    counter.classList.add("counter-pop");

    setTimeout(()=>{
        counter.classList.remove("counter-pop");
    },500);

}

            }

            requestAnimationFrame(animate);

        },index*700);

    });

}

   

/* ================================
   SCROLL REVEAL PREMIUM
================================ */

function initReveal() {
  const elementos = document.querySelectorAll(
  ".about, .featured, .location, .footer, .info-card, .featured-box, .about-image, .about-content"
);

  elementos.forEach((el) => {
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          if (entry.target.classList.contains("hero")) {
            animarContadores();
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px 80px 0px"
    }
  );

  elementos.forEach((el) => observer.observe(el));
}

window.addEventListener("load", () => {
  initReveal();
  animarContadores();
});
function animarImagenAlCarrito(boton, imagen) {
  const cart = document.querySelector(".cart-nav-btn");
  if (!cart) return;

  const img = document.createElement("img");
  img.src = imagen;
  img.className = "fly-product-img";

  const botonRect = boton.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  img.style.left = botonRect.left + botonRect.width / 2 + "px";
  img.style.top = botonRect.top + "px";

  document.body.appendChild(img);

  requestAnimationFrame(() => {
    img.style.left = cartRect.left + cartRect.width / 2 + "px";
    img.style.top = cartRect.top + cartRect.height / 2 + "px";
    img.style.transform = "scale(.25) rotate(18deg)";
    img.style.opacity = "0";
  });

  setTimeout(() => {
    img.remove();
  }, 850);
}

function animarContadorCarrito() {
  const contador = document.getElementById("cartCount");
  if (!contador) return;

  contador.classList.remove("count-pop");
  void contador.offsetWidth;
  contador.classList.add("count-pop");
}
function animarTarjetasMenu() {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    card.classList.remove("menu-card-show");
    card.classList.add("menu-card-hidden");
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.remove("menu-card-hidden");
          card.classList.add("menu-card-show");
        }, index * 130);
      });
    });
  });
}
function mostrarNotificacionProducto(producto) {
  const notification = document.getElementById("addNotification");
  const img = document.getElementById("addNotificationImg");
  const name = document.getElementById("addNotificationName");
  const price = document.getElementById("addNotificationPrice");

  if (!notification || !img || !name || !price) return;

  img.src = producto.imagen;
  img.alt = producto.nombre;
  name.textContent = producto.nombre;
  price.textContent = producto.precio !== null ? "$" + producto.precio : "Consultar";

  notification.classList.remove("show");

  clearTimeout(window.addNotificationTimer);

  setTimeout(() => {
    notification.classList.add("show");
  }, 50);

  window.addNotificationTimer = setTimeout(() => {
    notification.classList.remove("show");
  }, 2600);
}
function mostrarAlertaPremium(titulo, mensaje, icono = "fa-circle-exclamation") {
  const modal = document.getElementById("premiumAlert");
  const title = document.getElementById("premiumAlertTitle");
  const text = document.getElementById("premiumAlertText");
  const icon = document.getElementById("premiumAlertIcon");

  title.textContent = titulo;
  text.textContent = mensaje;
  icon.innerHTML = `<i class="fa-solid ${icono}"></i>`;

  modal.classList.add("show");
}

function cerrarAlertaPremium() {
  document.getElementById("premiumAlert").classList.remove("show");
}

function mostrarConfirmPremium() {
  document.getElementById("premiumConfirm").classList.add("show");
}

function cerrarConfirmPremium() {
  document.getElementById("premiumConfirm").classList.remove("show");
}

function confirmarVaciarPremium() {
  carrito = [];
  guardarCarrito();
  actualizarContador();
  mostrarCarrito();
  cerrarConfirmPremium();
}

renderMenu();
actualizarContador();