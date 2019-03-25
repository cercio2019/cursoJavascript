function registro(nombre, apellido, departamento, años){
    this.nombre = nombre;
    this.apellido = apellido;
    this.departamento = departamento;
    this.años = años;

    this.arreglo = function () {
     let registros = [this.nombre, this.apellido, this.departamento, this.años];
     localStorage.setItem(this.nombre, JSON.stringify(registros));
    }
}

function llaves(nombre) {
   this.nombre = nombre;
    
   this.registrarLLave = function() {
    let llave;
    if (localStorage.getItem('nombres')=== null) {
        llave = [];
    }else{
        llave = JSON.parse(localStorage.getItem('nombres'));
    }
    llave.push(this.nombre);
    localStorage.setItem('nombres', JSON.stringify(llave));
   }
}

document.getElementById('registrar').addEventListener('submit', function(e) {
   const nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellido').value,
        departamento = document.getElementById('departamento').value,
        años = document.getElementById('años').value;
      
        if (nombre==='' && apellido === '' && departamento === '' && años === '' ) {
            alert('Por favor llena  todo el formulario');
            e.preventDefault(); 
        } else if (nombre==='') {
            alert('porfavor introduce tu nombre');
            e.preventDefault(); 
        } else if (apellido==='') {
            alert('porfavor introduce tu apellido');
            e.preventDefault(); 
        }else if (departamento==='') {
            alert('porfavor introduce tu departamento');
            e.preventDefault(); 
        }else if (años==='') {
            alert('porfavor indique la cantidad de años');
            e.preventDefault(); 
        }else{
            Im = new registro(nombre, apellido, departamento, años);
            id = new llaves(nombre);
            Im.arreglo();
            id.registrarLLave();
            document.getElementById('registrar').reset();
            e.preventDefault();           
        }        
});

const llave = JSON.parse(localStorage.getItem('nombres'))

for (let i = 0; i < llave.length; i++) {

    const elemento1 = document.getElementById('tabla');
    const colum = document.createElement('tr');
    const miembro = JSON.parse(localStorage.getItem(llave[i]));
    colum.innerHTML= `<td>${miembro[0]}</td>
    <td>${miembro[1]}</td>
    <td>${miembro[2]}</td>
    <td>${miembro[3]}</td>
`;
elemento1.appendChild(colum);
}




