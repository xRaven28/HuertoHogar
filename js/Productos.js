// Catálogo de productos
const CATALOGO = [
    // FRUTAS
    { id: "1", name: "Manzanas Rojas", precio: 990, categoria: "frutas", img: "img/Manzana/Manzana_1.png", desc: "Manzanas frescas, crocantes y dulces." },
    { id: "2", name: "Naranjas", precio: 1500, categoria: "frutas", img: "img/Naranja/Naranja_1.png", desc: "Naranjas jugosas llenas de vitamina C." },
    { id: "3", name: "Frutillas", precio: 1990, categoria: "frutas", img: "img/frutilla/Frutilla_4.png", desc: "Frutillas dulces, ideales para postres." },
    { id: "4", name: "Cerezas", precio: 2990, categoria: "frutas", img: "img/Cereza/Cereza_2.png", desc: "Cerezas de temporada, muy sabrosas." },
    { id: "5", name: "Plátanos", precio: 1200, categoria: "frutas", img: "img/plátano/Platano_3.png", desc: "Plátanos maduros, energéticos." },
    { id: "6", name: "Peras", precio: 1100, categoria: "frutas", img: "img/pera/Pera_2.png", desc: "Peras frescas, textura suave." },
    { id: "7", name: "Sandías", precio: 3500, categoria: "frutas", img: "img/sandía/Sandía_1.png", desc: "Sandía fresca, ideal para verano." },
    { id: "8", name: "Melón Tuna", precio: 3200, categoria: "frutas", img: "img/melónTuna/MelónTuna_1.png", desc: "Melón dulce y refrescante." },
    { id: "9", name: "Duraznos", precio: 2500, categoria: "frutas", img: "img/durazno/Durazno_1.png", desc: "Duraznos jugosos de temporada." },
    { id: "10", name: "Kiwis", precio: 1700, categoria: "frutas", img: "img/kiwi/Kiwi_3.png", desc: "Kiwi lleno de vitamina C." },
    { id: "11", name: "Damascos", precio: 2990, categoria: "frutas", img: "img/damasco/damasco_3.png", desc: "Damascos jugosos y dulces, ideales para postres o mermeladas." },
    { id: "12", name: "Frambuesas", precio: 3500, categoria: "frutas", img: "img/frambuesa/Frambuesa_3.png", desc: "Frambuesas frescas, pequeñas y llenas de sabor intenso." },
    { id: "13", name: "Granada", precio: 1990, categoria: "frutas", img: "img/granada/Granada_1.png", desc: "Granadas con granos rojos brillantes y antioxidantes naturales." },
    { id: "14", name: "Mandarinas", precio: 1890, categoria: "frutas", img: "img/mandarina/Mandarina_4.png", desc: "Mandarinas dulces y fáciles de pelar, perfectas como snack." },
    { id: "15", name: "Melón Calameño", precio: 3490, categoria: "frutas", img: "img/melónCalameño/MelónCalameño_1.png", desc: "Melón calameño, muy dulce y refrescante en días de calor." },
    { id: "16", name: "Membrillo", precio: 2790, categoria: "frutas", img: "img/membrillo/Membrillo_1.png", desc: "Membrillo aromático, ideal para preparar dulces y compotas." },
    { id: "17", name: "Pepinos Dulces", precio: 2990, categoria: "frutas", img: "img/pepinoDulce/PepinoDulce_1.png", desc: "Pepinos dulces, refrescantes y suaves, perfectos para ensaladas." },
    { id: "18", name: "Uvas", precio: 2980, categoria: "frutas", img: "img/uva/Uva_4.png", desc: "Uvas frescas y jugosas, excelentes para comer al natural o en postres." },

    // VERDURAS
   { id: "19", name: "Cebolla", precio: 700, categoria: "verduras", img: "img/cebolla/Cebolla_2.png", desc: "Cebolla fresca, ideal para todo tipo de platos." },
{ id: "20", name: "Espinaca", precio: 1200, categoria: "verduras", img: "img/Espinaca/Espinaca_1.jpg", desc: "Hojas verdes tiernas, ricas en hierro y vitaminas." },
{ id: "21", name: "Calabaza", precio: 1600, categoria: "verduras", img: "img/calabaza/Calabaza-1.png", desc: "Pulpa dulce y cremosa, perfecta para sopas y cremas." },
{ id: "22", name: "Palta Hass", precio: 1600, categoria: "verduras", img: "img/palta/PaltaHass_4.png", desc: "Textura cremosa y sabor suave, ideal para ensaladas y tostadas." },
{ id: "23", name: "Papas", precio: 1200, categoria: "verduras", img: "img/papa/Papa_1.png", desc: "Versátiles y rendidoras, perfectas para puré, fritas o al horno." },
{ id: "24", name: "Tomates", precio: 1300, categoria: "verduras", img: "img/tomate/Tomate_1.png", desc: "Jugosos y sabrosos, dan color y frescura a tus comidas." },
{ id: "25", name: "Pepino", precio: 900, categoria: "verduras", img: "img/pepino/Pepino_1.png", desc: "Crujiente y refrescante, ideal para ensaladas y aguas saborizadas." },
{ id: "26", name: "Pimiento (Pimentón)", precio: 1400, categoria: "verduras", img: "img/Pimiento/Pimenton_1.png", desc: "Dulce y aromático, aporta color y sabor a salteados y ensaladas." },
{ id: "27", name: "Tomates Cherry", precio: 1600, categoria: "verduras", img: "img/tomateCherry/Tomate_cherry_1.png", desc: "Pequeños y dulces, perfectos para snack o ensaladas." },
{ id: "28", name: "Zanahoria", precio: 900, categoria: "verduras", img: "img/Zanahoria/Zanahoria_1.png", desc: "Crujiente y naturalmente dulce, rica en betacarotenos." },
{ id: "29", name: "Zapallo Camote", precio: 1700, categoria: "verduras", img: "img/Zapallo camote/Zapallo_1.png", desc: "Sabor dulce y textura suave, ideal para cremas y hornos." },
{ id: "30", name: "Zapallo Italiano", precio: 1200, categoria: "verduras", img: "img/Zapallo Italiano/Zapallo_italiano_1.png", desc: "Suave y versátil, perfecto para salteados, rellenos y pastas." },
     // OTROS
    { id: "21", name: "Miel Multifloral", precio: 6900, categoria: "otros", img: "img/Miel multifloral/Miel_multi_2.jpg", desc: "Miel natural 100% pura." },
    { id: "22", name: "Leche Entera", precio: 1500, categoria: "otros", img: "img/Leche/Leche_1.png", desc: "Leche entera fresca, rica en calcio." },
    { id: "23", name: "Arvejas", precio: 2200, categoria: "otros", img: "img/arveja/Arveja_1.jpg", desc: "Arvejas verdes, tiernas y llenas de proteínas." },
    { id: "24", name: "Garbanzo", precio: 2300, categoria: "otros", img: "img/garbanzo/Garbanzo_1.jpg", desc: "Garbanzo ideal para guisos, ensaladas y hummus." },
    { id: "25", name: "Habas", precio: 2000, categoria: "otros", img: "img/Haba/Haba_1.png", desc: "Habas frescas, tradicionales en la cocina chilena." },
    { id: "26", name: "Lentejas", precio: 2100, categoria: "otros", img: "img/lenteja/Lenteja_1.jpg", desc: "Lentejas llenas de hierro y fibra, perfectas para guisos." },
    { id: "27", name: "Avena", precio: 2500, categoria: "otros", img: "img/avena/Avena_1.jpg", desc: "Avena natural, ideal para desayunos saludables." },
    { id: "28", name: "Linaza", precio: 2800, categoria: "otros", img: "img/linaza/Linaza_1.jpg", desc: "Semillas de linaza, ricas en omega-3 y fibra." },
    { id: "29", name: "Arroz", precio: 1900, categoria: "otros", img: "img/Arroz/Arroz-1.png", desc: "Arroz blanco de granos largos, versátil en la cocina." },
];
// Filtros, render y lógica
const lista = document.getElementById("productos-lista");
const paginacion = document.getElementById("paginacion");
const inputBuscar = document.getElementById("buscar-input");
const btnBuscar = document.getElementById("btn-buscar");
const selCat = document.getElementById("categoria");
const selOrden = document.getElementById("orden");
const selPage = document.getElementById("page-size");

