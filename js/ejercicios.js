function calcularEdad(dia, mes, ano) {
   
    fechaActual = new Date();    
    diaHoy = fechaActual.getDate();
    mesHoy = fechaActual.getMonth();
    anoHoy = fechaActual.getFullYear(); 
    
    fechaNacimiento = new Date();
    fechaNacimiento.setDate(dia);
    fechaNacimiento.setMonth(mes);
    fechaNacimiento.setFullYear(ano);    
    diaNacimiento = fechaNacimiento.getDate();
    mesNacimiento = fechaNacimiento.getMonth();
    anoNacimiento = fechaNacimiento.getFullYear();

    if (anoHoy > anoNacimiento && mesHoy > mesNacimiento) {

        edad = anoHoy - anoNacimiento; 

    }else if (anoHoy > anoNacimiento && mesNacimiento > mesHoy) {

        edad = anoHoy - anoNacimiento - 1; 

    } else  if (anoHoy > anoNacimiento ) {
        
        edad = anoHoy - anoNacimiento;
    }

    return edad;
}

Miedad = calcularEdad(14, 1, 1995);
console.log(Miedad);

if (Miedad >= 50) {

    console.log('ERES DE LA TERCERA EDAD');

} else if (Miedad >= 18) {

    console.log('ERES DE LA SEGUNDA EDAD');

}else {
    console.log('ERES DE MENOR DE EDAD');
}

// Segundo ejercicio

function registroAlumno(cedula, nombre, apellido, edad, nota1, nota2, nota3){
     
   totalNotas = nota1 + nota2+ nota3;
   promedio = totalNotas / 3;

   if (promedio <= 10) {
       
       Nivel = 'Amateur';

   }else if ( promedio <= 15) {

    Nivel = ' Intermedio';  

   }else if (promedio >15){

    Nivel = 'Profesional';
       
   }else if (promedio = 20) {

    Nivel = 'MASTER';
       
   }
   
   registro = ` 
cedula :  ${cedula} . 
              
nombre : ${nombre} .
          
apellido : ${apellido} .

edad : ${edad} .
              
Java : ${nota1} .

php : ${nota2} .

Javascript : ${nota3} .

Promedio : ${promedio} . 

Nivel de programcion : ${Nivel} `;

   return registro;
}

console.log(registroAlumno('24162106', 'cercio', 'viloria', Miedad, 12, 16, 12));