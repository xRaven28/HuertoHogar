// Asegurarse de cargar el catálogo desde localStorage o usar el predeterminado
let CATALOGO_ADMIN = JSON.parse(localStorage.getItem("CATALOGO")) || [];

// Render tabla productos en admin
function renderAdminProductos() {
  const tbody = document.getElementById("admin-productos");
  if (!tbody) return;

  tbody.innerHTML = "";

  CATALOGO_ADMIN.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>$${Number(p.precio).toLocaleString("es-CL")}</td>
      <td>${p.desc}</td>
      <td>${p.habilitado ? "Habilitado" : "Inhabilitado"}</td>
      <td>
        <button class="btn btn-primary btn-sm me-1" onclick="abrirEditar(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Filtrar productos por nombre
function filtrarProductos() {
  const query = document.getElementById("buscar-producto").value.toLowerCase();
  const tbody = document.getElementById("admin-productos");
  if (!tbody) return;

  tbody.innerHTML = "";
  CATALOGO_ADMIN.forEach((p, index) => {
    if (p.name.toLowerCase().includes(query)) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${p.name}</td>
        <td>$${Number(p.precio).toLocaleString("es-CL")}</td>
        <td>${p.desc}</td>
        <td>${p.habilitado ? "Habilitado" : "Inhabilitado"}</td>
        <td>
          <button class="btn btn-primary btn-sm me-1" onclick="abrirEditar(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });
}

// Abrir modal agregar
function abrirAgregar() {
  const modal = new bootstrap.Modal(document.getElementById("modalAgregar"));
  document.getElementById("agregar-nombre").value = "";
  document.getElementById("agregar-precio").value = "";
  document.getElementById("agregar-descripcion").value = "";
  document.getElementById("agregar-habilitado").checked = true;
  modal.show();
}

// Guardar nuevo producto
function guardarNuevoProducto() {
  const name = document.getElementById("agregar-nombre").value.trim();
  const precio = Number(document.getElementById("agregar-precio").value);
  const desc = document.getElementById("agregar-descripcion").value.trim();
  const habilitado = document.getElementById("agregar-habilitado").checked;

  if (!name || isNaN(precio)) {
    alert("Nombre y precio son obligatorios");
    return;
  }

  const nuevoProducto = {
    id: Date.now().toString(),
    name,
    precio,
    desc,
    habilitado,
    img: "img/default.png"
  };

  CATALOGO_ADMIN.push(nuevoProducto);
  localStorage.setItem("CATALOGO", JSON.stringify(CATALOGO_ADMIN));
  renderAdminProductos();

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgregar"));
  modal.hide();
}

// Abrir modal editar producto
function abrirEditar(index) {
  const producto = CATALOGO_ADMIN[index];
  if (!producto) return;

  document.getElementById("editar-id").value = index;
  document.getElementById("editar-nombre").value = producto.name;
  document.getElementById("editar-precio").value = producto.precio;
  document.getElementById("editar-descripcion").value = producto.desc;

  const modal = new bootstrap.Modal(document.getElementById("modalEditar"));
  modal.show();
}

// Guardar edición
function guardarEdicion() {
  const index = Number(document.getElementById("editar-id").value);
  const producto = CATALOGO_ADMIN[index];
  if (!producto) return;

  const name = document.getElementById("editar-nombre").value.trim();
  const precio = Number(document.getElementById("editar-precio").value);
  const desc = document.getElementById("editar-descripcion").value.trim();

  if (!name || isNaN(precio)) {
    alert("Nombre y precio son obligatorios");
    return;
  }

  producto.name = name;
  producto.precio = precio;
  producto.desc = desc;

  localStorage.setItem("CATALOGO", JSON.stringify(CATALOGO_ADMIN));
  renderAdminProductos();

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalEditar"));
  modal.hide();
}

// Eliminar producto
function eliminarProducto(index) {
  if (confirm("¿Eliminar producto?")) {
    CATALOGO_ADMIN.splice(index, 1);
    localStorage.setItem("CATALOGO", JSON.stringify(CATALOGO_ADMIN));
    renderAdminProductos();
  }
}

// Consejo del día
const textareaConsejo = document.querySelector("#panel-huerto textarea");
const btnGuardarConsejo = document.querySelector("#panel-huerto button.btn-primary");

if (btnGuardarConsejo && textareaConsejo) {
  btnGuardarConsejo.addEventListener("click", () => {
    const texto = textareaConsejo.value.trim();
    if (!texto) {
      alert("Escribe un consejo válido");
      return;
    }
    localStorage.setItem("consejo-del-dia", texto);
    alert("Consejo guardado ✅");
  });
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  renderAdminProductos();
});
