// console.log("teste");

// MANIPULAÇÃO DE DADOS
// const resultado = 10 + 10;
// console.log(resultado);

const nome = "James";
const sobrenome = "Junior";
const esporte = "basquete";
const tempo = 7;

// "James Junior é jogador de baisebol há 5 anos"
{
  //   const nomeCompleto = nome + " " + sobrenome + " é jogador de " + esporte + " há " + tempo + " anos";
  //   const nomeCompleto2 = `${nome} ${sobrenome} é jogador de ${esporte} há ${tempo} anos`;
  //   console.log(nomeCompleto2);
}

// Descobrindo quantidade de caracteres em uma String
const quantidadeLetrasNome = nome.length;
const quantidadeLetrasSobrenome = sobrenome.length;
// console.log(quantidadeLetrasNome);

const primeiraLetraNome = nome[0];
const primeiraLetraSobrenome = sobrenome[0];
const ultimaLetraNome = nome[nome.length - 1];

// nome.length -> 5
// "J A M E S"
// "0 1 2 3 4"

// console.log(nome.length - 1);
// console.log(ultimaLetraNome);

const abreviacaoNomeCompleto = primeiraLetraNome + primeiraLetraSobrenome;
// console.log(abreviacaoNomeCompleto);
