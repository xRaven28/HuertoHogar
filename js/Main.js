// Recuperar carrito y favoritos desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Actualizar contadores (carrito y favoritos)
function actualizarContadores() {
  document.getElementById("carrito-count").textContent =
    carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  document.getElementById("favoritos-count").textContent = favoritos.length;
}

// Añadir productos al carrito o favoritos
document.addEventListener("click", (e) => {
  // 🛒 Añadir al carrito
  if (e.target.closest(".btn-cart")) {
    const btn = e.target.closest(".btn-cart");
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
    alert(`${name} añadido al carrito 🛒`);
  }

  // ❤️ Añadir a favoritos
  if (e.target.closest(".btn-fav")) {
    const btn = e.target.closest(".btn-fav");
    const id = btn.dataset.id;
    const name = btn.dataset.name;

    if (!favoritos.some((item) => item.id === id)) {
      favoritos.push({ id, name });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      actualizarContadores();
      alert(`${name} añadido a favoritos ❤️`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  }
});


document.addEventListener("DOMContentLoaded", actualizarContadores);

document.addEventListener("DOMContentLoaded", () => {
  const consejos = [
    {
      titulo: "Come 5 frutas y verduras al día",
      texto: "Te aportan vitaminas, minerales y fibra para una vida más saludable."
    },
    {
      titulo: "Mantente hidratado",
      texto: "Bebe al menos 2 litros de agua al día para mantener tu cuerpo funcionando bien."
    },
    {
      titulo: "Haz ejercicio regularmente",
      texto: "30 minutos de actividad física diaria mejoran tu salud y ánimo."
    },
    {
      titulo: "Prefiere alimentos frescos",
      texto: "Reduce el consumo de ultraprocesados y elige opciones naturales."
    },
    {
      titulo: "Duerme bien",
      texto: "Un buen descanso fortalece tu sistema inmune y mejora la concentración."
    }
  ];

  let index = 0;
  const tituloEl = document.getElementById("consejo-titulo");
  const textoEl = document.getElementById("consejo-texto");

  // Cambiar segundos
  setInterval(() => {
    index = (index + 1) % consejos.length;
    tituloEl.textContent = consejos[index].titulo;
    textoEl.textContent = consejos[index].texto;
  }, 5000);
});

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadores();
  renderCarrito(); 
}

// Renderizar carrito en la tabla
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

  document.getElementById("carrito-total").textContent =
    "$" + total.toLocaleString("es-CL");

  // Botones
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

// Mostrar formulario de pago
const btnPagar = document.getElementById("btn-pagar");
if (btnPagar) {
  btnPagar.addEventListener("click", () => {
    document.getElementById("form-pago").style.display = "block";
  });
}

// Mostrar dirección solo si elige domicilio
const entrega = document.getElementById("entrega");
if (entrega) {
  entrega.addEventListener("change", () => {
    document.getElementById("direccion-box").style.display =
      entrega.value === "domicilio" ? "block" : "none";
  });
}

// Confirmar compra
const checkout = document.getElementById("checkout-form");
if (checkout) {
  checkout.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ ¡Pedido confirmado! Gracias por tu compra.");
    carrito = [];
    guardarCarrito();
    document.getElementById("form-pago").style.display = "none";
    renderCarrito();
  });
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  actualizarContadores();
  renderCarrito();
});