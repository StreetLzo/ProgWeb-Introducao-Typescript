// ** artrarys e metodos de manipíulaçãol 

let notas: number[] = [6, 7, 8, 5];

//foreach
notas.forEach(n => console.log("Nota:", n)); //iterar sobres os elementos de uma coleção

//map
let notasAjustadas = notas.map( n => n + 0.5); //cria um novo array com resultados da chamada anterior


//filter
//criar um novo array contendo somente elementos que atendem uma condição especifica
let aprovados = notas.filter(n => n => 6);
 
//push e pop

notas.push(10); //adiciona um elemento na final do array
notas.pop();