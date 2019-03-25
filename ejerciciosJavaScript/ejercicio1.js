
// ejercicio 1 creacion de entradas de un formulario para integrates de una familia.

function GenerarEntradas(numero) {
    this.numero = Number(numero);

    this.Entradas = function() {
        for (let i = 1; i <= this.numero; i++) {
           
         const nuevoEntrada = document.createElement('div');
         nuevoEntrada.innerHTML= `<h4>Integrante numero ${i}</h4>
         <input type="text" name="" id="nro-integrantes">
         <input type="text" name="" id="nro-integrantes">
         <input type="text" name="" id="nro-integrantes">
         <input type="text" name="" id="nro-integrantes">
         <select>
         <option>Jefe de familia</option>
         <option>Segundo jefe de familia</option>
         <option>hijo</option>
         </select>
         `;   
         const elementoPadre = document.getElementById('formularios');               
         elementoPadre.appendChild(nuevoEntrada);   
        }
    } 
}

const formCantidad = document.getElementById('cantidad');
formCantidad.addEventListener('submit', function(e) {
   
    const nroIntegrantes = document.getElementById('nro-integrantes').value;    
    const GE = new GenerarEntradas(nroIntegrantes);
    GE.Entradas();
    e.preventDefault();
});

