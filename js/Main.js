// main.js (versión corregida y robusta)

// --- Datos iniciales normalizados desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// normaliza estructura de items (si vienen con nombres distintos)
carrito = carrito.map(p => ({
  id: String(p.id),
  name: p.name || p.nombre || "",
  precio: Number(p.precio || p.price || 0),
  img: p.img || p.image || "",
  cantidad: Number(p.cantidad || 1),
}));

favoritos = favoritos.map(p => ({
  id: String(p.id),
  name: p.name || p.nombre || "",
  img: p.img || p.image || "",
  precio: Number(p.precio || 0),
}));

// --- Toast
function mostrarToast(msg, color = "#28a745") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-msg";
    Object.assign(toast.style, {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      padding: "10px 14px",
      borderRadius: "8px",
      color: "#fff",
      zIndex: 9999,
      display: "none"
    });
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = color;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

// --- Contadores
function actualizarContadores() {
  const c = document.getElementById("carrito-count");
  const f = document.getElementById("favoritos-count");
  if (c) c.textContent = carrito.reduce((acc, p) => acc + (Number(p.cantidad) || 1), 0);
  if (f) f.textContent = favoritos.length;
}

// --- Guardar
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadores();
  renderCarrito();
}

// --- Render carrito
function renderCarrito() {
  const tabla = document.getElementById("carrito-tabla");
  if (!tabla) return;

  tabla.innerHTML = "";
  let total = 0;

  carrito.forEach((p, i) => {
    const cantidad = Number(p.cantidad || 1);
    const precio = Number(p.precio || 0);
    const subtotal = precio * cantidad;
    total += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${escapeHtml(p.name)}</td>
      <td style="width:120px;"><img src="${escapeAttr(p.img)}" alt="${escapeAttr(p.name)}" style="max-width:100px; max-height:60px; object-fit:contain;"></td>
      <td>
        <button class="btn btn-sm btn-outline-secondary menos" data-index="${i}">-</button>
        <span class="mx-2">${cantidad}</span>
        <button class="btn btn-sm btn-outline-secondary mas" data-index="${i}">+</button>
      </td>
      <td>$${precio.toLocaleString("es-CL")}</td>
      <td>$${subtotal.toLocaleString("es-CL")}</td>
      <td><button class="btn btn-danger btn-sm eliminar" data-index="${i}">X</button></td>
    `;
    tabla.appendChild(fila);
  });

  const totalEl = document.getElementById("carrito-total");
  if (totalEl) totalEl.textContent = "$" + total.toLocaleString("es-CL");

  // listeners (delegados en tabla)
  tabla.querySelectorAll(".menos").forEach((b) =>
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.index);
      if (!Number.isInteger(idx)) return;
      if (carrito[idx].cantidad > 1) carrito[idx].cantidad = Number(carrito[idx].cantidad) - 1;
      else carrito.splice(idx, 1);
      guardarCarrito();
    })
  );

  tabla.querySelectorAll(".mas").forEach((b) =>
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.index);
      if (!Number.isInteger(idx)) return;
      carrito[idx].cantidad = Number(carrito[idx].cantidad || 0) + 1;
      guardarCarrito();
    })
  );

  tabla.querySelectorAll(".eliminar").forEach((b) =>
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.index);
      if (!Number.isInteger(idx)) return;
      carrito.splice(idx, 1);
      guardarCarrito();
    })
  );
}

// --- Render favoritos
function renderFavoritos() {
  const cont = document.getElementById("favoritos-lista");
  if (!cont) return;

  cont.innerHTML = "";

  if (!Array.isArray(favoritos) || favoritos.length === 0) {
    cont.innerHTML = `<p class="text-center text-muted">No tienes productos en favoritos.</p>`;
    return;
  }

  favoritos.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm h-100 text-center">
        <img src="${escapeAttr(p.img || 'img/default.png')}" class="card-img-top producto-img" alt="${escapeAttr(p.name)}">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(p.name)}</h5>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-success btn-sm add-cart" data-id="${escapeAttr(p.id)}" data-name="${escapeAttr(p.name)}" data-precio="${Number(p.precio || 0)}" data-img="${escapeAttr(p.img)}">
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

  // eliminar favoritos (delegado en los botones creados)
  cont.querySelectorAll(".eliminar-fav").forEach((b) =>
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.index);
      if (!Number.isInteger(idx)) return;
      favoritos.splice(idx, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      renderFavoritos();
      mostrarToast("Producto eliminado de favoritos ❌", "#dc3545");
    })
  );
}

// --- Helpers para evitar inyección simple (texto/atributo)
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function escapeAttr(str = "") {
  return String(str).replaceAll('"', "&quot;");
}

// --- Delegación global para botones dinámicos
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".btn-cart, .add-cart");
  if (addBtn) {
    const id = String(addBtn.dataset.id || "");
    const name = addBtn.dataset.name || "Producto";
    const precio = Number(addBtn.dataset.precio || 0);
    const img = addBtn.dataset.img || "";

    const existing = carrito.find((p) => String(p.id) === id);
    if (existing) {
      existing.cantidad = Number(existing.cantidad || 1) + 1;
    } else {
      carrito.push({ id, name, precio, img, cantidad: 1 });
    }
    guardarCarrito();
    mostrarToast(`${name} añadido al carrito 🛒`);
    return;
  }

  const favBtn = e.target.closest(".btn-fav");
  if (favBtn) {
    const id = String(favBtn.dataset.id || "");
    const name = favBtn.dataset.name || "Producto";
    const img = favBtn.dataset.img || "";
    const precio = Number(favBtn.dataset.precio || 0);

    if (!favoritos.some((item) => String(item.id) === id)) {
      favoritos.push({ id, name, img, precio });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      mostrarToast(`${name} añadido a favoritos ❤️`);
    } else {
      mostrarToast(`${name} ya está en favoritos`, "#ffc107");
    }
    return;
  }
});

// --- UI que se registra solo una vez
function setupCheckoutUI() {
  const btnPagar = document.getElementById("btn-pagar");
  if (btnPagar) btnPagar.addEventListener("click", () => {
    const form = document.getElementById("form-pago");
    if (form) form.style.display = "block";
  });

  const entrega = document.getElementById("entrega");
  if (entrega) entrega.addEventListener("change", () => {
    const box = document.getElementById("direccion-box");
    if (box) box.style.display = entrega.value === "domicilio" ? "block" : "none";
  });

  const checkout = document.getElementById("checkout-form");
  if (checkout) checkout.addEventListener("submit", (ev) => {
    ev.preventDefault();
    mostrarToast("✅ ¡Pedido confirmado! Gracias por tu compra.");
    carrito = [];
    guardarCarrito();
    const form = document.getElementById("form-pago");
    if (form) form.style.display = "none";
    renderCarrito();
  });
}

function startConsejos() {
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
}

function renderOfertas() {
  if (typeof CATALOGO === "undefined") return;
  const idsOfertas = ["1", "2", "3", "4", "44", "76"];
  const ofertas = CATALOGO.filter((p) => idsOfertas.includes(String(p.id)));

  const contenedor = document.getElementById("ofertas-semana");
  if (!contenedor) return;

  contenedor.innerHTML = ofertas.map(p => `
    <div class="col-md-4 col-sm-6">
      <div class="card h-100 text-center shadow-sm p-3">
        <img src="${escapeAttr(p.img)}" class="producto-img mx-auto d-block" alt="${escapeAttr(p.name)}" />
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(p.name)}</h5>
          <p class="card-text">
            <span class="text-danger text-decoration-line-through">
              $${Number(p.precio * 1.2).toLocaleString("es-CL")}
            </span>
            <span class="text-success fw-bold ms-2">
              $${Number(p.precio).toLocaleString("es-CL")}
            </span>
          </p>
          <div class="d-flex gap-2 justify-content-center">
            <button class="btn btn-success btn-sm btn-cart" data-id="${escapeAttr(p.id)}" data-name="${escapeAttr(p.name)}" data-precio="${Number(p.precio)}" data-img="${escapeAttr(p.img)}">
              <i class="bi bi-cart"></i> Añadir
            </button>
            <button class="btn btn-outline-danger btn-sm btn-fav" data-id="${escapeAttr(p.id)}" data-name="${escapeAttr(p.name)}" data-precio="${Number(p.precio)}" data-img="${escapeAttr(p.img)}">
              <i class="bi bi-heart"></i> Favorito
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// --- Inicialización en DOMContentLoaded (solo una vez)
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadores();
  renderCarrito();
  renderFavoritos();
  renderOfertas();
  setupCheckoutUI();
  startConsejos();
});
