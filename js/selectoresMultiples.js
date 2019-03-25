
//let lista = document.getElementsByTagName('li');

//lista = Array.from(lista);

//lista.forEach(function(li) {
  //  li.textContent = 'cercio';
//})

//console.log(lista);

//const equipos = document.querySelectorAll('div.lista ul.lista-group li.lis-item');

//equipos.forEach(function(lista, index) {
  //  lista.textContent = ` ${index} : caracas `;
//});

const lisImpares =  document.querySelectorAll('li:nth-child(odd)');
const lisPares =  document.querySelectorAll('li:nth-child(even)');


console.log(lisImpares);

lisImpares.forEach(function(list) {
  list.style.background = 'yellow';
  list.style.padding = '10px';
});


lisPares.forEach(function(list2) {
  list2.style.background = 'blue';
  list2.style.color = '#fff';
  list2.style.padding = '10px';
});

const equiPares = document.querySelectorAll('li.equipo:nth-child(odd)');

for (let index = 0; index < equiPares.length; index++) {
    
    equiPares[index].style.background= 'red';
    equiPares[index].style.color= '#fff';  
}

const equiImpares = document.querySelectorAll('li.equipo:nth-child(even)');

for (let index = 0; index < equiPares.length; index++) {
    
    equiImpares[index].style.background= 'green';
    equiImpares[index].style.color= '#fff';  
}