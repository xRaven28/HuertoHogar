const CATALOGO = [
  // FRUTAS
  { id: "1", name: "Manzanas Rojas", precio: 990, categoria: "frutas", img: "img/Manzana/Manzana_1.png", desc: "Manzanas frescas, crocantes y dulces.", habilitado: true },
  { id: "2", name: "Naranjas", precio: 1500, categoria: "frutas", img: "img/Naranja/Naranja_1.png", desc: "Naranjas jugosas llenas de vitamina C.", habilitado: true },
  { id: "3", name: "Frutillas", precio: 1990, categoria: "frutas", img: "img/frutilla/Frutilla_4.png", desc: "Frutillas dulces, ideales para postres.", habilitado: true },
  { id: "4", name: "Cerezas", precio: 2990, categoria: "frutas", img: "img/Cereza/Cereza_2.png", desc: "Cerezas de temporada, muy sabrosas.", habilitado: true },
  { id: "5", name: "Plátanos", precio: 1200, categoria: "frutas", img: "img/plátano/Platano_3.png", desc: "Plátanos maduros, energéticos.", habilitado: true },
  { id: "6", name: "Peras", precio: 1100, categoria: "frutas", img: "img/pera/Pera_2.png", desc: "Peras frescas, textura suave.", habilitado: true },
  { id: "7", name: "Sandías", precio: 3500, categoria: "frutas", img: "img/sandía/Sandía_1.png", desc: "Sandía fresca, ideal para verano.", habilitado: true },
  { id: "8", name: "Melón Tuna", precio: 3200, categoria: "frutas", img: "img/melónTuna/MelónTuna_1.png", desc: "Melón dulce y refrescante.", habilitado: true },
  { id: "9", name: "Duraznos", precio: 2500, categoria: "frutas", img: "img/durazno/Durazno_1.png", desc: "Duraznos jugosos de temporada.", habilitado: true },
  { id: "10", name: "Kiwis", precio: 1700, categoria: "frutas", img: "img/kiwi/Kiwi_3.png", desc: "Kiwi lleno de vitamina C.", habilitado: true },
  { id: "11", name: "Damascos", precio: 2990, categoria: "frutas", img: "img/damasco/damasco_3.png", desc: "Damascos jugosos y dulces, ideales para postres o mermeladas.", habilitado: true },
  { id: "12", name: "Frambuesas", precio: 3500, categoria: "frutas", img: "img/frambuesa/Frambuesa_3.png", desc: "Frambuesas frescas, pequeñas y llenas de sabor intenso.", habilitado: true },
  { id: "13", name: "Granada", precio: 1990, categoria: "frutas", img: "img/granada/Granada_1.png", desc: "Granadas con granos rojos brillantes y antioxidantes naturales.", habilitado: true },
  { id: "14", name: "Mandarinas", precio: 1890, categoria: "frutas", img: "img/mandarina/Mandarina_4.png", desc: "Mandarinas dulces y fáciles de pelar, perfectas como snack.", habilitado: true },
  { id: "15", name: "Melón Calameño", precio: 3490, categoria: "frutas", img: "img/melónCalameño/MelónCalameño_1.png", desc: "Melón calameño, muy dulce y refrescante en días de calor.", habilitado: true },
  { id: "16", name: "Membrillo", precio: 2790, categoria: "frutas", img: "img/membrillo/Membrillo_1.png", desc: "Membrillo aromático, ideal para preparar dulces y compotas.", habilitado: true },
  { id: "17", name: "Pepinos Dulces", precio: 2990, categoria: "frutas", img: "img/pepinoDulce/PepinoDulce_1.png", desc: "Pepinos dulces, refrescantes y suaves, perfectos para ensaladas.", habilitado: true },
  { id: "18", name: "Uvas", precio: 2980, categoria: "frutas", img: "img/uva/Uva_4.png", desc: "Uvas frescas y jugosas, excelentes para comer al natural o en postres.", habilitado: true },
  { id: "19", name: "Higos", precio: 3500, categoria: "frutas", img: "img/higo/Higo_1.avif", desc: "Higos frescos, dulces y jugosos, ideales para postres o mermeladas.", habilitado: true },
  { id: "20", name: "Arándanos", precio: 4200, categoria: "frutas", img: "img/arándano/Arándano_1.avif", desc: "Arándanos pequeños, azules y llenos de antioxidantes.", habilitado: true },
  { id: "21", name: "Piña", precio: 2800, categoria: "frutas", img: "img/piña/piña_1.png", desc: "Piña tropical, jugosa y refrescante, perfecta para jugos y postres.", habilitado: true },
  { id: "22", name: "Limón", precio: 1500, categoria: "frutas", img: "img/limón/Limón_1.avif", desc: "Limones frescos, llenos de jugo ácido y vitamina C.", habilitado: true },
  { id: "23", name: "Castañas", precio: 7600, categoria: "frutas", img: "img/castaña/Castaña_1.jpg", desc: "Castañas frescas, ideales para asar o preparar purés.", habilitado: true },
  { id: "24", name: "Caqui", precio: 2990, categoria: "frutas", img: "img/caqui/Caqui_2.webp", desc: "Caquis dulces y jugosos, ideales para mermeladas y postres.", habilitado: true },
  { id: "25", name: "Chirimoya", precio: 3800, categoria: "frutas", img: "img/chirimoya/Chirimoya_1.jpg", desc: "Chirimoya cremosa y muy dulce, conocida como la 'fruta de la paz'.", habilitado: true },
  { id: "26", name: "Tuna", precio: 2200, categoria: "frutas", img: "img/tuna/Tuna_2.jpg", desc: "Tunas frescas, dulces y refrescantes, típicas de temporada.", habilitado: true },
  { id: "27", name: "Nueces", precio: 8500, categoria: "frutas", img: "img/nuez/Nuez_1.jpg", desc: "Nueces frescas con alto contenido de omega-3 y energía.", habilitado: true },
  { id: "28", name: "Almendras", precio: 8900, categoria: "frutas", img: "img/almendra/Almendra_1.jpg", desc: "Almendras naturales, crocantes y llenas de nutrientes.", habilitado: true },
  { id: "29", name: "Pomelo", precio: 2300, categoria: "frutas", img: "img/pomelo/Pomelo_1.webp", desc: "Pomelos jugosos y ácidos, ricos en vitamina C.", habilitado: true },
  { id: "30", name: "Alcayota", precio: 2500, categoria: "frutas", img: "img/alcayota/Alcayota_1.webp", desc: "Alcayota fresca, especial para preparar dulces y mermeladas.", habilitado: true },
  // VERDURAS
  { id: "31", name: "Lechuga", precio: 900, categoria: "verduras", img: "img/lechuga/Lechuga_2.webp", desc: "Fresca y crujiente, ideal para ensaladas.", habilitado: true },
  { id: "32", name: "Repollo Blanco", precio: 1000, categoria: "verduras", img: "img/repolloblanco.png", desc: "Repollo blanco, crocante y versátil en ensaladas o guisos.", habilitado: true },
  { id: "33", name: "Repollo Morado", precio: 1100, categoria: "verduras", img: "img/repollomorado.png", desc: "Repollo morado, de color intenso y sabor fresco.", habilitado: true },
  { id: "34", name: "Cebolla", precio: 700, categoria: "verduras", img: "img/cebolla/Cebolla_2.png", desc: "Cebolla fresca, ideal para todo tipo de platos.", habilitado: true },
  { id: "35", name: "Espinaca", precio: 1200, categoria: "verduras", img: "img/espinaca/Espinaca_1.jpg", desc: "Hojas verdes tiernas, ricas en hierro y vitaminas.", habilitado: true },
  { id: "36", name: "Calabaza", precio: 1600, categoria: "verduras", img: "img/calabaza/Calabaza-1.png", desc: "Pulpa dulce y cremosa, perfecta para sopas y cremas.", habilitado: true },
  { id: "37", name: "Palta Hass", precio: 1600, categoria: "verduras", img: "img/palta/PaltaHass_4.png", desc: "Textura cremosa y sabor suave, ideal para ensaladas y tostadas.", habilitado: true },
  { id: "38", name: "Papas", precio: 1200, categoria: "verduras", img: "img/papa/papa_3.png", desc: "Versátiles y rendidoras, perfectas para puré, fritas o al horno.", habilitado: true },
  { id: "39", name: "Tomates", precio: 1300, categoria: "verduras", img: "img/tomate/Tomate_1.png", desc: "Jugosos y sabrosos, dan color y frescura a tus comidas.", habilitado: true },
  { id: "40", name: "Pepino", precio: 900, categoria: "verduras", img: "img/pepino/Pepino_1.png", desc: "Crujiente y refrescante, ideal para ensaladas y aguas saborizadas.", habilitado: true },
  { id: "41", name: "Pimiento", precio: 1400, categoria: "verduras", img: "img/pimiento/Pimenton_1.png", desc: "Dulce y aromático, aporta color y sabor a salteados y ensaladas.", habilitado: true },
  { id: "42", name: "Tomates Cherry", precio: 1600, categoria: "verduras", img: "img/tomateCherry/tomatecherry_1.png", desc: "Pequeños y dulces, perfectos para snack o ensaladas.", habilitado: true },
  { id: "43", name: "Zanahoria", precio: 900, categoria: "verduras", img: "img/zanahoria/Zanahoria_1.png", desc: "Crujiente y naturalmente dulce, rica en betacarotenos.", habilitado: true },
  { id: "44", name: "Zapallo Camote", precio: 1700, categoria: "verduras", img: "img/Zapallo camote/Zapallo_2.png", desc: "Sabor dulce y textura suave, ideal para cremas y hornos.", habilitado: true },
  { id: "45", name: "Zapallo Italiano", precio: 1200, categoria: "verduras", img: "img/Zapallo Italiano/Zapallo_italiano_2.png", desc: "Suave y versátil, perfecto para salteados, rellenos y pastas.", habilitado: true },
  { id: "46", name: "Brócoli", precio: 1690, categoria: "verduras", img: "img/brocoli/Brocoli_1.png", desc: "Brócoli fresco y lleno de nutrientes, ideal para ensaladas, sopas y al vapor.", habilitado: true },
  { id: "47", name: "Coliflor", precio: 1800, categoria: "verduras", img: "img/coliflor/Coliflor_2.avif", desc: "Coliflor fresca, ideal para gratinados, sopas y ensaladas.", habilitado: true },
  { id: "48", name: "Ajo", precio: 1200, categoria: "verduras", img: "img/ajo/Ajo_1.jpeg", desc: "Ajo aromático, infaltable en la cocina chilena.", habilitado: true },
  { id: "49", name: "Betarraga", precio: 1600, categoria: "verduras", img: "img/beterraga/Beterraga_2.webp", desc: "Betarraga dulce y nutritiva, rica en antioxidantes.", habilitado: true },
  { id: "50", name: "Choclo", precio: 1800, categoria: "verduras", img: "img/choclo/Choclo_2.jpg", desc: "Choclo fresco, amarillo y jugoso, perfecto para humitas y pastel de choclo.", habilitado: true },
  { id: "51", name: "Cebollín", precio: 1200, categoria: "verduras", img: "img/cebollín/Cebollín_1.png", desc: "Cebollín fresco, ideal para ensaladas y guisos.", habilitado: true },
  { id: "52", name: "Cebolla Morada", precio: 1400, categoria: "verduras", img: "img/cebolla morada/CebollaMorada_1.jpg", desc: "Cebolla morada, de sabor suave y dulce, perfecta para ensaladas.", habilitado: true },
  { id: "53", name: "Berenjena", precio: 2000, categoria: "verduras", img: "img/berenjena.png", desc: "Berenjena morada, ideal para asar, freír o rellenar.", habilitado: true },
  { id: "54", name: "Ají", precio: 1500, categoria: "verduras", img: "img/ají/Ají_1.avif", desc: "Ají fresco, aporta picor y sabor intenso a las comidas.", habilitado: true },
  { id: "55", name: "Rabanito", precio: 1000, categoria: "verduras", img: "img/rabanito/Rabanito_1.avif", desc: "Rabanitos frescos, crujientes y de sabor ligeramente picante.", habilitado: true },
  { id: "56", name: "Alcachofa", precio: 2800, categoria: "verduras", img: "img/alcachofa/Alcachofa_1.webp", desc: "Alcachofas tiernas, ricas en fibra y antioxidantes.", habilitado: true },
  { id: "57", name: "Espárragos", precio: 3500, categoria: "verduras", img: "img/espárrago/Espárrago_1.jpg", desc: "Espárragos frescos, tiernos y sabrosos.", habilitado: true },
  { id: "58", name: "Cilantro", precio: 800, categoria: "verduras", img: "img/cilantro/Cilantro_2.webp", desc: "Cilantro fresco, aromático e indispensable en la cocina chilena.", habilitado: true },
  { id: "59", name: "Perejil", precio: 700, categoria: "verduras", img: "img/perejil/Perejil_1.webp", desc: "Perejil fresco, perfecto para salsas, guisos y ensaladas.", habilitado: true },
  { id: "60", name: "Apio", precio: 1100, categoria: "verduras", img: "img/apio.png", desc: "Crujiente y refrescante, ideal para ensaladas y sopas.", habilitado: true },

  //LEGUMBRES & CEREALES 
  { id: "61", name: "Arvejas", precio: 2200, categoria: "Legumbres-Cereales", img: "img/arveja/Arveja_1.jpg", desc: "Arvejas verdes, tiernas y llenas de proteína vegetal.", habilitado: true },
  { id: "62", name: "Garbanzos", precio: 2300, categoria: "Legumbres-Cereales", img: "img/garbanzo/Garbanzo_3.png", desc: "Garbanzos ideales para ensaladas, guisos y hummus.", habilitado: true },
  { id: "63", name: "Habas", precio: 2000, categoria: "Legumbres-Cereales", img: "img/haba/Habas_3.png", desc: "Habas frescas y tradicionales en la cocina chilena.", habilitado: true },
  { id: "64", name: "Lentejas", precio: 2100, categoria: "Legumbres-Cereales", img: "img/lenteja/Lentejas_3.png", desc: "Lentejas nutritivas y llenas de fibra, perfectas para guisos.", habilitado: true },
  { id: "65", name: "Avena", precio: 2500, categoria: "Legumbres-Cereales", img: "img/avena/Avena_2.png", desc: "Avena natural, ideal para desayunos saludables.", habilitado: true },
  { id: "66", name: "Linaza", precio: 2800, categoria: "Legumbres-Cereales", img: "img/linaza/Linaza_1.png", desc: "Semillas de linaza, ricas en fibra y omega-3.", habilitado: true },
  { id: "67", name: "Arroz", precio: 1900, categoria: "Legumbres-Cereales", img: "img/Arroz/Arroz_1.png", desc: "Arroz blanco de grano largo, versátil en la cocina.", habilitado: true },

  // LÁCTEOS
  { id: "68", name: "Leche Entera", precio: 1500, categoria: "Lacteos", img: "img/Leche/Leche_3.png", desc: "Leche entera fresca, rica en calcio.", habilitado: true },
  { id: "69", name: "Mantequilla", precio: 2900, categoria: "Lacteos", img: "img/mantequilla/Mantequilla_2.avif", desc: "Mantequilla cremosa, perfecta para untar o cocinar.", habilitado: true },
  { id: "70", name: "Queso Chanco", precio: 8900, categoria: "Lacteos", img: "img/quesochanco.png", desc: "Queso chanco tradicional, semimaduro y sabroso.", habilitado: true },
  { id: "71", name: "Queso Mantecoso", precio: 9500, categoria: "Lacteos", img: "img/queso mantecoso/QuesoMantecoso_1.webp", desc: "Queso mantecoso, suave y fundente, ideal para sándwiches.", habilitado: true },
  { id: "72", name: "Queso de Cabra", precio: 10500, categoria: "Lacteos", img: "img/queso cabra/QuesoCabra_1.png", desc: "Queso de cabra artesanal, de sabor intenso y textura cremosa, ideal para ensaladas y tablas.", habilitado: true },
  { id: "73", name: "Yogurt", precio: 450, categoria: "Lacteos", img: "img/yogurt/Yogurt_3.jpg", desc: "Yogurt natural, fresco y nutritivo.", habilitado: true },
  { id: "74", name: "Manjar", precio: 3990, categoria: "Lacteos", img: "img/manjar/Manjar_1.png", desc: "Manjar casero cremoso y suave, elaborado lentamente con leche fresca y azúcar.", habilitado: true },

  // OTROS
  { id: "75", name: "Huevos", precio: 3800, categoria: "otros", img: "img/huevo/Huevos.png", desc: "Huevos de gallina frescos, ideales para desayunos y repostería.", habilitado: true },
  { id: "76", name: "Miel Multifloral", precio: 6900, categoria: "otros", img: "img/Miel multifloral/Miel_multi_2.jpg", desc: "Miel natural 100% pura y artesanal.", habilitado: true },
  { id: "77", name: "Mermelada de Mora", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_mora_1.png", desc: "Mermelada casera de mora, preparada de forma artesanal.", habilitado: true },
  { id: "78", name: "Mermelada de Frutilla", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_frutilla_1.png", desc: "Tradicional mermelada de frutilla casera, dulce y natural.", habilitado: true },
  { id: "79", name: "Mermelada de Durazno", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_durazno_!.png", desc: "Mermelada casera de durazno, hecha con fruta fresca de temporada.", habilitado: true },
  { id: "80", name: "Mermelada de Higo", precio: 2800, categoria: "otros", img: "img/mermelada higo/MermeladaHigo_1.webp", desc: "Mermelada casera de higo, dulce e intensa.", habilitado: true },
  { id: "81", name: "Mermelada de Alcayota", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_alca_1.png", desc: "Tradicional mermelada de alcayota, típica de la cocina chilena.", habilitado: true },
  { id: "82", name: "Mermelada de Frambuesa", precio: 2800, categoria: "otros", img: "img/mermelada frambuesa/MermeladaFrambuesa_1.webp", desc: "Mermelada de frambuesa fresca, intensa y natural.", habilitado: true },
  { id: "83", name: "Mermelada de Arándano", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_arandano_1.png", desc: "Mermelada artesanal de arándano, llena de sabor.", habilitado: true },
];
window.CATALOGO_LOCAL = JSON.parse(localStorage.getItem("CATALOGO")) || CATALOGO;

function guardarCatalogo() {
  localStorage.setItem("CATALOGO", JSON.stringify(window.CATALOGO_LOCAL));
}

// Render productos cliente
function renderProductosCliente() {
  const contenedor = document.getElementById("productos-lista");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  const filtrados = window.CATALOGO_LOCAL.filter(p => p.habilitado).sort((a, b) => a.id - b.id);

  filtrados.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-xl-3 col-lg-4 col-md-6";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.img}" class="card-img-top producto-img" alt="${p.name}"/>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <div class="text-muted small mb-2">${p.categoria.toUpperCase()}</div>
          <p class="card-text flex-grow-1">${p.desc}</p>
          <div class="d-flex align-items-center justify-content-between mt-2">
            <span class="fw-bold">$${p.precio.toLocaleString("es-CL")}</span>
            <div class="btn-group">
              <button class="btn btn-success btn-sm btn-cart" 
                data-id="${p.id}" 
                data-name="${p.name}" 
                data-precio="${p.precio}" 
                data-img="${p.img}">
                <i class="bi bi-cart"></i>
              </button>
              <button class="btn btn-outline-danger btn-sm btn-fav" 
                data-id="${p.id}" 
                data-name="${p.name}" 
                data-precio="${p.precio}" 
                data-img="${p.img}">
                 <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>`;
    contenedor.appendChild(col);
  });
}
// Render productos administrador
function renderAdminProductos() {
  const tabla = document.getElementById("admin-productos");
  if (!tabla) return;

  tabla.innerHTML = "";
  window.CATALOGO_LOCAL.forEach(p => {
    tabla.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>$${p.precio.toLocaleString("es-CL")}</td>
        <td>${p.desc}</td>
        <td>${p.compania || "Sin asignar"}</td>
        <td>
          <span class="badge ${p.habilitado ? "bg-success" : "bg-danger"}">
            ${p.habilitado ? "Habilitado" : "Inhabilitado"}
          </span>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm btn-toggle" data-id="${p.id}">
            ${p.habilitado ? "Inhabilitar" : "Habilitar"}
          </button>
          <button class="btn btn-primary btn-sm btn-edit" data-id="${p.id}">Editar</button>
          <button class="btn btn-danger btn-sm btn-delete" data-id="${p.id}">Eliminar</button>
        </td>
      </tr>
    `;
  });

  document.querySelectorAll(".btn-toggle").forEach(btn =>
    btn.addEventListener("click", () => toggleHabilitado(btn.dataset.id))
  );
  document.querySelectorAll(".btn-delete").forEach(btn =>
    btn.addEventListener("click", () => eliminarProducto(btn.dataset.id))
  );
  document.querySelectorAll(".btn-edit").forEach(btn =>
    btn.addEventListener("click", () => abrirEditar(btn.dataset.id))
  );
}

// Funciones admin
function toggleHabilitado(id) {
  const producto = window.CATALOGO_LOCAL.find(p => p.id == id);
  if (!producto) return;
  producto.habilitado = !producto.habilitado;
  guardarCatalogo();
  renderAdminProductos();
  renderProductosCliente();
}

function eliminarProducto(id) {
  if (!confirm("¿Eliminar producto?")) return;
  window.CATALOGO_LOCAL = window.CATALOGO_LOCAL.filter(p => p.id != id);
  guardarCatalogo();
  renderAdminProductos();
  renderProductosCliente();
}

function guardarNuevoProducto() {
  const nombre = document.getElementById("agregar-nombre").value.trim();
  const precio = parseInt(document.getElementById("agregar-precio").value);
  const desc = document.getElementById("agregar-descripcion").value.trim();
  const compania = document.getElementById("agregar-compania").value;
  const habilitado = document.getElementById("agregar-habilitado").checked;

  if (!nombre || isNaN(precio)) {
    alert("Completa correctamente el formulario");
    return;
  }

  const nuevo = {
    id: Date.now().toString(),
    name: nombre,
    precio,
    desc,
    compania,
    categoria: "otros",
    img: "img/default.png",
    habilitado
  };

  window.CATALOGO_LOCAL.push(nuevo);
  guardarCatalogo();
  renderAdminProductos();
  renderProductosCliente();

  bootstrap.Modal.getInstance(document.getElementById("modalAgregar")).hide();
}

function abrirEditar(id) {
  const producto = window.CATALOGO_LOCAL.find(p => p.id == id);
  if (!producto) return;

  document.getElementById("editar-id").value = producto.id;
  document.getElementById("editar-nombre").value = producto.name;
  document.getElementById("editar-precio").value = producto.precio;
  document.getElementById("editar-descripcion").value = producto.desc;
  document.getElementById("editar-compania").value = producto.compania || "Chilexpress";

  const modal = new bootstrap.Modal(document.getElementById("modalEditar"));
  modal.show();
}

function guardarEdicion() {
  const id = document.getElementById("editar-id").value;
  const producto = window.CATALOGO_LOCAL.find(p => p.id == id);
  if (!producto) return;

  producto.name = document.getElementById("editar-nombre").value.trim();
  producto.precio = parseInt(document.getElementById("editar-precio").value);
  producto.desc = document.getElementById("editar-descripcion").value.trim();
  producto.compania = document.getElementById("editar-compania").value;

  guardarCatalogo();
  renderAdminProductos();
  renderProductosCliente();

  bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
}

// Consejo del día
document.addEventListener("DOMContentLoaded", () => {
  const btnConsejo = document.querySelector("#panel-huerto button.btn-primary");
  const textareaConsejo = document.querySelector("#panel-huerto textarea");

  if (btnConsejo && textareaConsejo) {
    btnConsejo.addEventListener("click", () => {
      const texto = textareaConsejo.value.trim();
      if (!texto) return alert("Escribe un consejo válido");
      localStorage.setItem("consejo-del-dia", texto);
      alert("Consejo guardado ✅");
    });
  }

  // Mostrar consejo en Index
  const consejo = localStorage.getItem("consejo-del-dia");
  if (consejo && document.getElementById("consejo-texto")) {
    document.getElementById("consejo-texto").textContent = consejo;
  }

  // Render inicial
  renderAdminProductos();
  renderProductosCliente();
});