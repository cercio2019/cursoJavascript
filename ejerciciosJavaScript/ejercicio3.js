function getRandom(min, max) {
    return Math.floor(Math.random()* (max - min))+ min;
}

document.getElementById('mi-boton').addEventListener('click', function(e) {
    const lista = document.getElementById('numeros');
    let opcionesgeneradas;
    for (let i = 0; i <=20; i++) {
        
        opcionesgeneradas += `<option> ${getRandom(1, 100)} </option>`
    }

    lista.innerHTML= opcionesgeneradas;

});