const numeros= [12, 24, 56, 68, 45, 78, 46, 24, 59, 98 , 13, 12];

console.log(numeros);

function debajode30(numero) {
  return numero < 30;
}

valor= numeros.find(debajode30);

valor = numeros.sort();// ordenar arreglos

numeros.shift(); //quitar primer elemento
numeros.pop();  //eliminar ultimo elemento

valor= numeros.splice(1,3);

const numeros2=[34, 23, 67, 58, 99, 100, 23, 31, 78];

console.log(numeros2);

valor= numeros.concat(numeros2); //unir varios arreglos

valor2= valor.sort();

console.log(valor);

const combinacion= [112, 'cercio', false, null, {deporte: 'futbol', comida: 'pizza'}, 1.233];
combinacion[2]= 'osveyri'; //sustituir
combinacion.push('marcelis');// agregar
combinacion.unshift('betzabeth');// agregar al principio
console.log(combinacion);

valor3 = valor.concat(combinacion);

console.log(valor3);

const datos= { 
   nombre : 'cercio',
   apellido : 'viloria',
   edad : 24,
   carrera : 'ingenieria de sistemas',
   pasatiempos : ['programar', 'futbol'],
   amigos : ['marce', 'yenni' , 'freitez'],
   anoNaciemto: function(){
   	 return 2019 - this.edad;
   },

   habilidades: {
   	habilidad_1 : 'javascript',
   	habilidad_2 : 'php',
   	habilidad_3 : 'html',
   	habilidad_4 : 'Mysql'
   }
}

let valor4;

valor4 = datos.nombre;
valor4 = datos.anoNaciemto();
valor4 = datos.pasatiempos[0];
valor4 = datos.amigos;
valor4 = datos.carrera;
valor4 = datos.habilidades;

console.log(valor4);

const agentes =[
   {nombre : 'cercio' , edad: 23},
   {nombre : 'marce' , edad: 23}
];

for(let i=0; i < agentes.length; i++){

	console.log(agentes[i].nombre);
}

