//localStorage.setItem('nombre', 'cercio');
//sessionStorage.setItem('nombre', 'simon');

//nombre = localStorage.getItem('nombre');
//console.log(nombre);

document.querySelector('.formulario').addEventListener('submit', function(e) {
  const tarea = document.getElementById('tarea').value;
  
  let tareas ;
  if (localStorage.getItem('tareas')=== null) {
      tareas = [];
  }else{
      tareas = JSON.parse(localStorage.getItem('tareas'));
  }

  tareas.push(tarea);
  localStorage.setItem('tareas', JSON.stringify(tareas));
  alert('tarea guardada');
  e.preventDefault();
});

const tareas = JSON.parse(localStorage.getItem('tareas'));
tareas.forEach(function(tarea){
    console.log(tarea);
});