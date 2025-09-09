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
    { id: "19", name: "Higos", precio: 3500, categoria: "frutas", img: "img/higo/Higo_1.avif", desc: "Higos frescos, dulces y jugosos, ideales para postres o mermeladas." },
    { id: "20", name: "Arándanos", precio: 4200, categoria: "frutas", img: "img/arándano/Arándano_1.avif", desc: "Arándanos pequeños, azules y llenos de antioxidantes." },
    { id: "21", name: "Piña", precio: 2800, categoria: "frutas", img: "img/piña/piña_1.png", desc: "Piña tropical, jugosa y refrescante, perfecta para jugos y postres." },
    { id: "22", name: "Limón", precio: 1500, categoria: "frutas", img: "img/limón/Limón_1.avif", desc: "Limones frescos, llenos de jugo ácido y vitamina C." },
    { id: "23", name: "Castañas", precio: 7600, categoria: "frutas", img: "img/castaña/Castaña_1.jpg", desc: "Castañas frescas, ideales para asar o preparar purés." },
    { id: "24", name: "Caqui", precio: 2990, categoria: "frutas", img: "img/caqui/Caqui_2.webp", desc: "Caquis dulces y jugosos, ideales para mermeladas y postres." },
    { id: "25", name: "Chirimoya", precio: 3800, categoria: "frutas", img: "img/chirimoya/Chirimoya_1.jpg", desc: "Chirimoya cremosa y muy dulce, conocida como la 'fruta de la paz'." },
    { id: "26", name: "Tuna", precio: 2200, categoria: "frutas", img: "img/tuna/Tuna_2.jpg", desc: "Tunas frescas, dulces y refrescantes, típicas de temporada." },
    { id: "27", name: "Nueces", precio: 8500, categoria: "frutas", img: "img/nuez/Nuez_1.jpg", desc: "Nueces frescas con alto contenido de omega-3 y energía." },
    { id: "28", name: "Almendras", precio: 8900, categoria: "frutas", img: "img/almendra/Almendra_1.jpg", desc: "Almendras naturales, crocantes y llenas de nutrientes." },
    { id: "29", name: "Pomelo", precio: 2300, categoria: "frutas", img: "img/pomelo/Pomelo_1.webp", desc: "Pomelos jugosos y ácidos, ricos en vitamina C." },
    { id: "30", name: "Alcayota", precio: 2500, categoria: "frutas", img: "img/alcayota/Alcayota_1.webp", desc: "Alcayota fresca, especial para preparar dulces y mermeladas." },
    // VERDURAS
    { id: "31", name: "Lechuga", precio: 900, categoria: "verduras", img: "img/lechuga/Lechuga_2.webp", desc: "Fresca y crujiente, ideal para ensaladas." },
    { id: "32", name: "Repollo Blanco", precio: 1000, categoria: "verduras", img: "img/repolloblanco.png", desc: "Repollo blanco, crocante y versátil en ensaladas o guisos." },
    { id: "33", name: "Repollo Morado", precio: 1100, categoria: "verduras", img: "img/repollomorado.png", desc: "Repollo morado, de color intenso y sabor fresco." },
    { id: "34", name: "Cebolla", precio: 700, categoria: "verduras", img: "img/cebolla/Cebolla_2.png", desc: "Cebolla fresca, ideal para todo tipo de platos." },
    { id: "35", name: "Espinaca", precio: 1200, categoria: "verduras", img: "img/espinaca/Espinaca_1.jpg", desc: "Hojas verdes tiernas, ricas en hierro y vitaminas." },
    { id: "36", name: "Calabaza", precio: 1600, categoria: "verduras", img: "img/calabaza/Calabaza-1.png", desc: "Pulpa dulce y cremosa, perfecta para sopas y cremas." },
    { id: "37", name: "Palta Hass", precio: 1600, categoria: "verduras", img: "img/palta/PaltaHass_4.png", desc: "Textura cremosa y sabor suave, ideal para ensaladas y tostadas." },
    { id: "38", name: "Papas", precio: 1200, categoria: "verduras", img: "img/papa/papa_3.png", desc: "Versátiles y rendidoras, perfectas para puré, fritas o al horno." },
    { id: "39", name: "Tomates", precio: 1300, categoria: "verduras", img: "img/tomate/Tomate_1.png", desc: "Jugosos y sabrosos, dan color y frescura a tus comidas." },
    { id: "40", name: "Pepino", precio: 900, categoria: "verduras", img: "img/pepino/Pepino_1.png", desc: "Crujiente y refrescante, ideal para ensaladas y aguas saborizadas." },
    { id: "41", name: "Pimiento", precio: 1400, categoria: "verduras", img: "img/pimiento/Pimenton_1.png", desc: "Dulce y aromático, aporta color y sabor a salteados y ensaladas." },
    { id: "42", name: "Tomates Cherry", precio: 1600, categoria: "verduras", img: "img/tomateCherry/tomatecherry_1.png", desc: "Pequeños y dulces, perfectos para snack o ensaladas." },
    { id: "43", name: "Zanahoria", precio: 900, categoria: "verduras", img: "img/zanahoria/Zanahoria_1.png", desc: "Crujiente y naturalmente dulce, rica en betacarotenos." },
    { id: "44", name: "Zapallo Camote", precio: 1700, categoria: "verduras", img: "img/Zapallo camote/Zapallo_2.png", desc: "Sabor dulce y textura suave, ideal para cremas y hornos." },
    { id: "45", name: "Zapallo Italiano", precio: 1200, categoria: "verduras", img: "img/Zapallo Italiano/Zapallo_italiano_2.png", desc: "Suave y versátil, perfecto para salteados, rellenos y pastas." },
    { id: "46", name: "Brócoli", precio: 1690, categoria: "verduras", img: "img/brocoli/Brocoli_1.png", desc: "Brócoli fresco y lleno de nutrientes, ideal para ensaladas, sopas y al vapor." },
    { id: "47", name: "Coliflor", precio: 1800, categoria: "verduras", img: "img/coliflor/Coliflor_2.avif", desc: "Coliflor fresca, ideal para gratinados, sopas y ensaladas." },
    { id: "48", name: "Ajo", precio: 1200, categoria: "verduras", img: "img/ajo/Ajo_1.jpeg", desc: "Ajo aromático, infaltable en la cocina chilena." },
    { id: "49", name: "Betarraga", precio: 1600, categoria: "verduras", img: "img/beterraga/Beterraga_2.webp", desc: "Betarraga dulce y nutritiva, rica en antioxidantes." },
    { id: "50", name: "Choclo", precio: 1800, categoria: "verduras", img: "img/choclo/Choclo_2.jpg", desc: "Choclo fresco, amarillo y jugoso, perfecto para humitas y pastel de choclo." },
    { id: "51", name: "Cebollín", precio: 1200, categoria: "verduras", img: "img/cebollín/Cebollín_1.png", desc: "Cebollín fresco, ideal para ensaladas y guisos." },
    { id: "52", name: "Cebolla Morada", precio: 1400, categoria: "verduras", img: "img/cebolla morada/CebollaMorada_1.jpg", desc: "Cebolla morada, de sabor suave y dulce, perfecta para ensaladas." },
    { id: "53", name: "Berenjena", precio: 2000, categoria: "verduras", img: "img/berenjena.png", desc: "Berenjena morada, ideal para asar, freír o rellenar." },
    { id: "54", name: "Ají", precio: 1500, categoria: "verduras", img: "img/ají/Ají_1.avif", desc: "Ají fresco, aporta picor y sabor intenso a las comidas." },
    { id: "55", name: "Rabanito", precio: 1000, categoria: "verduras", img: "img/rabanito/Rabanito_1.avif", desc: "Rabanitos frescos, crujientes y de sabor ligeramente picante." },
    { id: "56", name: "Alcachofa", precio: 2800, categoria: "verduras", img: "img/alcachofa/Alcachofa_1.webp", desc: "Alcachofas tiernas, ricas en fibra y antioxidantes." },
    { id: "57", name: "Espárragos", precio: 3500, categoria: "verduras", img: "img/espárrago/Espárrago_1.jpg", desc: "Espárragos frescos, tiernos y sabrosos." },
    { id: "58", name: "Cilantro", precio: 800, categoria: "verduras", img: "img/cilantro/Cilantro_2.webp", desc: "Cilantro fresco, aromático e indispensable en la cocina chilena." },
    { id: "59", name: "Perejil", precio: 700, categoria: "verduras", img: "img/perejil/Perejil_1.webp", desc: "Perejil fresco, perfecto para salsas, guisos y ensaladas." },
    { id: "60", name: "Apio", precio: 1100, categoria: "verduras", img: "img/apio.png", desc: "Crujiente y refrescante, ideal para ensaladas y sopas." },

    //LEGUMBRES & CEREALES 
    { id: "61", name: "Arvejas", precio: 2200, categoria: "Legumbres-Cereales", img: "img/arveja/Arveja_1.jpg", desc: "Arvejas verdes, tiernas y llenas de proteína vegetal." },
    { id: "62", name: "Garbanzos", precio: 2300, categoria: "Legumbres-Cereales", img: "img/garbanzo/Garbanzo_3.png", desc: "Garbanzos ideales para ensaladas, guisos y hummus." },
    { id: "63", name: "Habas", precio: 2000, categoria: "Legumbres-Cereales", img: "img/haba/Habas_3.png", desc: "Habas frescas y tradicionales en la cocina chilena." },
    { id: "64", name: "Lentejas", precio: 2100, categoria: "Legumbres-Cereales", img: "img/lenteja/Lentejas_3.png", desc: "Lentejas nutritivas y llenas de fibra, perfectas para guisos." },
    { id: "65", name: "Avena", precio: 2500, categoria: "Legumbres-Cereales", img: "img/avena/Avena_2.png", desc: "Avena natural, ideal para desayunos saludables." },
    { id: "66", name: "Linaza", precio: 2800, categoria: "Legumbres-Cereales", img: "img/linaza/Linaza_1.png", desc: "Semillas de linaza, ricas en fibra y omega-3." },
    { id: "67", name: "Arroz", precio: 1900, categoria: "Legumbres-Cereales", img: "img/Arroz/Arroz_1.png", desc: "Arroz blanco de grano largo, versátil en la cocina." },

    // LÁCTEOS
    { id: "68", name: "Leche Entera", precio: 1500, categoria: "Lacteos", img: "img/Leche/Leche_3.png", desc: "Leche entera fresca, rica en calcio." },
    { id: "69", name: "Mantequilla", precio: 2900, categoria: "Lacteos", img: "img/mantequilla/Mantequilla_2.avif", desc: "Mantequilla cremosa, perfecta para untar o cocinar." },
    { id: "70", name: "Queso Chanco", precio: 8900, categoria: "Lacteos", img: "img/quesochanco.png", desc: "Queso chanco tradicional, semimaduro y sabroso." },
    { id: "71", name: "Queso Mantecoso", precio: 9500, categoria: "Lacteos", img: "img/queso mantecoso/QuesoMantecoso_1.webp", desc: "Queso mantecoso, suave y fundente, ideal para sándwiches." },
    { id: "72", name: "Queso de Cabra", precio: 10500, categoria: "Lacteos", img: "img/queso cabra/QuesoCabra_1.png", desc: "Queso de cabra artesanal, de sabor intenso y textura cremosa, ideal para ensaladas y tablas." },
    { id: "73", name: "Yogurt", precio: 450, categoria: "Lacteos", img: "img/yogurt/Yogurt_3.jpg", desc: "Yogurt natural, fresco y nutritivo." },
    { id: "74", name: "Manjar", precio: 3990, categoria: "Lacteos", img: "img/manjar/Manjar_1.png", desc: "Manjar casero cremoso y suave, elaborado lentamente con leche fresca y azúcar." },

    // OTROS
    { id: "75", name: "Huevos", precio: 3800, categoria: "otros", img: "img/huevo/Huevos.png", desc: "Huevos de gallina frescos, ideales para desayunos y repostería." },
    { id: "76", name: "Miel Multifloral", precio: 6900, categoria: "otros", img: "img/Miel multifloral/Miel_multi_2.jpg", desc: "Miel natural 100% pura y artesanal." },
    { id: "77", name: "Mermelada de Mora", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_mora_1.png", desc: "Mermelada casera de mora, preparada de forma artesanal." },
    { id: "78", name: "Mermelada de Frutilla", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_frutilla_1.png", desc: "Tradicional mermelada de frutilla casera, dulce y natural." },
    { id: "79", name: "Mermelada de Durazno", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_durazno_!.png", desc: "Mermelada casera de durazno, hecha con fruta fresca de temporada." },
    { id: "80", name: "Mermelada de Higo", precio: 2800, categoria: "otros", img: "img/mermelada higo/MermeladaHigo_1.webp", desc: "Mermelada casera de higo, dulce e intensa." },
    { id: "81", name: "Mermelada de Alcayota", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_alca_1.png", desc: "Tradicional mermelada de alcayota, típica de la cocina chilena." },
    { id: "82", name: "Mermelada de Frambuesa", precio: 2800, categoria: "otros", img: "img/mermelada frambuesa/MermeladaFrambuesa_1.webp", desc: "Mermelada de frambuesa fresca, intensa y natural." },
    { id: "83", name: "Mermelada de Arándano", precio: 2800, categoria: "otros", img: "img/Mermeladas/Mermelada_arandano_1.png", desc: "Mermelada artesanal de arándano, llena de sabor." },
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
              <button class="btn btn-outline-danger btn-sm btn-fav"
                data-id="${p.id}" data-name="${p.name}" data-precio="${p.precio}" data-img="${p.img}">
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
    if (lista) {
        renderProductos();
    }
});