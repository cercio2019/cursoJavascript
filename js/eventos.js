/** document.querySelector('.mi-boton').addEventListener('click', function(e) {
    console.log('cercio el mejor');
    e.preventDefault();
})**/

/** document.querySelector('mi-boton'),addEventListener('mouseover', onclick);
function onclick(e){
    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.type;
    console.log(val);
    e.preventDefault();
}**/

document.querySelector('.mi-boton').addEventListener('click', sumar);

function sumar(e) {
    const num1 = 12;
    const num2 = 26;
    let resultado;
    resultado = num1 + num2;
    console.log(resultado);
    e.preventDefault();
}

document.querySelector('.mi-boton2').addEventListener('click', operacion);

function operacion(e) {
    const entrada1 = Number(prompt());
    const entrada2 = Number(prompt());
    suma = entrada1 + entrada2;
    alert(`La suma es = ${suma}`);
    e.preventDefault();
}

// ejercicio con clases y eventos  
class Persona{
    constructor(cedula, nombre, apellido, edad, sexo ){ // como crear una clase con su constructor     
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }
}
class registro{
    addregistro(persona){   // Crear funcniones dentro de una clase 
       const listaRegistro = document.getElementById('lista-registro');
       const elemento = document.createElement('li');
       elemento.innerHTML = `
        <p>cedula : ${persona.cedula} - nombre: ${persona.nombre} - apellido: ${persona.apellido} - edad: ${persona.edad} - sexo: ${persona.sexo}</p>`;
       listaRegistro.appendChild(elemento);
    }
     
    resetForm() {
        document.getElementById('form-persona').reset(); // Limpiar el formulario 
    }
}
// crear el evento del formulario 
document.getElementById('form-persona').addEventListener('submit', function(e){
      
    // llamar los datos que se ingresaron desde el formulario
    const cedula = document.getElementById('cedula').value,
          nombre = document.getElementById('nombre').value,
          apellido = document.getElementById('apellido').value,
          edad = document.getElementById('edad').value,
          sexo = document.getElementById('sexo').value;

    const people = new Persona(cedula, nombre, apellido, edad, sexo); // instanciar una clase con paramtros
    const register = new registro();

     // validacion de un formulario 
    if (cedula=== '' || nombre==='' ||  apellido==='' || edad==='' || sexo==='' ) {
              
            console.log('Por favor llenar todos los campos');
    }else{
    register.addregistro(people);  //llamar las funciones de una clase
    console.log('registro exitoso');
    register.resetForm();
    e.preventDefault();  // evita que se actualize la pagina
    }
});