 let intentos = 0;
        const maxIntentos = 3;

        document.getElementById("registrationForm").onsubmit = function (event) {
            event.preventDefault(); // Evita el envío del formulario

            if (intentos < maxIntentos) {
                // Obtener los valores del formulario
                const nombre = document.getElementById("fname").value;
                const email = document.getElementById("email").value;
                const edad = document.getElementById("Edad").value;
                const password = document.getElementById("lname").value;

                // Mostrar los datos registrados en el contenedor
                document.getElementById("message").innerHTML = `
                    <strong>¡Usted  ya está registrado!</strong><br>
                    Nombre: ${nombre}<br>
                    Correo: ${email}<br>
                    Contraseña: ${password}<br>
                    Edad: ${edad}
                `;
                document.getElementById("message").style.display = "block"; // Hacer visible el mensaje


                // Reiniciar el formulario
                this.reset();
                intentos = 0; // Reiniciar intentos si el registro es exitoso
            } else {
                document.getElementById("message").textContent = "Has alcanzado el máximo de intentos.";
                document.getElementById("btnEnviar").disabled = true; // Deshabilitar el botón
            }

            intentos++;
        };