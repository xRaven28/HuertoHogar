
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let catalogo_local = JSON.parse(localStorage.getItem("catalogo")) || CATALOGO;

// Normalizar datos
carrito = carrito.map(p => ({
  id: String(p.id),
  name: p.name || p.nombre || "",
  precio: Number(p.precio || 0),
  img: p.img || "",
  cantidad: Number(p.cantidad || 1)
}));
favoritos = favoritos.map(p => ({
  id: String(p.id),
  name: p.name || "",
  precio: Number(p.precio || 0),
  img: p.img || ""
}));

// Usuarios y admin
const USUARIOS = JSON.parse(localStorage.getItem("usuariosAdmin")) || [
  { id: 1, nombre: "Juan Bernal", estado: "Activo", bloqueado: false, rol: "admin", password: "1234", historial: [] },
  { id: 2, nombre: "Yaii Selti", estado: "Activo", bloqueado: false, rol: "cliente", password: "1234", historial: [] },
  { id: 3, nombre: "Alejandro Sepulveda", estado: "Inactivo", bloqueado: false, rol: "cliente", password: "1234", historial: [] }
];
localStorage.setItem("usuariosAdmin", JSON.stringify(USUARIOS));

// Historial global
let historial;
try {
  historial = JSON.parse(localStorage.getItem("historialUsuarios")) || [];
} catch (e) {
  historial = [];
}


// FUNCIONES HELPERS
function escapeHtml(str = "") {
  return String(str).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function escapeAttr(str = "") {
  return String(str).replaceAll('"', "&quot;");
}
function mostrarToast(msg, color = "#51af13ff") {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = `
      position: fixed;
      right: 20px;
      bottom: 20px;
      padding: 10px 14px;
      border-radius: 8px;
      color: #fff;
      z-index: 9999;
      display: none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.background = color;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}


// CARRITO Y FAVORITOS
function actualizarContadores() {
  const c = document.getElementById("carrito-count");
  const f = document.getElementById("favoritos-count");
  if (c) c.textContent = carrito.reduce((acc, p) => acc + (Number(p.cantidad) || 1), 0);
  if (f) f.textContent = favoritos.length;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadores();
  renderCarrito();
}

function renderCarrito() {
  const tabla = document.getElementById("carrito-tabla");
  if (!tabla) return;
  tabla.innerHTML = "";
  let total = 0;
  carrito.forEach((p, i) => {
    const cantidad = Number(p.cantidad || 1);
    const precio = Number(p.precio || 0);
    const subtotal = cantidad * precio;
    total += subtotal;
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${escapeHtml(p.name)}</td>
      <td style="width:120px;"><img src="${escapeAttr(p.img)}" style="max-width:100px; max-height:60px; object-fit:contain;"></td>
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

  tabla.querySelectorAll(".menos").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.index);
    if (!Number.isInteger(i)) return;
    if (carrito[i].cantidad > 1) carrito[i].cantidad--; else carrito.splice(i, 1);
    guardarCarrito();
  }));
  tabla.querySelectorAll(".mas").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.index);
    if (!Number.isInteger(i)) return;
    carrito[i].cantidad++;
    guardarCarrito();
  }));
  tabla.querySelectorAll(".eliminar").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.index);
    if (!Number.isInteger(i)) return;
    carrito.splice(i, 1);
    guardarCarrito();
  }));
}

function renderFavoritos() {
  const cont = document.getElementById("favoritos-lista");
  if (!cont) return;
  cont.innerHTML = "";
  if (!favoritos.length) {
    cont.innerHTML = `<p class="text-center text-muted">No tienes productos en favoritos.</p>`;
    return;
  }
  favoritos.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card shadow-sm h-100 text-center">
        <img src="${escapeAttr(p.img || 'img/default.png')}" class="card-img-top producto-img">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(p.name)}</h5>
          <div class="d-flex gap-2 justify-content-center">
            <button class="btn btn-success btn-sm add-cart" data-id="${escapeAttr(p.id)}" data-name="${escapeAttr(p.name)}" data-precio="${Number(p.precio)}" data-img="${escapeAttr(p.img)}">
              <i class="bi bi-cart"></i> Añadir al carrito
            </button>
            <button class="btn btn-danger btn-sm eliminar-fav" data-index="${i}">
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    `;
    cont.appendChild(card);
  });

  cont.querySelectorAll(".eliminar-fav").forEach(b => b.addEventListener("click", () => {
    const i = Number(b.dataset.index);
    if (!Number.isInteger(i)) return;
    favoritos.splice(i, 1);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    actualizarContadores();
    renderFavoritos();
    mostrarToast("Producto eliminado de favoritos ❌", "#dc3545");
  }));

  cont.querySelectorAll(".add-cart").forEach(b => b.addEventListener("click", () => {
    const id = b.dataset.id;
    const name = b.dataset.name;
    const precio = Number(b.dataset.precio);
    const img = b.dataset.img;
    const existing = carrito.find(p => String(p.id) === id);
    if (existing) existing.cantidad++; else carrito.push({ id, name, precio, img, cantidad: 1 });
    guardarCarrito();
    mostrarToast(`${name} añadido al carrito 🛒`);
  }));
}

