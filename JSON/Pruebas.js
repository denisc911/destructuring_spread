const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('msg').value;

    // Crear un objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    // Convertir los datos a formato JSON
    const datosJSON = JSON.stringify(datos);

    // Guardar los datos en el almacenamiento local
    localStorage.setItem('contacto', datosJSON);

    // Limpiar el formulario
    formulario.reset();

    // Mostrar mensaje de éxito
    alert('Datos guardados en el almacenamiento local.');

    // Mostrar los datos guardados en el DOM
    mostrarDatosGuardados();
});

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

// Llamar a la función para mostrar los datos guardados al cargar la página
mostrarDatosGuardados();

// 2. Extra
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage

