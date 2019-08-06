function sumar(n1, n2){

    let resultado = n1 + n2;
   return `${n1} + ${n2} = ${resultado}`;
}

function restar(n1, n2){
    let resultado = n1 - n2;
   return `${n1} - ${n2} = ${resultado}`;
 }

let n1 = [2, 4, 5, 6, 7, 3, 8];

let n2 = [4, 5, 7, 6, 7, 8, 10];

for (let i = 0; i < n1.length; i++) {
   
    console.log(sumar( n1[i] , n2[i] ));
    console.log(restar( n1[i] , n2[i] ));
    
}
