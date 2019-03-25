const nombre ='CERCIO';
const apellido ='viloria';

let estudiante;

estudiante= nombre+' '+apellido;

console.log(estudiante);


 valor = 'simon';
 valor += ' viloria';

console.log(valor);

let mensaje = 'mi nombre es: '+ valor +' y soy marico';
console.log(mensaje);

let letra = apellido[0];
console.log(letra);

mayuscula = nombre.toUpperCase(); //MAYUSCULA
mayuscula = nombre.toLowerCase(); //MINUSCULA
console.log(mayuscula);

valor2 = nombre.charAt('2');


valor2 = nombre.lastIndexOf('C'); //buscar la ultima posicion de la letra seleccionada
valor2 = nombre.indexOf('C'); //buscar la primera posicion de la letra seleccionada

valor2 = apellido.charAt(apellido.length - 1); //muestra la ultima letra de cadena seleccionada

equipos = 'real madrid , barcelona , manchester united , juventus';
valor2 =  equipos.split(',');

valor2 = equipos.replace('juventus', 'PSG');

valor2 = nombre.slice(0,2);

valor2 = nombre.substring(0,3);

console.log(valor2);





