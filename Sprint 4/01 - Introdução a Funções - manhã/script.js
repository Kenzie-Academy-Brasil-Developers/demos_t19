// const numero = 5;

// if (numero < 11) {
//   console.log("É menor");
// }

// if (numero < 11) {
//   console.log("É menor");
// }
let nome = "Lorena";
// darBoasVindas();

function darBoasVindas() {
  console.log(`Seja muito bem-vindo(a) ${nome}!`);
}

nome = "Luiz";
// darBoasVindas();

// --------------------------------------------------------
//  Funções sem Entrada

// function calculadora() {
//   const primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
//   const operacao = prompt("Digite a operação:");
//   const segundoNumero = parseFloat(prompt("Digite o segundo número:"));

//   if (operacao === "+") {
//     return primeiroNumero + segundoNumero;
//   } else if (operacao === "-") {
//     return primeiroNumero - segundoNumero;
//   } else if (operacao === "*") {
//     return primeiroNumero * segundoNumero;
//   } else if (operacao === "/") {
//     return primeiroNumero / segundoNumero;
//   } else {
//     return "Operação invalida!";
//   }
// }

// const resultado = calculadora();
// console.log(resultado);

// --------------------------------------------------
// Funções com Entrada

function calculadora(primeiroNumero, segundoNumero, operacao) {
  if (operacao === "+") {
    return soma(primeiroNumero, segundoNumero);
  } else if (operacao === "-") {
    return subtracao(primeiroNumero, segundoNumero);
  } else if (operacao === "*") {
    return primeiroNumero * segundoNumero;
  } else if (descobrirOperaçãoDivisao(operacao)) {
    return primeiroNumero / segundoNumero;
  } else {
    return "Operação invalida!";
  }
}

// console.log(calculadora(5, "+", 10));
// console.log(calculadora(5, 10, "+"));

// const numUm = parseFloat(prompt("Digite o primeiro número:"));
// const op = prompt("Digite a operação:");
// const numDois = parseFloat(prompt("Digite o segundo número:"));

// let resultado = calculadora(numUm, numDois, op);
// console.log(resultado);

// resultado = calculadora(resultado, 6, "*");
// console.log(resultado);

// console.log(calculadora(6, 5, "-"));
// console.log(calculadora(5, 6, "+")); //11
console.log(calculadora(11, 12, "-")); //9
// console.log(calculadora(2, 12, "*")); // 24
// console.log(calculadora(20, 5, "/")); //4

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

// ----------------------------------------
// const entradaBase = parseInt(prompt("Digite a base"));
// const entradaAltura = parseInt(prompt("Digite a altura"));

function descobrirAreaTriangulo(base, altura) {
  //multiplicando a base pela altura e dividindo por dois
  const resultado = (base * altura) / 2;
  return resultado;
}

// console.log(descobrirAreaTriangulo(entradaBase, entradaAltura));

// ------------------- Tira-dúvidas -----------------
function descobrirOperaçãoDivisao(operacao) {
  //   console.log("Passei por aqui!");
  //   console.log(operacao === "/");
  return operacao === "/";
}

// ------------------------------------------------

// - O computador escolhe um número aleatório entre 1 e 100
let numeroAleatorio = Math.random() * (100 - 1) + 1;
numeroAleatorio = parseInt(numeroAleatorio);
// console.log(numeroAleatorio);

function adivinharNumero() {
  // - O usuário tem que adivinhar qual é o número
  const entradaNumero = parseInt(prompt("Digite o número:"));

  // - Informar se o número inserido pelo usuário é maior ou menor do que o número secreto.
  if (entradaNumero > numeroAleatorio) {
    // é maior do que o número secreto
    alert("O número inserido é maior do que o número secreto!");
    adivinharNumero();
  } else if (entradaNumero < numeroAleatorio) {
    // é menor do que o número secreto
    alert("O número inserido é menor do que o número secreto!");
    adivinharNumero();
  } else if (entradaNumero === numeroAleatorio) {
    // Se acertou o número
    alert("Você acertou o número secreto!");
  } else {
    // inseriu um valor inválido
    alert("Valor inválido, não é um número!");
    adivinharNumero();
  }
}

// adivinharNumero();