let estado = {
    query: "",
    categoria: "todos",
    orden: "relevancia",
    page: 1,
    pageSize: Number(selPage ? selPage.value : 10),
};

function aplicarFiltros(data) {
    let res = [...data];
    if (estado.query.trim()) {
        const q = estado.query.toLowerCase();
        res = res.filter(
            (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
        );
    }
    if (estado.categoria !== "todos") {
        res = res.filter((p) => p.categoria === estado.categoria);
    }
    switch (estado.orden) {
        case "precio-asc":
            res.sort((a, b) => a.precio - b.precio);
            break;
        case "precio-desc":
            res.sort((a, b) => b.precio - a.precio);
            break;
        case "nombre-asc":
            res.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    return res;
}

function renderProductos() {
    const filtrados = aplicarFiltros(CATALOGO);
    const total = filtrados.length;
    const totalPages = Math.max(1, Math.ceil(total / estado.pageSize));
    estado.page = Math.min(estado.page, totalPages);

    const start = (estado.page - 1) * estado.pageSize;
    const end = start + estado.pageSize;
    const pagina = filtrados.slice(start, end);

    lista.innerHTML = "";
    pagina.forEach((p) => {
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
              <button class="btn btn-success btn-sm btn-cart" data-id="${p.id}" data-name="${p.name}" data-precio="${p.precio}" data-img="${p.img}">
                <i class="bi bi-cart"></i>
              </button>
              <button class="btn btn-outline-danger btn-sm btn-fav" data-id="${p.id}" data-name="${p.name}">
                <i class="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>`;
        lista.appendChild(col);
    });

    renderPaginacion(totalPages);
    actualizarContadores();
}

function renderPaginacion(totalPages) {
    paginacion.innerHTML = "";
    const crearItem = (label, page, disabled = false, active = false) => {
        const li = document.createElement("li");
        li.className = `page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}`;
        li.innerHTML = `<a class="page-link" href="#">${label}</a>`;
        if (!disabled && !active) {
            li.addEventListener("click", (e) => {
                e.preventDefault();
                estado.page = page;
                renderProductos();
            });
        }
        return li;
    };

    paginacion.appendChild(crearItem("«", Math.max(1, estado.page - 1), estado.page === 1));
    for (let i = 1; i <= totalPages; i++) {
        paginacion.appendChild(crearItem(String(i), i, false, i === estado.page));
    }
    paginacion.appendChild(crearItem("»", Math.min(totalPages, estado.page + 1), estado.page === totalPages));
}

if (btnBuscar) btnBuscar.addEventListener("click", () => {
    estado.query = inputBuscar.value;
    estado.page = 1;
    renderProductos();
});
if (inputBuscar) inputBuscar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        estado.query = inputBuscar.value;
        estado.page = 1;
        renderProductos();
    }
});
if (selCat) selCat.addEventListener("change", () => {
    estado.categoria = selCat.value;
    estado.page = 1;
    renderProductos();
});
if (selOrden) selOrden.addEventListener("change", () => {
    estado.orden = selOrden.value;
    estado.page = 1;
    renderProductos();
});
if (selPage) selPage.addEventListener("change", () => {
    estado.pageSize = Number(selPage.value);
    estado.page = 1;
    renderProductos();
});

document.addEventListener("DOMContentLoaded", () => {
    renderProductos();
});
