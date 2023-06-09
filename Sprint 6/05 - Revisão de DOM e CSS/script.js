const arrayPokemons = [
  {
    nome: "Charmeleon",
    vida: 30,
    ataque: 64,
    defesa: 58,
    velocidade: 80,
    imagem: "imgs/charmeleon.svg",
    tipo: "fogo",
  },
  {
    nome: "Flareon",
    vida: 65,
    ataque: 130,
    defesa: 60,
    velocidade: 65,
    imagem: "imgs/flareon.svg",
    tipo: "fogo",
  },
  {
    nome: "Meowth",
    vida: 65,
    ataque: 130,
    defesa: 60,
    velocidade: 65,
    imagem: "imgs/flareon.svg",
    tipo: "normal",
  },
  {
    nome: "Mr. Mime",
    vida: 65,
    ataque: 130,
    defesa: 60,
    velocidade: 65,
    imagem: "imgs/mr-mime.svg",
    tipo: "normal",
  },
];

function criarCard(arrayPokemons) {
  /*
    Desafio:
    Implementar forma dinâmica de renderizar o array de pokemons utilizando
    loop dentro da função.
  */

  // div container que receberá como filho a nossa div card
  const divCardContainer = document.querySelector(".container");

  // Criação
  // div com classe "card"
  const divCard = document.createElement("div");
  const pHp = document.createElement("p");
  const imgPokemon = document.createElement("img");
  const h2NomePokemon = document.createElement("h2");

  // Tipo
  const divTipo = document.createElement("div");
  const spanTipo = document.createElement("span");

  // Caracteristicas
  const divCaracteristicas = document.createElement("div");
  // Atq
  const divAtq = document.createElement("div");
  const h3Atq = document.createElement("h3");
  const pAtq = document.createElement("p");
  // Def
  const divDef = document.createElement("div");
  const h3Def = document.createElement("h3");
  const pDef = document.createElement("p");
  // Vel
  const divVel = document.createElement("div");
  const h3Vel = document.createElement("h3");
  const pVel = document.createElement("p");

  // class card
  divCard.classList.add("card");

  // HP
  pHp.classList.add("hp");
  pHp.innerHTML = "<span>HP</span> 50";
  divCard.appendChild(pHp);

  // IMG
  imgPokemon.src = "imgs/charmeleon.svg";
  divCard.appendChild(imgPokemon);

  // Nome Pokemon
  h2NomePokemon.classList.add("nome-pokemon");
  h2NomePokemon.innerText = "Charmeleon";
  divCard.appendChild(h2NomePokemon);

  // Tipo
  divTipo.classList.add("tipo");
  spanTipo.innerText = "Fogo";
  divTipo.appendChild(spanTipo);
  divCard.appendChild(divTipo);

  // Caracteristicas
  divCaracteristicas.classList.add("caracteristicas");
  // Atq
  h3Atq.innerText = "70";
  pAtq.innerText = "Atq";
  divAtq.append(h3Atq, pAtq);
  divCaracteristicas.appendChild(divAtq);
  // Def
  h3Def.innerText = "51";
  pDef.innerText = "Def";
  divDef.append(h3Def, pDef);
  divCaracteristicas.appendChild(divDef);
  // Vel
  h3Vel.innerText = "56";
  pVel.innerText = "Vel";
  divVel.append(h3Vel, pVel);
  divCaracteristicas.appendChild(divVel);

  // Adicionando as caracteristicas ao card
  divCard.appendChild(divCaracteristicas);

  // Adicionando o card ao container
  divCardContainer.appendChild(divCard);

  console.log(divCard);
}

criarCard(arrayPokemons);

// const tipoFogo = [];
// const tipoNormal = [];

// EXTRA:
function dividePokemonPorTipo(arrayPokemons) {
  const tipoFogo = [];
  const tipoNormal = [];

  for (let i = 0; i < arrayPokemons.length; i++) {
    const pokemonAtual = arrayPokemons[i];

    // if (pokemonAtual.tipo === "fogo") {
    if (arrayPokemons[i].tipo === "fogo") {
      tipoFogo.push(pokemonAtual);
    } else {
      tipoNormal.push(pokemonAtual);
    }
  }

  return { fogo: tipoFogo, normal: tipoNormal };
  // console.log(tipoFogo);
  // console.log(tipoNormal);
}

const resultado = dividePokemonPorTipo(arrayPokemons);
console.log(resultado.normal);

// console.log(tipoFogo);
// console.log(tipoNormal);

// Exemplo de innerHTML:
/* 
  const divCardContainer = document.querySelector(".container");
  divCardContainer.innerHTML += `<div class="card">
  <!-- HP -->
  <p class="hp">
    <span>HP</span>
    40
  </p>
  <!-- Imagem do Pokemon -->
  <img src="imgs/charmeleon.svg" alt="" />
  <!-- Nome do Pokemon -->
  <h2 class="nome-pokemon">Charmeleon</h2>
  <!-- Tipo -->
  <div class="tipo">
    <span>Fogo</span>
  </div>
  <!-- Caracteristicas de Atq / Def / Vel -->
  <div class="caracteristicas">
    <div>
      <h3>65</h3>
      <p>Atq</p>
    </div>
    <div>
      <h3>50</h3>
      <p>Def</p>
    </div>
    <div>
      <h3>40</h3>
      <p>Vel</p>
    </div>
  </div>
</div>`;
*/
