let a: number = 10;
let b: number = 17;

//Aritiméticos (+.-,*,/,%)
console.log('soma', a + b);
console.log('subtraçao', a - b);
console.log('multiplicacao', a * b);
console.log('divisao', a / b);
console.log('Resto', a % b);

//relacionais
console.log('igual', a == b);
console.log('diferenre', a != b);
console.log('maior que', a > b);
console.log('menor que', a < b);
console.log('maior ou igual', a >= b);
console.log('menor ou igual', a <= b);

//identidade Restrita
console.log('identico', a === b);
console.log('nao identico', a !== b);

//logicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//OPERADOR CONDICIONAL(TERNARIO)
let idade: number = 17;
let acesso = idade >= 18 ? 'permitido beijar na boca' : 'nao permitido'