// Formatação de data
function formataDecimalData(num) {
  num = `${num}`;

  // Alternativa para formatação:
  // const formatString = num.toString();
  // console.log(num.toString().padStart(2, "0"));

  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
}

function formataAno(ano) {
  const formatString = `${ano}`;
  if (formatString.length <= 2) {
    if (ano <= 23) {
      return "20" + formatString;
    } else {
      return "19" + formatString;
    }
  } else {
    return formatString;
  }
}

let dia = 2;
let mes = "6";
const ano = "23";

// 20/06/2023
// dia/mes/ano

const dataCompleta = `${formataDecimalData(dia)}/${formataDecimalData(
  mes
)}/${formataAno(ano)}`;

console.log(dataCompleta);

const mensagem = `Olá, hoje é dia ${dia}!`;
console.log(mensagem);

// ---------------------------------------------------------------
// Escopos

// Escopo Global
const global = "global";

// Escopo de Bloco
{
  //   console.log(global);
  const escopoBloco = "bloco";
  //   console.log(escopoBloco);
}

// console.log(escopoBloco);

// Escopo de Função
function funcao() {
  //   console.log(global);
  var escopoFuncao = "função";
  escopo = "Escopo"; // Por traz dos panos se torna um var
  //   console.log(escopoFuncao);
  if (true) {
    // console.log(escopoFuncao);
  }
}

funcao();
// console.log(escopoFuncao);

// Tira-dúvidas
// Exercício: Descobrir qual é o número maior entre n1, n2 e n3

// -> n1 é o maior
// -> n2 é o maior
// -> n3 é o maior

// num1 é maior que o num 2 e o num2 é maior que num3
// n1 > n2 > n3