// LOGIN USUARIOS
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
  { correo: "usuario1@mail.com", password: "1234", nombre: "Usuario1" }
];
localStorage.setItem("usuarios", JSON.stringify(usuarios));

const formLogin = document.getElementById("form-login");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("password");
const inputRecordarme = document.getElementById("recordarme");
const divBienvenida = document.getElementById("bienvenida");
const spanNombre = document.getElementById("usuario-nombre");
const btnCerrar = document.getElementById("btn-cerrar-sesion");

window.addEventListener("load", () => {
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual")) || JSON.parse(sessionStorage.getItem("usuarioActual"));
  if (usuarioActual) mostrarBienvenida(usuarioActual);
});

function mostrarBienvenida(usuario) {
  formLogin?.classList.add("d-none");
  divBienvenida?.classList.remove("d-none");
  spanNombre.textContent = usuario.nombre;
}

btnCerrar?.addEventListener("click", () => {
  localStorage.removeItem("usuarioActual");
  sessionStorage.removeItem("usuarioActual");
  divBienvenida?.classList.add("d-none");
  formLogin?.classList.remove("d-none");
  inputCorreo.value = "";
  inputPassword.value = "";
  inputRecordarme.checked = false;
});

formLogin?.addEventListener("submit", function (e) {
  e.preventDefault();
  const correo = inputCorreo.value.trim();
  const password = inputPassword.value.trim();
  const usuario = usuarios.find(u => u.correo === correo && u.password === password);
  if (usuario) {
    if (inputRecordarme.checked) localStorage.setItem("usuarioActual", JSON.stringify(usuario));
    else sessionStorage.setItem("usuarioActual", JSON.stringify(usuario));
    mostrarBienvenida(usuario);
  } else alert("Correo o contraseña incorrectos");
});

// ADMIN CUENTAS
function guardarUsuarios() {
  localStorage.setItem("usuariosAdmin", JSON.stringify(USUARIOS));
}

function guardarHistorial(evento) {
  historial.push(`${new Date().toLocaleString()}: ${evento}`);
  localStorage.setItem("historialUsuarios", JSON.stringify(historial));
}

function renderCuentas() {
  const tbody = document.getElementById("admin-cuentas");
  if (!tbody) return;
  tbody.innerHTML = "";

  USUARIOS.forEach(usuario => {
    const tr = document.createElement("tr");

    // Nombre
    const tdNombre = document.createElement("td");
    tdNombre.textContent = usuario.nombre;
    tr.appendChild(tdNombre);

    // RUT
    const tdRut = document.createElement("td");
    tdRut.textContent = usuario.rut || "-";
    tr.appendChild(tdRut);

    // Rol
    const tdRol = document.createElement("td");
    tdRol.textContent = usuario.rol;
    tr.appendChild(tdRol);

    // Estado
    const tdEstado = document.createElement("td");
    tdEstado.textContent = usuario.bloqueado ? "Bloqueado" : usuario.estado;
    tr.appendChild(tdEstado);

    // Acciones
    const tdAcciones = document.createElement("td");

    const btnRol = document.createElement("button");
    btnRol.className = "btn btn-info btn-sm me-1";
    btnRol.textContent = "Cambiar Rol";
    btnRol.onclick = () => cambiarRol(usuario.id);
    tdAcciones.appendChild(btnRol);

    const btnEstado = document.createElement("button");
    btnEstado.className = "btn btn-warning btn-sm me-1";
    btnEstado.textContent = usuario.estado === "Activo" ? "Inhabilitar" : "Habilitar";
    btnEstado.onclick = () => toggleEstado(usuario.id);
    tdAcciones.appendChild(btnEstado);

    const btnBloqueo = document.createElement("button");
    btnBloqueo.className = "btn btn-danger btn-sm";
    btnBloqueo.textContent = usuario.bloqueado ? "Desbloquear" : "Bloquear";
    btnBloqueo.onclick = () => toggleBloqueo(usuario.id);
    tdAcciones.appendChild(btnBloqueo);

    tr.appendChild(tdAcciones);
    tbody.appendChild(tr);
  });
}
// Abrir modal
function abrirModalCrearUsuario() {
  const modal = new bootstrap.Modal(document.getElementById("modalCrearUsuario"));
  modal.show();
}

