document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContacto");

    form.addEventListener("submit", function (event) {
        let valido = true;

        // Validar Nombre
        const nombre = document.getElementById("contactoNombre");
        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{3,}$/.test(nombre.value)) {
            mostrarError(nombre, "El nombre debe tener al menos 3 letras y solo contener caracteres alfabéticos.");
            valido = false;
        } else {
            limpiarError(nombre);
        }

        // Validar Correo
        const correo = document.getElementById("contactoCorreo");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value)) {
            mostrarError(correo, "Ingresa un correo válido.");
            valido = false;
        } else {
            limpiarError(correo);
        }

        // Validar Teléfono (solo si no está vacío)
        const telefono = document.getElementById("contactoTelefono");
        if (telefono.value.trim() !== "" && !/^\+56\s?9\s?\d{4}\s?\d{4}$/.test(telefono.value)) {
            mostrarError(telefono, "El teléfono debe tener el formato +56 9 1234 5678.");
            valido = false;
        } else {
            limpiarError(telefono);
        }

        // Validar Mensaje
        const mensaje = document.getElementById("contactoMensaje");
        if (mensaje.value.trim().length < 10) {
            mostrarError(mensaje, "El mensaje debe tener al menos 10 caracteres.");
            valido = false;
        } else {
            limpiarError(mensaje);
        }

        if (!valido) {
            event.preventDefault();
        } else {
            alert("✅ Mensaje enviado correctamente.");
        }
    });

    // Funciones auxiliares
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