// Estrutura de repetição aninhada -> for aninhado
// Um laço de repetição dentro de outro

/*
[ Observar imagem 1-piramide-numerica.png com o enunciado do desafio ]

Crie uma função chamada piramideNumerica(tamanhoPiramide) que receba como argumento 
um número inteiro e imprima uma pirâmide numérica de tamanho tamanhoPiramide na tela.
Exemplo piramideNumerica(5):

1 
1  2 
1  2  3 
1  2  3  4 
1  2  3  4  5

Passos lógicos:

[x] - Criar um laço de repetição para criar linha
[ ] - Fazer a contagem dentro da linha
*/

// for (let i = 0; i < tamanhoPiramide; i++) {
//   let linha = "";

//   console.log("linha:", i);

//   for (let j = 0; j <= i; j++) {
//     console.log("Coluna:", j);
//   }

//   // linha = linha + i;
// }

function piramideNumerica(tamanhoPiramide) {
  // i -> indice
  for (let i = 1; i <= tamanhoPiramide; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
      linha = linha + `${j} `;
    }

    console.log(linha);
  }
}

// piramideNumerica(5);

// Arrays aninhados -> Arrays dentro de outro array

// const primeiroArray = [10, 20, 30, 40, 50]
// const segundoArray = [10, true, "batata", 10.5, [1, 2, 3, 4]]

const notasAlunos = [
  //[filosofia, portugues, matemática, geografia]
  [56, 46, 85, 100], // Aluno 1
  [70, 40, 60, 95], // Aluno 2
  [85, 51, 75, 98, 75], // Aluno 3
  [90, 80, 70, 88], // Aluno 4
  [100, 100, 100, 100], // Aluno 5
];

// Como acessar um array aninhado
// const notasAluno3 = notasAlunos[2];
// console.log(notasAluno3);

// const notaPortuguesAluno3 = notasAluno3[1];
// console.log(notaPortuguesAluno3);

// console.table(notasAlunos);
//                           array[linha][coluna]
const notaMatematicaAluno2 = notasAlunos[1][2];
// console.log(notaMatematicaAluno2);

// Laço de repetição com array aninhado

// Criando uma funcção que acessa cada nota

function listarNotas(arrayNotas) {
  console.table(arrayNotas);
  for (let i = 0; i < arrayNotas.length; i++) {
    const linha = arrayNotas[i];
    // console.log(linha);

    for (let j = 0; j < linha.length; j++) {
      console.log(linha[j], `(${i}, ${j})`);
    }
  }
}

// listarNotas(notasAlunos);

// Função que verifica se o aluno foi aprovado
/*
 Passos lógicos:
 [x] - Acessar notas de um aluno específico
 [x] - Somar todas as suas notas
 [x] - Calcular a média das notas
 [x] - Verificar se a média é maior ou igual à 75
    [x] - Se for, então mostrar mensagem de parabenização
    [x] - Caso contrário mostrar mensagem de recuperação
*/

function alunoAprovado(arrayNotas) {
  for (let i = 0; i < arrayNotas.length; i++) {
    //Acessar notas de um aluno específico
    const notasAluno = arrayNotas[i];
    console.log(notasAluno);
    let notaTotal = 0;
    let quantidadeProvas = notasAluno.length;

    // Somar todas as suas notas
    for (let j = 0; j < notasAluno.length; j++) {
      // console.log(notasAluno[j]);

      // notaTotal = notaTotal + notasAluno[j]
      // console.log(`${notaTotal} + ${notasAluno[j]}`);
      notaTotal += notasAluno[j];
      console.log(notaTotal);
    }

    // Calcular a média das notas
    const mediaNota = notaTotal / quantidadeProvas;

    //Verificar se a média é maior ou igual à 75
    if (mediaNota >= 75) {
      //Se for, então mostrar mensagem de parabenização
      console.log(`Parabéns, você foi aprovado com ${mediaNota}!`);
    } else {
      //Caso contrário mostrar mensagem de recuperação
      console.log(
        `Você entrou no processo de recuperação, sua nota atual é ${mediaNota}.`
      );
    }
  }
}

alunoAprovado(notasAlunos);
