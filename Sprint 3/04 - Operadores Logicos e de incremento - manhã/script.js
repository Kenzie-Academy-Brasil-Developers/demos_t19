// OPERADORES LÓGICOS -> E / OU / NEGAÇÃO

// E -> &&
// true && true -> true
// false && false -> false
// true && false -> false
// false && true -> false

// Exemplo 1
// const arroz = false;
// const feijao = true;

// if (arroz && feijao) {
//   console.log("Comprar arroz e feijão");
// } else {
//   console.log("Comprar espaguete");
// }

// if (arroz) {
//   if (feijao) {
//     console.log("Comprar arroz e feijão");
//   } else {
//     console.log("Comprar espaguete");
//   }
// } else {
//   console.log("Comprar espaguete");
// }

// OU - ||
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// Exemplo 2
// const entradaNome = "vilson";
// const entradaSenha = "#Batatinha123";

// if (
//   (entradaNome === "golimar" && entradaSenha === "12345") ||
//   (entradaNome === "vilson" && entradaSenha === "#Batatinha123")
// ) {
//   console.log("Acesso liberado!");
// } else {
//   console.log("Acesso negado!");
// }

// Exemplo 3
// const arroz = false;
// const feijao = false;

// if (arroz || feijao) {
//   console.log("Realizar compra!");
// } else {
//   console.log("Avisar meu amigo que não tinha arroz e nem feijão.");
// }

// if (arroz) {
//   console.log("Realizar compra!");
// } else if (feijao) {
//   console.log("Realizar compra!");
// } else {
//   console.log("Avisar meu amigo que não tinha arroz e nem feijão.");
// }

// if (arroz === "1kg" && feijao === "3kg") {
//   if (batata === "4kg" && (leite === "1l" || refrigerante === "1l")) {
//     console.log("realizar compra");
//   }
// } else {
//   console.log("Comprar espaguete");
// }

// NEGAÇÃO - ! -> Traz um booleano com valor inverso ao que seria retornado
// !true -> false
// !false -> true

// Exemplo 4
// const arroz = false;

// if (!arroz) {
//   console.log("Preciso repor arroz");
// } else {
//   console.log("Não precisa repor");
// }

// Exemplo 5
// const entradaNome = "vilson";
// const entradaSenha = "#Batatinha123";
// if (!(entradaNome === "vilson" && entradaSenha === "#Batatinha123")) {
//   console.log("Acesso negado!");
// } else {
//   console.log("Acesso liberado!");
// }

// INCREMENTO

// Somando
let soma = 0;
soma = soma + 1; // 1
soma = soma + 2; // 3

// soma = soma + 1
soma++; // 4

// soma = soma + 5
soma += 5; //9

// soma = soma + 1
++soma; // 10

console.log("Soma final:", soma);

// Subtraindo
let subtracao = 10;
subtracao = subtracao - 1; // 9

// subtracao = subtracao - 1
subtracao--; // 8

// subtracao = subtracao - 5
subtracao -= 5; // 3

// console.log("Subtração final:", subtracao);

// Multiplicando
let resultado = 2;
resultado = resultado * 3; // 6

// resultado = resultado * 2
resultado *= 2;

// Potenciação
resultado = resultado ** 2; //144

// console.log("Resultado da multiplicação:", resultado);

const x = true;
const z = true;

if (x && z) {
  console.log("Deu certo");
}

if (x && z) {
  console.log("Deu certo");
}