// Guardar usuario desde el formulario
document.getElementById("formCrearUsuario")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nuevo-nombre").value.trim();
  const rut = document.getElementById("nuevo-rut").value.trim();
  const correo = document.getElementById("nuevo-correo").value.trim();
  const password = document.getElementById("nuevo-password").value.trim();

  if (!nombre || !rut || !correo || !password) return mostrarToast("Todos los campos son obligatorios", "#dc3545");

  const nuevo = {
    id: USUARIOS.length ? Math.max(...USUARIOS.map(u => u.id)) + 1 : 1,
    nombre,
    rut,
    correo,
    password,
    rol: "cliente",
    estado: "Activo",
    bloqueado: false,
    historial: [`Usuario creado (${new Date().toLocaleString()})`]
  };


  USUARIOS.push(nuevo);
  guardarUsuarios();
  renderCuentas();
  guardarHistorial(`Se creó el usuario ${nombre} (${correo})`);
  mostrarToast(`Usuario ${nombre} creado ✅`);


  this.reset();
  bootstrap.Modal.getInstance(document.getElementById("modalCrearUsuario")).hide();
});

function cambiarRol(id) {
  const usuario = USUARIOS.find(u => u.id === id);
  if (!usuario) return;
  usuario.rol = usuario.rol === "cliente" ? "Administrador" : "cliente";
  usuario.historial.push(`Rol cambiado a ${usuario.rol} (${new Date().toLocaleString()})`);
  guardarUsuarios();
  renderCuentas();
  guardarHistorial(`Se cambió el rol de ${usuario.nombre} a ${usuario.rol}`);
  mostrarToast(`Rol de ${usuario.nombre} cambiado a ${usuario.rol}`);
}

function toggleEstado(id) {
  const usuario = USUARIOS.find(u => u.id === id);
  if (!usuario) return;
  if (!usuario.bloqueado) {
    usuario.estado = usuario.estado === "Activo" ? "Inactivo" : "Activo";
    guardarUsuarios();
    renderCuentas();
    guardarHistorial(`Usuario ${usuario.nombre} ahora está ${usuario.estado}`);
    mostrarToast(`Usuario ${usuario.nombre} ahora está ${usuario.estado}`);
  } else mostrarToast(`Usuario ${usuario.nombre} está bloqueado`, "#dc3545");
}

function toggleBloqueo(id) {
  const usuario = USUARIOS.find(u => u.id === id);
  if (!usuario) return;
  usuario.bloqueado = !usuario.bloqueado;
  guardarUsuarios();
  renderCuentas();
  guardarHistorial(`Usuario ${usuario.nombre} ${usuario.bloqueado ? "bloqueado" : "desbloqueado"}`);
  mostrarToast(`Usuario ${usuario.nombre} ${usuario.bloqueado ? "bloqueado" : "desbloqueado"}`);
}

function mostrarHistorial() {
  const cont = document.getElementById("historial-lista");
  if (!cont) return;
  if (!historial.length) cont.innerHTML = "<p>No hay acciones registradas.</p>";
  else cont.innerHTML = "<ul>" + historial.map(e => `<li>${e}</li>`).join("") + "</ul>";
  const modal = new bootstrap.Modal(document.getElementById("modalHistorial"));
  modal.show();
}

