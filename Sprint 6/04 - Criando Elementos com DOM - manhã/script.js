// const ulLancamentos = document.querySelector(".lancamentos");
// // console.log(ulLancamentos);

// const liFilme = document.createElement("li");
// const imgPosterFilme = document.createElement("img");
// const divInformacoesFilme = document.createElement("div");
// const spanTituloFilme = document.createElement("span");
// const spanGeneroFilme = document.createElement("span");
// const pSinopseFilme = document.createElement("p");

// // IMG
// imgPosterFilme.src = "imgs/poderoso-chefao-poster.jpg";
// imgPosterFilme.alt = "Poderoso Chefão Poster";
// imgPosterFilme.classList.add("poster");

// // DIV INFORMAÇOES DO FILME
// divInformacoesFilme.classList.add("informacoes-filme");

// // TITULO
// spanTituloFilme.innerText = "O Poderoso Chefão";
// spanTituloFilme.classList.add("titulo-filme");

// // GENERO
// spanGeneroFilme.innerText = "Drama";
// spanGeneroFilme.classList.add("genero-filme");

// // SINOPSE
// pSinopseFilme.innerText =
//   "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.";
// pSinopseFilme.classList.add("sinopse-filme");

// // Adicionando os elementos a div
// divInformacoesFilme.append(spanTituloFilme, spanGeneroFilme, pSinopseFilme);
// // console.log(divInformacoesFilme);

// // Adicionando a div a li
// // liFilme.appendChild(imgPosterFilme);
// // liFilme.appendChild(divInformacoesFilme);
// liFilme.append(imgPosterFilme, divInformacoesFilme);
// console.log(liFilme);

// // Adicionando a li a ul
// ulLancamentos.appendChild(liFilme);

const filmes = [
  {
    titulo: "Matrix",
    poster: "imgs/matrix-poster.jpg",
    genero: ["Ficção Científica"],
    lancamento: false,
    sinopse: "Um hacker descobre que a realidade não é o que parece.",
  },
  {
    titulo: "O Poderoso Chefão",
    poster: "imgs/matrix-poster.jpg",
    genero: ["Crime", "Drama"],
    lancamento: false,
    sinopse:
      "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.",
  },
  {
    titulo: "A Origem",
    poster: "imgs/matrix-poster.jpg",
    genero: ["Ação", "Ficção Científica"],
    lancamento: true,
    sinopse:
      "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.",
  },
  {
    titulo: "Pulp Fiction",
    poster: "imgs/matrix-poster.jpg",
    genero: ["Crime", "Drama"],
    lancamento: false,
    sinopse: "Vários personagens se cruzam em uma história de crime.",
  },
  {
    titulo: "Interestelar",
    poster: "imgs/matrix-poster.jpg",
    genero: ["Aventura", "Drama"],
    lancamento: true,
    sinopse: "Um grupo de astronautas tenta salvar a humanidade.",
  },
];

function criarCardFilmes(filmes) {
  const ulLancamentos = document.querySelector(".lancamentos");

  for (let i = 0; i < filmes.length; i++) {
    const filmeAtual = filmes[i];

    const liFilme = document.createElement("li");
    const imgPosterFilme = document.createElement("img");
    const divInformacoesFilme = document.createElement("div");
    const spanTituloFilme = document.createElement("span");
    const spanGeneroFilme = document.createElement("span");
    const pSinopseFilme = document.createElement("p");

    // IMG
    imgPosterFilme.src = filmeAtual.poster;
    imgPosterFilme.alt = filmeAtual.titulo + " Poster";
    imgPosterFilme.classList.add("poster");

    // DIV INFORMAÇOES DO FILME
    divInformacoesFilme.classList.add("informacoes-filme");

    // TITULO
    spanTituloFilme.innerText = filmeAtual.titulo;
    spanTituloFilme.classList.add("titulo-filme");

    // GENERO
    spanGeneroFilme.innerText = filmeAtual.genero.join(", ");
    spanGeneroFilme.classList.add("genero-filme");

    // SINOPSE
    pSinopseFilme.innerText = filmeAtual.sinopse;
    pSinopseFilme.classList.add("sinopse-filme");

    // Adicionando os elementos a div
    divInformacoesFilme.append(spanTituloFilme, spanGeneroFilme, pSinopseFilme);

    // Adicionando a div a li
    liFilme.append(imgPosterFilme, divInformacoesFilme);
    console.log(liFilme);

    // Adicionando a li a ul
    ulLancamentos.appendChild(liFilme);
  }
}

criarCardFilmes(filmes);
