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
// Obtener el formulario
// Obtener el formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    // formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('msg').value;

    // declaracion array
    const datos = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    };

    // Obtener los datos actuales de Local Storage
    let contactos = JSON.parse(localStorage.getItem('contactos')) || [];

    // Agregar el nuevo contacto a la lista
    contactos.push(datos);

    // Guardar la lista actualizada en Local Storage
    localStorage.setItem('contactos', JSON.stringify(contactos));

    // Limpiar el formulario
    formulario.reset();

    // Mostrar mensaje de éxito
    alert('Datos guardados en el almacenamiento local.');

    // Mostrar los datos guardados en el DOM
    mostrarDatosGuardados();
});

// 2. Extra
// Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
// Mostrar los datos de los contactos guardados en el DOM
// Crea un botón para borrar todos los contactos guardados en Local Storage

// Función para mostrar los datos guardados en el DOM
function mostrarDatosGuardados() {
    // Obtener los datos del almacenamiento local
    const contactos = JSON.parse(localStorage.getItem('contactos'));

    // Verificar si hay datos guardados
    if (contactos && contactos.length > 0) {
        // Construir el HTML para mostrar los datos
        let html = '<h2>Contactos Guardados:</h2>';
        contactos.forEach(contacto => {
            html += `
                <div>
                    <p><strong>Nombre:</strong> ${contacto.nombre}</p>
                    <p><strong>Correo:</strong> ${contacto.correo}</p>
                    <p><strong>Mensaje:</strong> ${contacto.mensaje}</p>
                </div>
            `;
        });

        // Mostrar los datos en el DOM
        const mostrarDatos = document.getElementById('mostrarDatos');
        mostrarDatos.innerHTML = html;
    } else {
        const mostrarDatos = document.getElementById('mostrarDatos');
        mostrarDatos.innerHTML = '<p>No hay contactos guardados.</p>';
    }
}

// Función BorrarTodo
document.getElementById('borrardatos').addEventListener('click', function() {
    localStorage.removeItem('contactos');
    mostrarDatosGuardados(); // Actualizar la vista
    alert('Todos los contactos han sido borrados.');
});

mostrarDatosGuardados();
