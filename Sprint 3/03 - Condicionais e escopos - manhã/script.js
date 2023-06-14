// Comparadores

// == -> identico (verifica se os valores são identicos)
// === -> estritamente identico (verifica se os valores e o tipo de dado são identicos )

// != -> diferente (verifica se os valores são diferente)
// !== -> estritamente diferente (verifica se os valores e o tipo de dado são diferentes)

// < --> Menor que
// > --> Maior que
// <= --> Menor ou igual que
// >= --> Maior ou igual que

// Condicionais -> if / else if / else

const base = prompt("Digite a base da figura");
const altura = prompt("Digite a altura da figura");
const area = base * altura;

// Uma família precisa encontrar uma casa com o tamanho ideal.
// O tamanho ideal para família seria uma casa com uma área de 200 até 250.

if (area < 200) {
  // Se a área for menor que 200
  alert(
    `A área da casa é de ${area}. A casa é muito pequena, vamos desistir de comprar a casa.`
  );
} else if (area <= 250) {
  // Senão se a área for menor ou igual que 250

  if (altura > 20) {
    alert(
      "A casa é muito alta, temos medo de altura. Vamos desistir de comprar a casa"
    );
  } else {
    if (base > 15) {
      alert(
        `A área da casa é de ${area}, a altura é ${altura} e a base é ${base}. Vamos comprar a casa!`
      );
    } else {
      alert("A casa é muito curta. Vamos desistir de comprar a casa");
    }
  }
} else if (area <= 300) {
  alert(
    `A área da casa é de ${area}. Ela um pouco maior do que esperávamos, mas vamos comprar a casa!`
  );
} else {
  // Senão
  alert(
    `A área da casa é de ${area}. A casa é muito grande, vamos desistir de comprar a casa.`
  );
}

if (area > 1500) {
  alert("Vou recomendar para uma empresa de um conhecido");
}

// Usuário realizando o login
// const nomeUsuario = "golimar";

// const entradaNomeUsuario = prompt("Digite o nome do seu usuário:");

// let resposta = "";

// console.log(nomeUsuario === entradaNomeUsuario);
// if (nomeUsuario === entradaNomeUsuario) {
//   // se o nomeUsuario for estritamente igual à entradaNomeUsuario

//   resposta = `O usuário ${entradaNomeUsuario} fez o login com sucesso!`;
// } else {
//   resposta = `O usuário ${entradaNomeUsuario} não existe!`;
// }

// alert(resposta);

// Escopos - Não utilizar VAR
const global = "Escopo global";

{
  var local = "Escopo local";
}

console.log(global);
console.log(local);

// Problema:
// Uma família precisa encontrar uma casa com o tamanho ideal.
// O tamanho ideal para família seria uma casa com uma área de 200 até 250.
// Se for menor ou maior, a familia não vai ter interesse em comprar a casa
// Quando for o valor esperado pela família, então libere a compra

// - Ideal: 200 - 250
// - Muito pequeno: Menos de 200
// - Muito grande: Mais de 250
