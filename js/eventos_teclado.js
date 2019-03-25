const formulario = document.querySelector('.form');
const entrada = document.getElementById('cedula');
const textosalida = document.getElementById('salida');
const pais = document.querySelector('select');
entrada.value= '';
// eventos de teclado
//entrada.addEventListener('keydown', ejecutar); // evento keydow
//entrada.addEventListener('keyup', ejecutar); // evento keyup
//entrada.addEventListener('keypress', ejecutar); // evento press
//entrada.addEventListener('focus', ejecutar); // evento focus
//entrada.addEventListener('blur', ejecutar); // evento blur
//entrada.addEventListener('cut', ejecutar); // evento cut
//entrada.addEventListener('paste', ejecutar); // evento paste
//entrada.addEventListener('input', ejecutar); // evento input
pais.addEventListener('change', ejecutar); // eventos change para selectores

function ejecutar(e){
    console.log(`El tipo de evento: ${e.type}`);
    textosalida.innerText = e.target.value; // para introducir texto dentro de un elemento a traves de un input 
    //e.preventDefault();
}

// ejercicio de eventos de teclado
const formulario2 = document.querySelector('.form2');
const insertNombre = document.getElementById('nombre2');
const insertDescripcion = document.getElementById('area');
const insertEspecialidad = document.querySelector('.especialidad');
const nombreSalida = document.getElementById('nombre-salida');
const descripcionSalida = document.getElementById('textogrande');
const especialidadSalida = document.getElementById('especializacion');

insertNombre.value = '';
insertDescripcion.value = '';

insertNombre.addEventListener('input', ingresarNombre);
insertDescripcion.addEventListener('input', ingresarDescripcion);
insertEspecialidad.addEventListener('change', ingresarEspecialidad);

function ingresarNombre(e) {
    console.log(e.type);
    nombreSalida.innerText = e.target.value; 
}

function ingresarDescripcion(e) {
    descripcionSalida.innerText = e.target.value; 
}

function ingresarEspecialidad(e) {
    especialidadSalida.innerText = e.target.value; 
}





