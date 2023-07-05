const titulo = document.body.children[0];
// titulo.innerText = "Novo Titulo2";

const body = document.querySelector("body");
// console.log(body);
body.style = "background: white";
// body.style.background = "green";

// TAG
const tituloH1 = document.querySelector("h1");
// tituloH1.innerText = "Um Novo Titulo";
tituloH1.style.color = "white";
tituloH1.style.background = "green";
// tituloH1.style = "background: green";

const paragrafo = document.querySelector("p");
// console.log(paragrafo);
// paragrafo.innerText = "Novo texto do paragrafo";

// ID
const tituloPorId = document.querySelector("#titulo");
tituloPorId.innerText = "Um Novo Titulo, agora capturado por id";

// CLASSE
const paragrafoSecundario = document.querySelector(".paragrafo-secundario");
// console.log(paragrafoSecundario);
// paragrafoSecundario.innerText = "Novo texto do paragrafo";
// paragrafoSecundario.style.background = "blue";
// paragrafoSecundario.style.border = "5px solid black";

const paragrafos = document.querySelectorAll("p");
// console.log(paragrafos);

// for (let i = 0; i < paragrafos.length; i++) {
//   paragrafos[i].style.background = "green";
//   paragrafos[i].style.border = "5px solid black";
// }

// Métodos Específicos

// BY ID
const tituloSecundario = document.getElementById("titulo-secundario");
// console.log(tituloSecundario);
// null.style.color = 'white'
tituloSecundario.style.color = "white";

// CLASSNAME
const paragrafosPorClasse = document.getElementsByClassName("paragrafo");
// console.log(paragrafosPorClasse);

// paragrafosPorClasse[0].style.color = "white";
// paragrafosPorClasse[1].style.color = "yellow";

for (let i = 0; i < paragrafosPorClasse.length; i++) {
  paragrafosPorClasse[i].style.background = "orange";
  paragrafosPorClasse[i].style.border = "5px solid black";
}

const paragrafosPorNomeDaTag = document.getElementsByTagName("div");
console.log(paragrafosPorNomeDaTag);

// for (let i = 0; i < paragrafosPorNomeDaTag.length; i++) {
//   paragrafosPorNomeDaTag[i].style.background = "black";
//   paragrafosPorNomeDaTag[i].style.color = "white";
//   // paragrafosPorNomeDaTag[i].style.border = "5px solid black";
// }

// Exemplo prático
const filmes = [
  {
    titulo: "Matrix",
  },
  {
    titulo: "Interstellar",
  },
];

const paragrafosPorClasse2 = document.getElementsByClassName("paragrafo");
for (let i = 0; i < paragrafosPorClasse2.length; i++) {
  paragrafosPorClasse2[i].innerHTML = filmes[i].titulo;
}
