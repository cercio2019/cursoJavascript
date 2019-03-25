const boton = document.querySelector('.mi-boton3');
const caja = document.querySelector('.container');

//boton.addEventListener('click', ejecutar);  // evento click

//boton.addEventListener('dblclick', ejecutar);  // evento doble click

//boton.addEventListener('mousedown', ejecutar);  // evento mouse down

//boton.addEventListener('mouseup', ejecutar);  // evento mouse up

//boton.addEventListener('mouseenter', ejecutar);  // evento mouse enter

//boton.addEventListener('mouseleave', ejecutar);  // evento mouse leave

//boton.addEventListener('mouseover', ejecutar);  // evento mouse over

//boton.addEventListener('mouseout', ejecutar);  // evento mouse out

caja.addEventListener('mouseenter', ejecutar);  // evento mouse enter dentro de una caja
//caja.addEventListener('mousemove', ejecutar);  // evento mouse move dentro de una caja

function ejecutar(e){
    console.log(`El tipo de evento: ${e.type}`);
    e.preventDefault();
}