// PRODUCTOS / BUSCADOR / OFERTAS
function abrirDetalleProducto(producto) {
  const modal = new bootstrap.Modal(document.getElementById("modalDetalle"));
  document.getElementById("detalle-nombre").textContent = producto.name;
  document.getElementById("detalle-img").src = producto.img;
  document.getElementById("detalle-desc").textContent = producto.desc || producto.descripcion || "Sin descripción.";
  document.getElementById("detalle-precio").textContent = "$" + Number(producto.precio).toLocaleString("es-CL");
  document.getElementById("detalle-precio-original").textContent = producto.oferta ? "$" + Number(producto.precio * 1.2).toLocaleString("es-CL") : "";
  document.getElementById("detalle-cantidad").value = 1;

  document.getElementById("detalle-mas").onclick = () => document.getElementById("detalle-cantidad").value++;
  document.getElementById("detalle-menos").onclick = () => {
    let val = Number(document.getElementById("detalle-cantidad").value);
    if (val > 1) document.getElementById("detalle-cantidad").value = val - 1;
  };

  document.getElementById("detalle-addcart").onclick = () => {
    const cantidad = Number(document.getElementById("detalle-cantidad").value);
    const existing = carrito.find(p => String(p.id) === String(producto.id));
    if (existing) existing.cantidad += cantidad;
    else carrito.push({ id: producto.id, name: producto.name, precio: producto.precio, img: producto.img, cantidad });
    guardarCarrito();
    mostrarToast(`${producto.name} añadido al carrito 🛒`);
    modal.hide();
  };

  document.getElementById("detalle-fav").onclick = () => {
    if (!favoritos.some(p => String(p.id) === String(producto.id))) {
      favoritos.push({ id: producto.id, name: producto.name, img: producto.img, precio: producto.precio });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      mostrarToast(`${producto.name} añadido a favoritos ❤️`);
    } else mostrarToast(`${producto.name} ya está en favoritos`, "#ffc107");
    modal.hide();
  };

  modal.show();
}
//FILTRO
function filtrarYOrdenarProductos(termino = "") {
  const contenedor = document.getElementById("productos-lista");
  if (!contenedor) return;


  let productos = catalogo_local.filter(p => p.habilitado);

  const categoria = document.getElementById("categoria")?.value || "todos";
  if (categoria !== "todos") {
    productos = productos.filter(p => p.categoria === categoria);
  }

  if (termino) {
    productos = productos.filter(p =>
      p.name.toLowerCase().includes(termino) ||
      (p.categoria?.toLowerCase() || "").includes(termino)
    );
  }

  const orden = document.getElementById("orden")?.value || "relevancia";
  if (orden === "precio-asc") productos.sort((a, b) => a.precio - b.precio);
  else if (orden === "precio-desc") productos.sort((a, b) => b.precio - a.precio);
  else if (orden === "nombre-asc") productos.sort((a, b) => a.name.localeCompare(b.name));
  else if (orden === "nombre-desc") productos.sort((a, b) => b.name.localeCompare(a.name));

  contenedor.innerHTML = productos.map(p => `
    <div class="col-md-4 col-sm-6">
      <div class="card h-100 shadow-sm p-3 text-center">
        <img src="${p.img}" class="producto-img mx-auto d-block">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">$${p.precio.toLocaleString("es-CL")}</p>
          <button class="btn btn-primary btn-sm btn-ver-detalle" data-id="${p.id}">Ver Detalle</button>
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".btn-ver-detalle").forEach(b => {
    b.addEventListener("click", () => {
      const id = b.dataset.id;
      const producto = catalogo_local.find(p => String(p.id) === id);
      if (producto) abrirDetalleProducto(producto);
    });
  });
}
document.getElementById("categoria")?.addEventListener("change", () => {
  filtrarYOrdenarProductos(document.getElementById("buscar-input")?.value.trim().toLowerCase());
});
document.getElementById("orden")?.addEventListener("change", () => {
  filtrarYOrdenarProductos(document.getElementById("buscar-input")?.value.trim().toLowerCase());
});
document.getElementById("buscar-input")?.addEventListener("input", () => {
  filtrarYOrdenarProductos(document.getElementById("buscar-input").value.trim().toLowerCase());
});


function renderOfertas() {
  const contenedor = document.getElementById("ofertas-semana");
  if (!contenedor) return;
  const idsOfertas = ["1", "2", "3", "4", "44", "76"];
  const ofertas = catalogo_local.filter(p => idsOfertas.includes(String(p.id)) && p.habilitado);

  contenedor.innerHTML = ofertas.map(p => `
    <div class="col-md-4 col-sm-6">
      <div class="card h-100 text-center shadow-sm p-3">
        <img src="${escapeAttr(p.img)}" class="producto-img mx-auto d-block">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(p.name)}</h5>
          <p class="card-text">
            <span class="text-decoration-line-through text-danger">$${(p.precio * 1.2).toLocaleString("es-CL")}</span>
            <span class="fw-bold">$${p.precio.toLocaleString("es-CL")}</span>
          </p>
          <button class="btn btn-primary btn-sm btn-ver-detalle" data-id="${p.id}">Ver Detalle</button>
        </div>
      </div>
    </div>
  `).join("");
}

// BUSCADOR
const inputBuscar = document.getElementById("buscar-input");
const btnBuscar = document.getElementById("btn-buscar");

btnBuscar?.addEventListener("click", () => {
  const termino = inputBuscar.value.trim().toLowerCase();
  if (!termino) return;
  window.location.href = `Productos.html?buscar=${encodeURIComponent(termino)}`;
});

if (window.location.pathname.includes("Productos.html")) {
  const params = new URLSearchParams(window.location.search);
  const terminoBusqueda = params.get("buscar");
  filtrarYOrdenarProductos(terminoBusqueda?.toLowerCase() || "");
}

inputBuscar?.addEventListener("input", () => filtrarYOrdenarProductos(inputBuscar.value.trim().toLowerCase()));

// INICIALIZAR
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadores();
  renderCarrito();
  renderFavoritos();
  filtrarYOrdenarProductos();
  renderOfertas();
  renderCuentas();
});
