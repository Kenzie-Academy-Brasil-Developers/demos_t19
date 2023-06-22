// Formatação de data
function formataDecimalData(num) {
  num = `${num}`;

  if (num.length < 2) {
    return "0" + num;
  }

  return num;
}

let dia = 2;
let mes = "6";
const ano = "23";

// 20/06/2023
// dia/mes/ano

const dataCompleta = `${formataDecimalData(dia)}/${formataDecimalData(
  mes
)}/${ano}`;

// console.log(formataDecimalData(2)); // "02"
// console.log(formataDecimalData(30)); // "30"
// console.log(dataCompleta);

// Função que verifica se um número é par

function ePar(numero) {
  if (numero % 2 === 0) {
    return true;
  }

  return false;
  console.log("Não cheguei aqui");
}

// console.log(ePar(3));
// console.log(ePar(112));

// Função que verifica se o segundo parâmetro é divisor do primeiro parâmetro

// No-else-return -> Não utilizar o else, mas somente um return
function eDivisor(numero, divisor) {
  if (numero % divisor === 0) {
    return true;
  }

  return false;
}

// console.log(eDivisor(111, 3)); //true
// console.log(eDivisor(111, 11)); //false
// console.log(eDivisor("a", "a")); //false

// -----------------------------------
// Atribuindo uma função em uma variável
function vaca() {
  return "muuuuuuuu";
}

const mimosa = vaca;
console.log(vaca());
console.log(mimosa());

// --------------------------------
// Tira-dúvidas

// function eDivisor(numero, divisor) {
//   if (numero % divisor === 0) {
//     return true;
//   }

//   return false;
// }

// const entradaNumero = prompt("Digite um número");
// const entradaDivisor = prompt("Digite o divisor");

// const resultadoUsuario = eDivisor(entradaNumero, entradaDivisor);
// const resultadoInterno = eDivisor(4, 3);

// console.log(resultadoUsuario);
// console.log(resultadoInterno);

// -----------------------------
// function ePar(numero) {
//   return numero % 2 === 0;
// }

// console.log(ePar(2)); //true
// console.log(ePar(7)); //false