// ===TIPOS EM TYPESCRIPT===

//tipos primitivos
let texto: string = "hello world";
let numero: number = 1951;
let ativo: boolean = true;


//arrays
let numeros; [] = [1,2,3,4,5,] //primeira forma de criar array
let palavras: Array<string> = ['typescript', 'é', 'massa']

//tuplas
let pessoa: [string, number] = ['joao', 25]

//enum
enum Cores{
    verde,
    branco
}
let corfavorita: Cores = Cores.verde;

//any levitar sempre que possivel
let timeFavorito: Cores = Cores.verde;

//Any (evitar sempre que possivel)
let timeRuim: any = 'Real Madrid';
timeRuim = 0
timeRuim = false

//Unknow (tipo mais seguro do any)
let timeDesconhecido: unknown = 'Vasco';

//void
function mostrarAlerta(): void{

    console.log('atencao! parmera campeao' )
}

//null e undefied
let nada: null = null
let indefinido: undefined = undefined;

//never (usado quando e funçao nunca retorna)
function errofatal(mensagem:string): never{
    throw new Error(mensagem)
}

//type aliases
type Usuario = {
    nome: string;
    idade: number;

}

let usuario1: Usuario = {nome:'Felipe', idade: 17}