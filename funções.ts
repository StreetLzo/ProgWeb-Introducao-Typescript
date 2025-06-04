// ** FUNÇÕES **

//Fução tradicional
function saudacao(nome: string): string{
    return `ola, ${nome}`
}

console.log(saudacao('camila'))


//arrow function
const soma = (x: number, y: number): number => x + y;
console.log('soma:', soma (2,3))

//função messagem
function mensagem(texto: string = 'bem vindo(a)!'){
    console.log(texto);
}

//função com parametro opcional
function apresentar(nome?: string){
    if(nome){
        console.log('Olá, $(nome)');
    }
    else{
        console.log('Olá')
    }
}