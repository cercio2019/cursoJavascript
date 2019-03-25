const numero = '3';

if (numero === '3') {
  console.log('el numero es correcto');
} else {
  console.log('el numero es incorrecto');
}

const edad = 17;

if (edad > 18) {
  console.log('Ya eres todo un viejo');
} else {
  console.log('Eres un carajito a penas');
}

const nombre = 'simon';
const nota = 13; 

if (nombre === 'cercio' && nota == 20) {
      
      console.log(`${nombre} es un genio`);

} else if( nombre === 'cercio' && nota < 10) {

      console.log(`${nombre} puede mejorar` );

} else if(nombre === 'simon' && nota <10){

      console.log(`${nombre} eres muy bruto` );

}else if (nombre=== 'cercio' || nombre=== 'simon' && nota <= 15){
      
      console.log('Estan mejorando muchachos');

}else{
	console.log(`${nombre} vas bien pero todavia te falta para estar a nivel de cercio`);
}

let diaSemana;

switch(new Date().getDay()){
  
    case 0:
    diaSemana = 'Domingo';
    materia = ['no hay materias', 'practicar programacion'];
    break;

    case 1:
    diaSemana = 'Lunes';
    materia = ['gerencia de la informatica', 'Implantacion de sistemas'];
    break;

    case 2:
    diaSemana = 'Martes';
    materia = ['simulacion y modelos', 'Redes'];
    break;

    case 3:
    diaSemana = 'Miercoles';
    materia = ['metodologia de la investigacion', 'simulacion y modelos', 'Redes', 'Implantacion de sistemas'];
    break;

    case 4:
    diaSemana = 'Jueves';
    materia = ['metodologia de la investigacion'];
    break;

    case 5:
    diaSemana = 'Viernes';
    materia = ['gerencia de la informatica'];
    break;

    case 6:
    diaSemana = 'Sabado';
    materia = ['Cultura y folclor'];
    break;
}

console.log(diaSemana);
console.log(materia);

console.log(`Hoy es ${diaSemana} Materias de hoy: ${materia} `);

html = ` <h3> Hoy es ${diaSemana} </h3> 

          <p> Materias de hoy: ${materia} </p> `;

  document.body.innerHTML=html;        