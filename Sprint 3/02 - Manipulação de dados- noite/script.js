/*

console.log('Testando aplicação');

let variavel1 = 0;
const variavel2 = 0;
var variavel3 = 0;

const texto = 'Kenzie Academy';
const numero = 123;
const float = 3.14;
const boleano = true;
*/

// Conteudo da demo S3-02

// Manipulação de dados (string)
let a = 'Kenzie';
let b = 'Academy';
let resultado = a + ' ' + b + ' Brasil'; //Concatenação
let resultado2 = `${a} ${b} EUA`; //template-string

console.log(resultado);
console.log(resultado2);

//resultado = 'Kenzie Academy'
// Frase:    'K e n z i e   A c a  d  e  m  y'
// indices :  0 1 2 3 4 5 6 7 8 9  10 11 12 13
// posições:  1 2 3 4 5 6 7 8 9 10 11 12 13 14

resultado = 'Kenzie Academy Brasil'

const caractere = resultado[0]; 
console.log(caractere);

const tamanho = resultado.length;
console.log(tamanho);

const ultimoIndice = tamanho - 1;
console.log(ultimoIndice);

const caractere2 = resultado[ultimoIndice]; 
console.log(caractere2);

const nomeCompleto = 'Thiago Koman';
const abreviacao = nomeCompleto[0] + nomeCompleto[7];
console.log(abreviacao);

/*
() - parentesis: parametro ou separação lógica de conteúdo
[] - colchetes: acesso através de indices ou parametros
{} - chaves: escopo
*/

// Entrada e saida de dados
// alert('Sua senha expirou');


let nome = prompt('Digite seu nome:');
let sobrenome = prompt('Digite seu sobrenome:');

let abreviacao2 = nome[0] + sobrenome[0];

alert('Seu apelido,a partir de agora é: ' + abreviacao2);



// Calculadora de IMC
// IMC = peso / altura²

let peso = parseInt(prompt('Digite seu peso'));
let altura = parseFloat(prompt('Digite sua altura'));

let imc = peso / (altura**2);
let imc2char = imc.toFixed(2);

alert('Seu IMC é '+ imc2char );



// Comparadores
/*
== - igualdade
=== - igualdade e tipo
!= - diferença
!== - diferença e tipo
> - maior
< - menor
>= - maior igual
<= - menor igual
*/

