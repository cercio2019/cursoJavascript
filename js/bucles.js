for (var i = 0; i <= 15; i++) {

	if (i===5) {

        console.log('imprimir el numero 5');
        continue;
	}

  if (i===10) {
  	console.log('Aqui termina el bucle');
  	break;
  }
	console.log('numero '+i);
}


// imprimir un arreglo con forEach
mujeres= ['osveyri', 'marce', 'mary', 'yoharlis', 'andrea','yineily'];

mujeres.forEach(function(mujer, index) {
	console.log(`${index} : ${mujer}`);
});


// imprimir una variable de objetos
auto = {
	marca : 'ford',
	color : 'negro',
	modelo : '2017'
}

for (var i  in auto){
	console.log(` ${i} : ${auto[i]} `);
}

// imprimir un arreglo de objetos

datos= [
  {cedula : '24162106', nombre : 'cercio'},
  {cedula : '9014690', nombre : 'delcy'},
  {cedula : '74657445', nombre : 'marcelis'},
  {cedula : '45645645', nombre : 'osve'}
];

const nombres = datos.map(function (dates) {
	return ` cedula : ${dates.cedula}  nombre : ${dates.nombre}`;
});

console.log(nombres);


//imprimir un arreglo con for 
const  equipos= ['real madrid', 'barcelona', 'bayer Munich', 'machester city', 'juventus', 'PSG', 'Chelsea' , 'Liverpool'];

for (var i = 0; i < equipos.length; i++) {
	
	console.log( i+' : '+equipos[i]);
}


//imprimir un arreglo con while
c = 0;
while(c < equipos.length){

	console.log(equipos[c]);
	c++;
}

const frutas = ['manzana', 'fresa', 'naranja', 'pera', 'durazno'];

for (let i = 0; i < frutas.length; i++) {
	const element = frutas[i];
	console.log(element);
}

const multiplicador = 5;
a = 0;
while(a <= 10){
 
	resultado = multiplicador * a;	
	console.log(`${multiplicador} * ${a} = ${resultado} `);
	a++;
}

