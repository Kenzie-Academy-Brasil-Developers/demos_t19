// 4. Desafio da calculadora: Crie uma calculadora simples que solicita ao usuário dois números e uma operação (adição, subtração, multiplicação ou divisão). Em seguida, exiba o resultado da operação. Use condicionais para verificar qual operação foi selecionada e realizar o cálculo correto.

let resultado = 0;

//  - Solicitar ao usuário o primeiro número
const primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
console.log(primeiroNumero);

//  - Solicitar ao usuário uma operação (adição - "+", subtração - "-", multiplicação - "*" ou divisão - "/")
const operacao = prompt("Digite qual operação deseja realizar");
console.log(operacao);

//  - Solicitar ao usuário o segundo número
const segundoNumero = parseFloat(prompt("Digite o segundo número:"));
console.log(segundoNumero);

//  - Use condicionais para verificar qual operação foi selecionada e realizar o cálculo correto.

if (operacao === "+") {
  // adição -> +
  resultado = primeiroNumero + segundoNumero;
} else if (operacao === "-") {
  // subtração -> -
  resultado = primeiroNumero - segundoNumero;
} else if (operacao === "*") {
  // multiplicação -> *
  resultado = primeiroNumero * segundoNumero;
} else if (operacao === "/") {
  // divisão -> /
  resultado = primeiroNumero / segundoNumero;
} else if (operacao === "**") {
  // Potenciação -> **
  resultado = primeiroNumero ** segundoNumero;
} else {
  alert("Você utilizou um operador inválido!");
}

//  - exiba o resultado da operação.
alert(`Resultado: ${resultado}`);

// 6. Desafio do jogo de advinhação: Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é o número. O jogo deve informar se o número inserido pelo usuário é maior ou menor do que o número secreto.

// - O computador escolhe um número aleatório entre 1 e 100
let numeroAleatorio = Math.random() * (100 - 1) + 1;
numeroAleatorio = parseInt(numeroAleatorio);
console.log(numeroAleatorio);

// - O usuário tem que adivinhar qual é o número
const entradaNumero = parseInt(prompt("Digite o número:"));

// - Informar se o número inserido pelo usuário é maior ou menor do que o número secreto.
if (entradaNumero > numeroAleatorio) {
  // é maior do que o número secreto
  alert("O número inserido é maior do que o número secreto!");
} else if (entradaNumero < numeroAleatorio) {
  // é menor do que o número secreto
  alert("O número inserido é menor do que o número secreto!");
} else if (entradaNumero === numeroAleatorio) {
  // Se acertou o número
  alert("Você acertou o número secreto!");
} else {
  // inseriu um valor inválido
  alert("Valor inválido, não é um número!");
}
