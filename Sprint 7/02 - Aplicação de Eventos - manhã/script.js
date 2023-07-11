const btnAdicionarCarrinho = document.querySelector(".btn-adicionar-carrinho");
// console.log(btnAdicionarCarrinho);

btnAdicionarCarrinho.addEventListener("click", function (evento) {
  //   console.log("Evento do botão acionado!");
  //   console.log(evento);
  //   console.log(evento.target.parentNode);
  //   console.log(evento.target.parentElement);
  const divPai = evento.target.parentElement;
  const nomeProduto = divPai.querySelector(".nome-produto").innerText;
  //   console.log(divPai);
  console.log(nomeProduto);

  const ulCarrinho = document.querySelector(".carrinho");
  //   console.log(ulCarrinho);
  const liProduto = document.createElement("li");
  liProduto.innerText = nomeProduto;
  //   console.log(liProduto);

  ulCarrinho.appendChild(liProduto);
});

/*
    Desafio: Adicionar de maneira dinâmica um evento de clique para cada
    um dos botões.
    - Selecionar TODOS os botões (querySelectorAll)
    - Iterar (rodar um loop sobre) sobre o array de botões, adicionando um 
    evento de clique para cada botão.
*/
