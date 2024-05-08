// ¿Cuáles son los principales objetivos de estos ejercicios?
// ⦁ Entender que es Local Storage
// ⦁ Aprender lo básico de local storage

// 1. Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Correo
// Mensaje
// Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
// Muestra el usuario que has guardado en el DOM
// Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
const formu =''

        formu.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('msg').value;

            const datos = {
                nombre: nombre,
                correo: correo,
                mensaje: msg
            };
    
            localStorage.setItem('contacto', JSON.stringify(datos));

            formu.reset(); // Limpiar el formulario

            alert('Datos guardados en el almacenamiento local.');
        });
    // Convertir el objeto a formato JSON
    const datosJSON = JSON.stringify(datos);

    // Guardar los datos en el almacenamiento local
    localStorage.setItem('contacto', datosJSON);

    // Mostrar los datos guardados en el DOM
    mostrarDatosGuardados();
;

// Función para mostrar los datos guardados en el DOM
function mostrarDatosGuardados() {
    // Obtener los datos del almacenamiento local
    const datosJSON = localStorage.getItem('contacto');

    // Verificar si hay datos guardados
    if (datosJSON) {
        // Convertir los datos JSON a objeto
        const datos = JSON.parse(datosJSON);

        // Mostrar los datos en el DOM
        const mostrarDatos = document.getElementById('mostrarDatos');
        mostrarDatos.innerHTML = `
            <h2>Datos Guardados:</h2>
            <p><strong>Nombre:</strong> ${datos.nombre}</p>
            <p><strong>Correo:</strong> ${datos.correo}</p>
            <p><strong>Mensaje:</strong> ${datos.mensaje}</p>
        `;
    }
}
// 2. Extra
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage
