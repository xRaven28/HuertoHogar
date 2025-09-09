
// Variables globales
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Toast de notificaciones
function mostrarToast(msg, color = "#28a745") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = color;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

// Actualizar contadores
function actualizarContadores() {
  const c = document.getElementById("carrito-count");
  const f = document.getElementById("favoritos-count");
  if (c) c.textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  if (f) f.textContent = favoritos.length;
}

// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadores();
  renderCarrito();
}


// Render carrito
function renderCarrito() {
  const tabla = document.getElementById("carrito-tabla");
  if (!tabla) return;

  tabla.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.name}</td>
      <td><img src="${p.img}" width="60"></td>
      <td>
        <button class="btn btn-sm btn-outline-secondary menos" data-index="${i}">-</button>
        <span class="mx-2">${p.cantidad}</span>
        <button class="btn btn-sm btn-outline-secondary mas" data-index="${i}">+</button>
      </td>
      <td>$${p.precio.toLocaleString("es-CL")}</td>
      <td>$${subtotal.toLocaleString("es-CL")}</td>
      <td><button class="btn btn-danger btn-sm eliminar" data-index="${i}">X</button></td>
    `;
    tabla.appendChild(fila);
  });

  const totalEl = document.getElementById("carrito-total");
  if (totalEl) totalEl.textContent = "$" + total.toLocaleString("es-CL");

  // Botones cantidad y eliminar
  tabla.querySelectorAll(".menos").forEach((b) =>
    b.addEventListener("click", () => {
      const idx = b.dataset.index;
      if (carrito[idx].cantidad > 1) carrito[idx].cantidad--;
      else carrito.splice(idx, 1);
      guardarCarrito();
    })
  );

  tabla.querySelectorAll(".mas").forEach((b) =>
    b.addEventListener("click", () => {
      carrito[b.dataset.index].cantidad++;
      guardarCarrito();
    })
  );

  tabla.querySelectorAll(".eliminar").forEach((b) =>
    b.addEventListener("click", () => {
      carrito.splice(b.dataset.index, 1);
      guardarCarrito();
    })
  );
}

// Render favoritos
function renderFavoritos() {
  const cont = document.getElementById("favoritos-lista");
  if (!cont) return;

  cont.innerHTML = "";

  if (favoritos.length === 0) {
    cont.innerHTML = `<p class="text-center text-muted">No tienes productos en favoritos.</p>`;
    return;
  }

  favoritos.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm h-100 text-center">
        <img src="${p.img || 'img/default.png'}" class="card-img-top producto-img" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-success btn-sm add-cart" data-id="${p.id}" data-name="${p.name}" data-precio="${p.precio || 0}" data-img="${p.img}">
              <i class="bi bi-cart"></i> Añadir al carrito
            </button>
            <button class="btn btn-danger btn-sm eliminar-fav" data-index="${i}">
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>`;
    cont.appendChild(card);
  });

  // Botones eliminar
  cont.querySelectorAll(".eliminar-fav").forEach((b) =>
    b.addEventListener("click", () => {
      favoritos.splice(b.dataset.index, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      renderFavoritos();
      mostrarToast("Producto eliminado de favoritos ❌", "#dc3545");
    })
  );
}


//carrito y favoritos
document.addEventListener("click", (e) => {
  // Añadir al carrito
  if (e.target.closest(".btn-cart") || e.target.closest(".add-cart")) {
    const btn = e.target.closest(".btn-cart, .add-cart");
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const precio = Number(btn.dataset.precio);
    const img = btn.dataset.img;

    const item = carrito.find((p) => p.id === id);
    if (item) {
      item.cantidad++;
    } else {
      carrito.push({ id, name, precio, img, cantidad: 1 });
    }
    guardarCarrito();
    mostrarToast(`${name} añadido al carrito 🛒`);
  }
  // Añadir a favoritos
  if (e.target.closest(".btn-fav")) {
    const btn = e.target.closest(".btn-fav");
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const img = btn.dataset.img;

    if (!favoritos.some((item) => item.id === id)) {
      favoritos.push({ id, name, img });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      mostrarToast(`${name} añadido a favoritos ❤️`);
    } else {
      mostrarToast(`${name} ya está en favoritos`, "#ffc107");
    }
  }
});

// Checkout
const btnPagar = document.getElementById("btn-pagar");
if (btnPagar) {
  btnPagar.addEventListener("click", () => {
    document.getElementById("form-pago").style.display = "block";
  });
}

const entrega = document.getElementById("entrega");
if (entrega) {
  entrega.addEventListener("change", () => {
    document.getElementById("direccion-box").style.display =
      entrega.value === "domicilio" ? "block" : "none";
  });
}

const checkout = document.getElementById("checkout-form");
if (checkout) {
  checkout.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarToast("✅ ¡Pedido confirmado! Gracias por tu compra.");
    carrito = [];
    guardarCarrito();
    document.getElementById("form-pago").style.display = "none";
    renderCarrito();
  });
}

// Consejos del día
document.addEventListener("DOMContentLoaded", () => {
  const consejos = [
    { titulo: "Come 5 frutas y verduras al día", texto: "Te aportan vitaminas, minerales y fibra para una vida más saludable." },
    { titulo: "Mantente hidratado", texto: "Bebe al menos 2 litros de agua al día para mantener tu cuerpo funcionando bien." },
    { titulo: "Haz ejercicio regularmente", texto: "30 minutos de actividad física diaria mejoran tu salud y ánimo." },
    { titulo: "Prefiere alimentos frescos", texto: "Reduce el consumo de ultraprocesados y elige opciones naturales." },
    { titulo: "Duerme bien", texto: "Un buen descanso fortalece tu sistema inmune y mejora la concentración." }
  ];

  let index = 0;
  const tituloEl = document.getElementById("consejo-titulo");
  const textoEl = document.getElementById("consejo-texto");

  if (tituloEl && textoEl) {
    setInterval(() => {
      index = (index + 1) % consejos.length;
      tituloEl.textContent = consejos[index].titulo;
      textoEl.textContent = consejos[index].texto;
    }, 5000);
  }
});

// Ofertas de la semana
function renderOfertas() {
  const idsOfertas = ["1", "2", "3", "4", "44", "76"];
  const ofertas = CATALOGO.filter((p) => idsOfertas.includes(p.id));

  const contenedor = document.getElementById("ofertas-semana");
  if (!contenedor) return;

  contenedor.innerHTML = ofertas
    .map(
      (p) => `
    <div class="col-md-4 col-sm-6">
      <div class="card h-100 text-center shadow-sm p-3">
        <img src="${p.img}" class="producto-img mx-auto d-block" alt="${p.name}" />
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">
            <span class="text-danger text-decoration-line-through">
              $${(p.precio * 1.2).toLocaleString("es-CL")}
            </span>
            <span class="text-success fw-bold ms-2">
              $${p.precio.toLocaleString("es-CL")}
            </span>
          </p>
          <div class="d-flex gap-2 justify-content-center">
            <button class="btn btn-success btn-sm btn-cart"
              data-id="${p.id}" data-name="${p.name}" data-precio="${p.precio}" data-img="${p.img}">
              <i class="bi bi-cart"></i> Añadir
            </button>
            <button class="btn btn-outline-danger btn-sm btn-fav"
              data-id="${p.id}" data-name="${p.name}" data-img="${p.img}">
              <i class="bi bi-heart"></i> Favorito
            </button>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContadores();
  renderCarrito();
  renderFavoritos();
  renderOfertas();
});

