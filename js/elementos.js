//agregar elementos a una  lista
const li = document.createElement('li'); // crear un elemento
li.className = 'equipo';         // inidicar que clase tendra el elemento 
li.setAttribute('tittle', 'item de prueba'); //agregar un atributo 
li.appendChild(document.createTextNode('aguilas del zulia')); // introducir texto dentro del elemento
document.querySelector('ul.lista').appendChild(li); //indicar en que elemento padre se colocara el elemento

const li2 = document.createElement('li');
li2.className= 'equipo';
li2.setAttribute('tittle', 'item de prueba 2');
li2.appendChild(document.createTextNode('Bravos de margarita')); 
document.querySelector('ul.lista').appendChild(li2);

// prueba con un arreglo
const numeros = [1, 2, 34, 23, 12, 36, 10, 48];
for (let i = 0; i < numeros.length; i++) {   
    const li3 =document.createElement('li');
    li3.className = 'numeros-item';
    li3.appendChild(document.createTextNode(numeros[i]));
    document.querySelector('ul.numeros').appendChild(li3);
}

// como reemplazar un elemento
const nuevoElemento = document.createElement('h1'); //crear un nuevo elemento
nuevoElemento.id= 'nuevo-titulo';  //introducir un nuevo elemento 
nuevoElemento.appendChild(document.createTextNode('cercio el Master')); //introducir un nuevo texto al elemento
const antiguoElemento = document.getElementById('titulo'); //seleccionar el elemento que deseas reemplazar 
const padre = document.querySelector('.caja-titulo'); // seleccioanar el elemento padre
padre.replaceChild(nuevoElemento, antiguoElemento); // reemplazar el elemento 

// remover elementos
const todoList = document.querySelectorAll('li.equipo'); //seleccionar el elemento que deseas remover
//todoList[14].remove();
const listaCompleta = document.querySelector('ul.lista'); //elemento pàdre de donde deseas remover 
listaCompleta.removeChild(todoList[1]); // remover elemento seleccionado

// introducir atributos, enlaces clases por javascript
const primerLi = document.querySelector('li:first-child');
const link = primerLi.children[0]; //elegir el elemento  del arreglo
let val;
val = link.setAttribute('href', 'https://www.instagram.com/osve_alvarado/'); //introducir un enlace 
val = link.getAttribute('href');
val = link.className;    //mostrar la clase del elemento
link.classList.add('cachetona'); //agregar una clase
val = link.classList;  // mostrar todos las clases del elemento
val = link.setAttribute('tittle', 'osve alvarado'); // agregar un atributo
val =link;
console.log(val);