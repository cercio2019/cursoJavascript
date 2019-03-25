function persona() {
	
	return 'cercio viloria';
}

console.log(persona());


function operaciones(num1, num2 , operacion) {
	
	switch(operacion){

		case 'suma':
		resultado = num1 + num2;
		break;

		case 'resta':
		resultado = num1 - num2;
		break;

		case 'multiplicacion':
		resultado = num1 * num2;
		break;

		case 'division':
		resultado = num1 / num2;
		break;
	}

	return resultado;
}

console.log(operaciones(10, 2, 'division'));

(function(apellido) {
	console.log('cercio '+apellido);
})('viloria');


// funciones dentro de una variable objeto

const crud = {
 
 agregar : function(id, nombre, apellido) {
 	
 	console.log('id: '+id+'  nombre: '+nombre+'  apellido: '+apellido);
 },

 eliminar : function(id) {
 	 console.log('deseas eliminar el usuario con el id: '+id);
 }

};

crud.agregar(23, 'delcy', 'simancas');

crud.eliminar(23);

