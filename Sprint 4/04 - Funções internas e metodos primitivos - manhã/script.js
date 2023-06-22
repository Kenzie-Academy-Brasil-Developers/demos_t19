// Funções internas -> Funções criadas dentro de outras funções

function calculadora(
  primeiroNumero,
  segundoNumero,
  operador,
  callbackMensagem
) {
  // Declarações de funções auxiliares
  function somar(num1, num2) {
    return num1 + num2;
  }
  function subtrair(num1, num2) {
    return num1 - num2;
  }
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  function dividir() {
    return primeiroNumero / segundoNumero;
  }

  function vericarOperacao() {
    if (operador === "+") {
      return somar(primeiroNumero, segundoNumero);
    } else if (operador === "-") {
      return subtrair(primeiroNumero, segundoNumero);
    } else if (operador === "*") {
      return multiplicar(primeiroNumero, segundoNumero);
    } else if (operador === "/") {
      return dividir();
    }

    return "Operação inválida!";
  }

  const resultado = vericarOperacao();
  const mensagem = callbackMensagem();

  return `${mensagem} Seu calculo de ${primeiroNumero} ${operador} ${segundoNumero} resultou em: ${resultado}`;
}

// console.log(calculadora(5, 10, "+")); //15
// console.log(calculadora(5, 10, "-")); // -5
// console.log(calculadora(5, 10, "/")); // 0.5
// console.log(calculadora(5, 10, "*")); // 50
// console.log(calculadora(5, 10, "aaaa")); // Operação inválida!

// Callback -> Funções que são passadas/utilizadas como parâmetros de funções

function mensagemDia() {
  return "Bom dia!";
}

function mensagemNoite() {
  return "Boa noite!";
}

console.log(calculadora(5, 10, "+", mensagemNoite)); //15
// console.log(calculadora(5, 10, "-", mensagemDia)); //-5
// console.log(calculadora(5, 10, "/", mensagemDia)); //0.5

// ---------------------------------------------------
// Metodos Primitivos

// String
const frase = "Fomos comprar batatas no supermercado, mas não havia batatas!";

// replace
// console.log(frase.replace("batatas", "cenouras"));
// console.log(frase.replace("supermercado", "fruteira"));

// replaceAll
// console.log(frase.replaceAll("batatas", "cenouras"));

// startsWith
// console.log(frase.startsWith("Fomos")); // true
// console.log(frase.startsWith("comprar")); // false
// console.log(frase[6]); // "c"
// console.log(frase.startsWith("comprar", 6)); // true

// includes
// console.log(frase.includes("comprar"));
// console.log(frase.includes("Fomos"));
// console.log(frase.includes("comprar batatas no supermercado"));
// console.log(frase.includes("a"));

// Number
const inteiro = 10;
const decimal = 9.9333333333;

// toFixed
// console.log(inteiro.toFixed(2));
// console.log(decimal.toFixed(2));

// isInteger
// console.log(Number.isInteger(inteiro));
// console.log(Number.isInteger(decimal));
// console.log(Number.isInteger(6.555));

// parseInt
// console.log(Number.parseInt(decimal));
// console.log(Number.parseInt("100.555"));

// parseFloat
// console.log(Number.parseFloat(inteiro));
// console.log(Number.parseFloat("100.555"));

// toString
// console.log(inteiro.toString());
// console.log(decimal.toString());

// -------------------------------------
// Tira dúvidas

// const data = new Date();
// console.log(data);
