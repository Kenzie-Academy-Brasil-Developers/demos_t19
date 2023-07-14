/*
<li class="posicao"></li>
*/

let posicoesNavios = [];
const jogadasExecutadas = [];

/*
  Jogo batalha naval:
  - criar um tabuleiro de 5x5 para o jogo batalha naval.
    - criar 25li e adicionar a ul do html
    - a cada li, adicionar a classe de estilização
    - a cada li, adicionar um evento de clique, representando
    o palpite do usuario.
    - criar uma forma de identificar qual li foi clicada
    - definir em quais posições do tabuleioro os navios estarão
    - comparar a posição da li clicada com as posições dos navios alocados
    - verificar se o usuario acertou todos os navios
*/

function criarTabuleiro(tabuleiroDOM) {
  for (let linha = 0; linha < 5; linha++) {
    for (let coluna = 0; coluna < 5; coluna++) {
      const liPosicao = document.createElement("li");
      liPosicao.classList.add("posicao");
      liPosicao.innerText = `${linha}, ${coluna}`;

      liPosicao.setAttribute("linha", linha);
      liPosicao.setAttribute("coluna", coluna);

      liPosicao.addEventListener("click", eventoCliquePosicao);

      tabuleiroDOM.appendChild(liPosicao);
    }
  }
}

function eventoCliquePosicao(evento) {
  // console.log("entrou");
  const liAtual = evento.target;
  const linhaValor = liAtual.getAttribute("linha");
  const colunaValor = liAtual.getAttribute("coluna");

  // console.log(evento.composedPath()[1]);
  console.log(evento.target.parentElement);

  if (valorExisteNoArray(posicoesNavios, linhaValor, colunaValor)) {
    liAtual.style.background = "green";
    // console.log(`acertou navio!!!! ${linhaValor}, ${colunaValor}`);
  } else {
    liAtual.style.background = "red";
  }

  jogadasExecutadas.push([linhaValor, colunaValor]);
  verificarCondicaoDeVitoria();
  // console.log(jogadasExecutadas);
}

function valorExisteNoArray(array, linhaValor, colunaValor) {
  let encontrado = false;

  for (let contador = 0; contador < array.length; contador++) {
    const linha = array[contador][0];
    const coluna = array[contador][1];

    if (linha == linhaValor && coluna == colunaValor) {
      encontrado = true;
      break;
    }
  }

  return encontrado;
}

function verificarCondicaoDeVitoria() {
  let contador = 0;

  for (let i = 0; i < jogadasExecutadas.length; i++) {
    const palpiteLinha = jogadasExecutadas[i][0];
    const palpiteColuna = jogadasExecutadas[i][1];

    for (let j = 0; j < posicoesNavios.length; j++) {
      const navioLinha = posicoesNavios[j][0];
      const navioColuna = posicoesNavios[j][1];

      if (navioLinha == palpiteLinha && navioColuna == palpiteColuna) {
        contador++;
      }
    }
  }

  if (contador >= 3) {
    const resetarGame = confirm("Você venceu!!!");
    console.log(resetarGame);

    if (resetarGame) {
      window.location.reload();
    }
  }
}

function alocarNavios() {
  /*
    Desafio:
    Aprimorar a lógica para que a posição dos navios seja gerada
    aleatoriamente.
    - Dica -> Procurar sobre a biblioteca Math e Math.random
    - Gerar numeros INTEIROS entre 0 e 4.
    - Gerar linha e coluna da posicao do navio aleatoriamente.
      - Exemplo -> parseInt(Math.random() * 4)
  */

  const posicoesDosNavios = [
    // Navio 1
    [0, 3],
    // Navio 2
    [1, 2],
    // Navio 3
    [4, 3],
  ];

  return posicoesDosNavios;
}

function iniciarJogo() {
  const ulTabuleiro = document.querySelector(".tabuleiro");
  // 1. Criar o tabuleiro
  criarTabuleiro(ulTabuleiro);
  // 2. Alocar navios
  posicoesNavios = alocarNavios();
  console.log(posicoesNavios);
}

iniciarJogo();

// Explicação de dúvida sobre passar função por parametro.
function funcao1(funcaoComoParametro) {
  funcaoComoParametro();
}

function funcao2() {
  console.log("executando funcao2");
}

// funcao1(funcao2);
