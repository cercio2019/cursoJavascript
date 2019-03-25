
// JavaScript POO
function persona(nombre, apellido, fecha, nota1, nota2, nota3) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = new Date(fecha);
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;

    this.promedio = function(){
        const totalNota = this.nota1 + this.nota2 + this.nota3;
        const promedio = totalNota/3;
        return promedio;
    }
}

const individuo = new persona('cercio', 'viloria', '2-14-1995', 18, 15, 17);

console.log(` nombre y apellido : ${individuo.nombre} ${individuo.apellido}.
fecha de naciemto : ${individuo.fechaNacimiento}.
promedio del estudiante : ${individuo.promedio()}`);


// formas de crear un constructor
const nombre = 'cercio';
const nombre2 = new String('cercio'); // constructor con string

if (nombre2 === 'cercio') {
    console.log('es igual');
} else {
    console.log('no es igual');
}

//console.log(nombre2);

const numero1 = 1;
const numero2 = new Number(1); // constructor con numeros
console.log(numero2);

const obtnerResultado = new Function('a', 'b','return 4 + 5');
console.log(obtnerResultado());

const arreglo = new Array(1,2,3,4,5,6,7,8); // constructor con arreglos 
console.log(arreglo);

const objeto = new Object({nombre : 'cercio', apellido : 'Viloria'}); //constructor con objetos 
console.log(objeto);


// POO PROTOTIPOS

function trabajador(nombre, apellido, departamento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.departamento = departamento;
}
  // creacion de un prototipo
trabajador.prototype.mostrarSalario = function() {
    if (this.departamento === 'desarrollo web') {
       
       return '5000$'

    }else if (this.departamento === 'desarrollor movil') {
        
       return '10000$';

    }else if (this.departamento === 'desarrollo de videojuegos') {
        
       return '150000$';
    }
} 

const programador = new trabajador('cercio', 'viloria', 'desarrollo web');
const gamer = new trabajador('angel', 'rangel', 'desarrollo de videjuegos');

console.log(`Nombre : ${programador.nombre}.
Apellido : ${programador.apellido}.
Departamento : ${programador.departamento}.
Salario : ${programador.mostrarSalario()} `); // Imprimir por consola los atributos y prototiposs

console.log(gamer); 

// POO herencia 
 // crear una primera funcion
function mascotas(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}
// crear un prototipo de la primera funcion
mascotas.prototype.ficha = function() {
    return `Esta animal es un ${this.nombre} y es de tipo ${this.tipo}.`;
}

// crear una segunda funcion para heredar todo los atributos y funciones de la primera
function domesticos(nombre, tipo, apodo, edad) {
    mascotas.call(this, nombre, tipo); // heredar los atributos de la primera funcion
    this.apodo = apodo;
    this.edad = edad;
}
  //heredar un prototypo de la primera funcion
domesticos.prototype = Object.create(mascotas.prototype);

const animal = new domesticos('perro', 'domestico', 'dante', '1 año');

console.log(animal);
console.log(animal.ficha());


// creacion y utilizacion de objetos con POO
const prototipoPersona = {
    saludo : function() {
        return `Mi nombre es  ${this.nombre} ${this.apellido}.`;
    },

    casado: function(casado) {
        return `¿ ${this.nombre} esta casado ? : ${casado}. `;
    } 
}
   // forma de crear un objeto 
const persona1 = Object.create(prototipoPersona);
persona1.nombre = 'cercio';  //darle valores a objeto creado
persona1.apellido = 'viloria';

console.log(persona1.saludo());
console.log(persona1.casado('NO'));

// otra forma de crear objetos 
const persona2 = Object.create(prototipoPersona, {
    nombre : {value: 'Osveyri'},
    apellido : {value: 'Alvarado'}
});

console.log(persona2);
console.log(persona2.saludo());
console.log(persona2.casado('NO'));
