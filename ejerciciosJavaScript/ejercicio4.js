function horario() {

    dia = new Date();
    valor = dia.getDay();

    let diaSemana;
    let materias;

    switch (valor) {
        case 0:
             diaSemana = "Domingo";
             materias = ['No hay materias'];
            break;
         
        case 1:
        diaSemana = "Lunes";
        materias = ['Gerencia de la Informatica', 'Implantacion de sistemas'];
        break;   
        
        case 2:
        diaSemana = "Martes";
        materias = ['Simulacion y modelo', 'Redes', 'Implantacion de sistemas'];
        break;
        
        case 3:
        diaSemana = "Miercoles";
        materias = ['Gerencia de la Informatica', 'Simulacion y modelo', 'Redes'];
        break;

        case 4:
        diaSemana = "Jueves";
        materias = ['Metodologia de la Investigacion'];
        break;

        case 5:
        diaSemana = "Viernes";
        materias = ['Metodologia de la Investigacion'];
        break;

        case 6:
        diaSemana = "Sabado";
        materias = ['Cultura y folklore'];
        break;
    }
   
    
    contenido = `<h2>Agenda del dia de hoy:</h2>
    <h4>Dia de la semana : ${diaSemana}</h4>
    <h4>Materias del dia: ${materias}</h4>
    `;
    
    return contenido;
}

const contenedor = document.querySelector('.contenedor');
const seccion = document.createElement('div');
seccion.innerHTML=horario();
contenedor.appendChild(seccion);

 