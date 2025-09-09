let productosAdmin = [
  { id: 1, nombre: "Manzanas", precio: 990, consejo: "Come frutas frescas", activo: true },
  { id: 2, nombre: "Lechuga", precio: 900, consejo: "Ideal para ensaladas", activo: true },
  { id: 3, nombre: "Miel", precio: 6900, consejo: "Endulzante natural", activo: false }
];

function renderAdminProductos() {
  const tbody = document.getElementById("admin-productos");
  tbody.innerHTML = "";
  productosAdmin.forEach((p) => {
    tbody.innerHTML += `
      <tr>
        <td>${p.nombre}</td>
        <td>$${p.precio}</td>
        <td>${p.consejo}</td>
        <td>${p.activo ? "Activo" : "Inhabilitado"}</td>
        <td>
          <button class="btn btn-warning btn-sm">✏️ Editar</button>
          <button class="btn btn-${p.activo ? "danger" : "success"} btn-sm">
            ${p.activo ? "Inhabilitar" : "Habilitar"}
          </button>
        </td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", renderAdminProductos);
