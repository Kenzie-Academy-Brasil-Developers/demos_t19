// TESTE DE MESA
let soma = 12;
soma += 15;
soma = soma / 27;
soma *= 15;
soma -= 3;
soma = soma / 4;

// console.log(soma);

const base = 10;
const altura = 10;

const areaIdeal = 150;
let area = base * altura;
area = area * 4;
// console.log(area);

if (area < areaIdeal) {
  // Avisar usuário que houve um erro
  //   console.log("A casa é muito pequena");
} else {
  // Fazer um filtro no site para o usuário
  //   console.log("Vou comprar a casa");
}

let acesso = false;
const nome = prompt("Digite seu nome:");

if (nome === "Vilson") {
  const senha = prompt("Digite sua senha:");
  if (senha === "12345") {
    const idade = prompt("Digite sua idade:");

    if (idade >= 18) {
      const instituicao = prompt("digite sua instituição:");
      if (instituicao === "Kenzie") {
        acesso = true;
      }
    }
  }
}

if (nome === "Thiago") {
  const senha = prompt("Digite sua senha:");
  if (senha === "#Batatinha123") {
    const idade = prompt("Digite sua idade:");
    const instituicao = prompt("digite sua instituição:");

    if (idade >= 18 && instituicao === "Kenzie") {
      acesso = true;
    }
  }
}

if (acesso === true) {
  alert("Você tem acesso!");
} else {
  alert("Você não tem acesso!");
}
