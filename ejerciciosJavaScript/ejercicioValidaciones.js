document.querySelector('.prueba').addEventListener('submit', function(e) {
 
    const tipo = document.getElementById('nacion').value,
          cedula = document.getElementById('cedula').value,
          nombre = document.getElementById('nombre').value,
          apellido = document.getElementById('apellido').value,
          correo = document.getElementById('correo').value,
          telefono = document.getElementById('telefono').value;

    if (tipo==="" && cedula==="" && nombre==="" && apellido==="" &&        
           correo ==="" && telefono==="" ) {
           
        alert('Por favor llenar todo el formulario');
        e.preventDefault();

    }else if (tipo==="") {
        alert('porfavor elige el tipo de documento');
        e.preventDefault();
    }else if (cedula==="") {
        alert('porfavor introduce tu numero de identidad');
        e.preventDefault();
    } else if (nombre==="") {
        alert('porfavor introduce tu nombre');
        e.preventDefault();
    } else if (apellido==="") {
        alert('porfavor introduce tu apellido');
        e.preventDefault();
    } else if (correo==="") {
        alert('porfavor introduce tu correo');
        e.preventDefault();
    } else if (telefono==="") {
        alert('porfavor introduce tu numero de telefono');
        e.preventDefault();
    }else{
        alert(`Datos de la persona
        Cedula : ${tipo}-${cedula}.
        Nombre y apellido : ${nombre} ${apellido}.
        Correo : ${correo}.
        Telefono : ${telefono}.

               Datos guardados.
        `);
    }

});