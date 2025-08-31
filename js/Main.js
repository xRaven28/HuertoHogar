let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function actualizarContadores() {
  document.getElementById("carrito-count").textContent = carrito.length;
  document.getElementById("favoritos-count").textContent = favoritos.length;
}

document.addEventListener("click", (e) => {
  // Añadir al carrito
  if (e.target.closest(".btn-cart")) {
    const btn = e.target.closest(".btn-cart");
    const id = btn.getAttribute("data-id");
    const name = btn.getAttribute("data-name");

    carrito.push({ id, name });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadores();
    alert(`${name} añadido al carrito 🛒`);
  }

  // Añadir a favoritos
  if (e.target.closest(".btn-fav")) {
    const btn = e.target.closest(".btn-fav");
    const id = btn.getAttribute("data-id");
    const name = btn.getAttribute("data-name");

    if (!favoritos.some(item => item.id === id)) {
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
