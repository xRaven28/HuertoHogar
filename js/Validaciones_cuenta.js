document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCrearCuenta");

    form.addEventListener("submit", function (event) {
        let valido = true;

        // Validar Nombre
        const nombre = document.getElementById("nombre");
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{3,}$/.test(nombre.value)) {
            mostrarError(nombre, "El nombre debe tener al menos 3 letras y solo contener caracteres alfabéticos.");
            valido = false;
        } else {
            limpiarError(nombre);
        }

        // Validar Apellido
        const apellido = document.getElementById("apellido");
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{3,}$/.test(apellido.value)) {
            mostrarError(apellido, "El apellido debe tener al menos 3 letras y solo contener caracteres alfabéticos.");
            valido = false;
        } else {
            limpiarError(apellido);
        }

        // Validación y formateo del RUN
        // Función para calcular dígito verificador
function calcularDV(run) {
    let suma = 0;
    let multiplicador = 2;

    for (let i = run.length - 1; i >= 0; i--) {
        suma += parseInt(run.charAt(i)) * multiplicador;
        multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }

    let resto = 11 - (suma % 11);

    if (resto === 11) return "0";
    if (resto === 10) return "K";
    return String(resto);
}

// Función para validar un RUN completo
function validarRUN(runCompleto) {
    runCompleto = runCompleto.replace(/\./g, "").toUpperCase();
    let [numero, dv] = runCompleto.split("-");

    if (!/^\d+$/.test(numero)) return false;

    let dvEsperado = calcularDV(numero);
    return dv === dvEsperado;
}

// Función para formatear un RUN (con puntos y guion)
function formatearRUN(runCompleto) {
    runCompleto = runCompleto.replace(/\./g, "").toUpperCase();
    let [numero, dv] = runCompleto.split("-");

    // Poner puntos cada 3 cifras desde la derecha
    let conPuntos = "";
    let contador = 0;

    for (let i = numero.length - 1; i >= 0; i--) {
        conPuntos = numero.charAt(i) + conPuntos;
        contador++;
        if (contador === 3 && i !== 0) {
            conPuntos = "." + conPuntos;
            contador = 0;
        }
    }

    return conPuntos + "-" + dv;
}

        // Validar Correo
        const correo = document.getElementById("correo");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            mostrarError(correo, "Ingresa un correo válido (ejemplo@correo.com).");
            valido = false;
        } else {
            limpiarError(correo);
        }

        // Validar Teléfono (formato chileno simplificado)
        const telefono = document.getElementById("telefono");
        if (!/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.value)) {
            mostrarError(telefono, "Ingresa un número válido. Ejemplo: +56 9 1234 5678");
            valido = false;
        } else {
            limpiarError(telefono);
        }

        // Validar Dirección
        const direccion = document.getElementById("direccion");
        if (direccion.value.trim().length < 5) {
            mostrarError(direccion, "La dirección debe tener al menos 5 caracteres.");
            valido = false;
        } else {
            limpiarError(direccion);
        }

        // Validar Contraseñas iguales
        const pass = document.getElementById("password");
        const confirm = document.getElementById("confirmarPassword");
        if (pass.value !== confirm.value) {
            mostrarError(confirm, "Las contraseñas no coinciden.");
            valido = false;
        } else {
            limpiarError(confirm);
        }

        if (!valido) {
            event.preventDefault(); // Evita envío si hay errores
        }
    });

    // Funciones para mostrar y limpiar errores con Bootstrap
    function mostrarError(input, mensaje) {
        input.classList.add("is-invalid");
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("invalid-feedback")) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "invalid-feedback";
            errorDiv.innerText = mensaje;
            input.parentNode.appendChild(errorDiv);
        } else {
            input.nextElementSibling.innerText = mensaje;
        }
    }

    function limpiarError(input) {
        input.classList.remove("is-invalid");
        if (input.nextElementSibling && input.nextElementSibling.classList.contains("invalid-feedback")) {
            input.nextElementSibling.remove();
        }
    }
});