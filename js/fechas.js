let valor;

fecha = new Date();
fecha = new Date('02-05-1995');
fecha = new Date('02-05-1995 12:20:00');
fecha = new Date('02/14/1995 12:20:00');

valor = fecha;
console.log(valor);

hoy = new Date();

valor2 = hoy.getMonth();
valor2 = hoy.getDate();
valor2 = hoy.getDay();
valor2 = hoy.getFullYear();
valor2 = hoy.getHours();
valor2 = hoy.getTime();
valor2 = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();
console.log(valor2);

fecha.setMonth(4);
fecha.setDate(21);
fecha.setFullYear(1993);
fecha.setHours(14)+':'+fecha.setMinutes(30)+':'+fecha.setSeconds(12);
console.log(fecha);
