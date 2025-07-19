document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("form-contact");
            const nombreInput = document.getElementById("first-name");
            const apellidoInput = document.getElementById("last-name");
            const emailInput = document.getElementById("email");
            const comentarioInput = document.getElementById("comment");

            // --- EVENT LISTENERS PARA VALIDACIÓN EN TIEMPO REAL ---
            nombreInput.addEventListener('input', () => validarNombre());
            apellidoInput.addEventListener('input', () => validarApellido());
            emailInput.addEventListener('input', () => validarEmail());
            comentarioInput.addEventListener('input', () => validarComentario());

            // --- EVENT LISTENER PARA EL ENVÍO FINAL ---
            form.addEventListener("submit", function(event) {
                event.preventDefault();
                
                // Llama a todas las validaciones individuales.
                const esNombreValido = validarNombre();
                const esApellidoValido = validarApellido();
                const esEmailValido = validarEmail();
                const esComentarioValido = validarComentario();

                // Si todos los campos son válidos, envía el formulario.
                if (esNombreValido && esApellidoValido && esEmailValido && esComentarioValido) {
                    console.log("Formulario validado correctamente. Enviando...");
                    alert("¡Formulario enviado con éxito!");
                    form.reset();
                    // Restablecer estilos de validación
                    document.querySelectorAll('.form-control').forEach(input => {
                        input.classList.remove('is-valid', 'is-invalid');
                    });
                } else {
                    console.log("La validación del formulario falló.");
                }
            });
        });

        // --- FUNCIONES DE VALIDACIÓN INDIVIDUALES ---

        function setValidationState(inputElement, errorElement, message, isValid) {
            if (isValid) {
                inputElement.classList.remove('is-invalid');
                inputElement.classList.add('is-valid');
                errorElement.textContent = '';
            } else {
                inputElement.classList.remove('is-valid');
                inputElement.classList.add('is-invalid');
                errorElement.textContent = message;
            }
        }

        function validarNombre() {
            const input = document.getElementById("first-name");
            const errorDiv = document.getElementById("errorName");
            const nombre = input.value.trim();

            if (nombre === "") {
                setValidationState(input, errorDiv, "El nombre es obligatorio.", false);
                return false;
            } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
                setValidationState(input, errorDiv, "El nombre solo debe contener letras y espacios.", false);
                return false;
            } else if (nombre.length < 2) {
                setValidationState(input, errorDiv, "El nombre debe tener al menos 2 caracteres.", false);
                return false;
            } else {
                setValidationState(input, errorDiv, "", true);
                return true;
            }
        }

        function validarApellido() {
            const input = document.getElementById("last-name");
            const errorDiv = document.getElementById("errorLastName");
            const apellido = input.value.trim();

            if (apellido === "") {
                setValidationState(input, errorDiv, "El apellido es obligatorio.", false);
                return false;
            } else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
                setValidationState(input, errorDiv, "El apellido solo debe contener letras y espacios.", false);
                return false;
            } else if (apellido.length < 2) {
                setValidationState(input, errorDiv, "El apellido debe tener al menos 2 caracteres.", false);
                return false;
            } else {
                setValidationState(input, errorDiv, "", true);
                return true;
            }
        }

        function validarEmail() {
            const input = document.getElementById("email");
            const errorDiv = document.getElementById("errorEmail");
            const email = input.value.trim();

            if (email === "") {
                setValidationState(input, errorDiv, "El email es obligatorio.", false);
                return false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                setValidationState(input, errorDiv, "Por favor, introduce un correo electrónico válido.", false);
                return false;
            } else {
                setValidationState(input, errorDiv, "", true);
                return true;
            }
        }

        function validarComentario() {
            const input = document.getElementById("comment");
            const errorDiv = document.getElementById("errorMessage");
            const comentario = input.value.trim();

            if (comentario === "") {
                setValidationState(input, errorDiv, "El comentario es obligatorio.", false);
                return false;
            } else if (comentario.length < 10) {
                setValidationState(input, errorDiv, "El mensaje debe tener al menos 10 caracteres.", false);
                return false;
            } else {
                setValidationState(input, errorDiv, "", true);
                return true;
            }
        }
