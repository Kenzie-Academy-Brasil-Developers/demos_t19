const filmes = [
    {
      titulo: "Matrix",
      genero: ["Ficção Científica"],
      lancamento: false,
      capa: './imgs/matrix.jpg',
      sinopse: "Um hacker descobre que a realidade não é o que parece.",
    },
    {
      titulo: "O Poderoso Chefão",
      genero: ["Crime", "Drama"],
      lancamento: false,
      capa: './imgs/poderoso-chefao.jpg',
      sinopse:"Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.",
    },
    {
      titulo: "A Origem",
      genero: ["Ação", "Ficção Científica"],
      lancamento: true,
      capa: './imgs/a-origem.jpg',
      sinopse: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.",
    },
    {
      titulo: "Pulp Fiction",
      genero: ["Crime", "Drama"],
      lancamento: false,
      capa: './imgs/pulp-finction.jpg',
      sinopse: "Vários personagens se cruzam em uma história de crime.",
    },
    {
      titulo: "Interestelar",
      genero: ["Aventura", "Drama"],
      lancamento: true,
      capa: './imgs/interestelar.jpg',
      sinopse: "Um grupo de astronautas tenta salvar a humanidade.",
    },
];

/**
<li>
    <img src="./imgs/matrix.jpg" alt="">
    <div class="filme-informacoes">
        <span class="filme-titulo">Matrix</span>
        <span class="filme-genero">Ficção Científica</span>
        <p class="filme-sinopse">Um hacker descobre que a realidade não é o que parece.</p>
    </div>
</li>

{
    titulo: "Interestelar",
    genero: ["Aventura", "Drama"],
    lancamento: true,
    capa: './imgs/interestelar.jpg',
    sinopse: "Um grupo de astronautas tenta salvar a humanidade.",
},
*/

function criarCard(list){
    let lista = document.querySelector('#lista-filmes');
    for(let i = 0; i < filmes.length ; i++){
        const filme = list[i];
    
        // 1. criamos os elementos
        let li = document.createElement('li');
        let img = document.createElement('img');
        let div = document.createElement('div');
        let titulo = document.createElement('span');
        let genero = document.createElement('span');
        let sinopse = document.createElement('p');
    
        // 2. configuração individual dos elementos
        img.src = filme.capa;
        div.classList.add('filme-informacoes');
    
        titulo.classList.add('filme-titulo');
        titulo.innerText = filme.titulo;
    
        genero.classList.add('filme-genero');
    
        let strGenero = "";
        for(valor of filme.genero){
            strGenero+=`${valor} | `
        }
        strGenero+='@';
        strGenero = strGenero.replace(" | @", "");
        
        genero.innerText = strGenero;
    
        sinopse.classList.add('filme-sinopse');
        sinopse.innerText = filme.sinopse;
    
        // 3. criar hierarquia entre os elemento
        li.appendChild(img);
        li.appendChild(div);
    
        div.append(titulo, genero, sinopse);
        
        // 4. Adicionamos o elemento criado em um elemento já presente na tela
        lista.appendChild(li);
    }
}

criarCard(filmes)



function getFilmesEmLancamento(arrayDeFilmes){
    let filmesEmLancamento = [];
    for(let i = 0; i<arrayDeFilmes.length; i++){
        const filme = arrayDeFilmes[i];
        if(filme.lancamento == true){
            filmesEmLancamento.push(filme);
        }
    }
    return filmesEmLancamento;
}


// let listaLancamentos = getFilmesEmLancamento(filmes);
// criarCard(listaLancamentos);