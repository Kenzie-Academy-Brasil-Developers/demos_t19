// Desafio importado do Codewars:
// Seu colega escreveu um loop simples para listar seus animais favoritos. Mas parece haver um pequeno erro de gramática, que impede o funcionamento do programa. Consertá-lo! :)

// Se você passar a lista de seus animais favoritos para a função, deverá obter a lista dos animais com ordenações e novas linhas adicionadas.

// Por exemplo, passando:
const animals = ["dog", "cat", "elephant", "Lion"];

// vai resultar em:

// list_animals(animals) == '1. dog\n2. cat\n3. elephant\n'

function favoritesAnimals(animalsArray) {
  let textList = "";

  for (let i = 0; i < animalsArray.length; i++) {
    // Adicionar animal ao texto
    textList += `${i + 1}. ${animalsArray[i]}\n`;
  }

  return textList;
}

const myAnimalsFavorites = favoritesAnimals(animals);
// console.log(myAnimalsFavorites);

//---------------------------------------------------------

// 3. Desafio da senha segura: Crie um formulário de cadastro que solicita ao usuário um nome de usuário e uma senha. A senha deve ter pelo menos oito caracteres Use condicionais para verificar se a senha atende a esses critérios e exiba uma mensagem de erro caso contrário e peça que o usuário tente novamente.

function cadastroUsuario() {
  // Crie um formulário de cadastro que
  for (let senhaValida = false; senhaValida === false; senhaValida) {
    // solicita ao usuário um nome de usuário e uma senha.
    const nome = prompt("Digite seu nome");

    // A senha deve ter pelo menos oito caracteres
    const senha = prompt("Digite sua senha");

    // Use condicionais para verificar se a senha atende a esses critérios
    if (nome === null || senha === null) {
      alert("Esperamos volte, sentiremos a sua falta.");
      senhaValida = true;
    } else if (senha.length >= 8) {
      alert("Seja muito bem vindo a plataforma!");
      senhaValida = true;
    } else {
      alert("Senha precisa ter pelo menos 8 caracteres.\nTente novamente!");
    }

    console.log(senhaValida);
  }
  // exiba uma mensagem de erro caso contrário
  // e peça que o usuário tente novamente
}

// cadastroUsuario();

//--------------------------------------------------------------
// 4. Desafio do jogo de adivinhação: Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é o número. O jogo deve informar se o número inserido pelo usuário é maior ou menor do que o número secreto, caso erre peça que o usuário tente novamente.

function adivinhaQualEONumero() {
  // o computador escolhe um número aleatório entre 1 e 100
  const numeroAleatorio = Number.parseInt(Math.random() * (100 - 0));

  for (let numero = null; numero !== numeroAleatorio; numero) {
    console.log(numeroAleatorio);
    //  usuário tem que adivinhar qual é o número
    numero = prompt("Qual é o número secreto?");
    // console.log(numero);

    //  O jogo deve informar se o número inserido pelo usuário é maior ou menor do que o número secreto
    if (Number.parseInt(numero) > numeroAleatorio) {
      alert(
        "Número escolhido é maior do que o número secreto!\nTente novamente!"
      );
    } else if (Number.parseInt(numero) < numeroAleatorio) {
      alert(
        "Número escolhido é menor do que o número secreto!\nTente novamente!"
      );
    } else if (Number.parseInt(numero) === numeroAleatorio) {
      numero = Number.parseInt(numero);
      alert("Parabéns, você é o vencedor!");
    } else if (numero === null) {
      alert("Que pena que desistiu, volte sempre!");
      numero = numeroAleatorio;
    } else {
      alert("Opção inválida!\nTente novamente!");
    }
  }
}

// adivinhaQualEONumero();
