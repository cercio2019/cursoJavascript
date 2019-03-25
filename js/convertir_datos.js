/**
    3 parte : convertir tipo de datos
*/

let valor;

valor =  String(46756857);

console.log(valor);
console.log(typeof valor);
console.log(valor.length);


let valor2;

valor2 =  String([1,2,3,4,5,6,7,8,9,0]);

console.log(valor2);
console.log(typeof valor2);
console.log(valor2.length);

let fecha;
fecha =  String(new Date());

console.log(fecha);
console.log(typeof fecha);
console.log(fecha.length);

// converir una cadena a numero

let valor3;
valor3 = Number('34');

console.log(valor3);
console.log(typeof valor3);
console.log(valor3.toFixed());


let valor4;
valor4 = Number(false);

console.log(valor4);
console.log(typeof valor4);
console.log(valor4.toFixed());


let valor5;
valor5 = Number('cercio');

console.log(valor5);
console.log(typeof valor5);
console.log(valor5.toFixed());


let valor6;
valor6 = parseFloat('23.58');

console.log(valor6);
console.log(typeof valor6);
console.log(valor6.toFixed(2));

const num1 = String(12);
const num2 = 45;

const sumar =  Number(num1+num2);

console.log(sumar);
console.log(typeof sumar);





