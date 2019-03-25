function calculo(nombre, apellido, departamento, años) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.departamento = departamento;
    this.años = años;
}

calculo.prototype.vacaciones = function() {
    let mensaje;
  if (this.departamento==='Atencion al cliente') {
    
    if (this.años === '1 año') {
      
        mensaje = 'Tienes 6 dias de vacaciones';
        
    }else if (this.años === '2 a 6 años') {

        mensaje = 'Tienes 14 dias de vacaciones';

    }else if (this.años === '7 o mas años') {

        mensaje = 'Tienes 20 dias de vacaciones';

    }

  }else if (this.departamento === 'Trabajadores de logistica') {
      
    if (this.años === '1 año') {
      
        mensaje = 'Tienes 7 dias de vacaciones';
        
    }else if (this.años === '2 a 6 años') {

        mensaje = 'Tienes 15 dias de vacaciones';

    }else if (this.años === '7 o mas años') {

        mensaje = 'Tienes 22 dias de vacaciones';

    } 

  } else if (this.departamento === 'Gerentes') {
      
    if (this.años === '1 año') {
      
        mensaje = 'Tienes 10 dias de vacaciones';
        
    }else if (this.años === '2 a 6 años') {

        mensaje = 'Tienes 20 dias de vacaciones';

    }else if (this.años === '7 o mas años') {

        mensaje = 'Tienes 30 dias de vacaciones';

    } 
  }
  const resultado = document.getElementById('resultado');
  const aviso = document.createElement('h4');
  aviso.innerText = `Sr ${this.nombre} ${this.apellido} : ${mensaje}.`
  resultado.appendChild(aviso);
}

document.getElementById('formEmpleado').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value,
          apellido = document.getElementById('apellido').value,
          departamento = document.getElementById('departamento').value,
          año = document.getElementById('años').value;

    if (nombre==='' && apellido === '' && departamento === '' && año === '' ) {
        alert('Por favor llena  todo el formulario');
    } else if (nombre==='') {
        alert('porfavor introduce tu nombre');
    } else if (apellido==='') {
        alert('porfavor introduce tu apellido');
    }else if (departamento==='') {
        alert('porfavor introduce tu departamento');
    }else if (año==='') {
        alert('porfavor indique la cantidad de años');
    }else{

        const cal = new calculo(nombre, apellido, departamento, año);
        cal.vacaciones();
        e.preventDefault();
    }      

});