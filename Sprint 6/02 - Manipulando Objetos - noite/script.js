//Relembrar a estrutura do objeto
const filme1 = {
    titulo: 'Matrix',
    genero: ['Ficção Cientifica'],
    lancamento: false
};

const filme2 = {
    titulo: 'O Poderoso Chefão',
    genero: ['Crime', 'Drama'],
    lancamento: false
};

const filme3 = {
    titulo: 'Interestelar',
    genero: ['Ficção'],
    lancamento: true
};


// Arrays de objetos
const filmes = [
    {
        titulo: 'Matrix',
        genero: ['Ficção Cientifica'],
        lancamento: false,
        sinopse: 'Um hacker descobre que a realidade não é o que parece.'
    },
    {
        titulo: 'O Poderoso Chefão',
        genero: ['Crime', 'Drama'],
        lancamento: false,
        sinopse: 'Um mafioso tenta passar o seu império para o seu filho.'
    },
    {
        titulo: 'A Origem',
        genero: ['Ação', 'Ficção Cientifica'],
        lancamento: true,
        sinopse: 'Sem sinopse.'
    },
    {
        titulo: 'Pulp Fiction',
        genero: ['Crime', 'Drama'],
        lancamento: false,
        sinopse: 'Vários personagens se cruzam em uma história de crime.'
    },
    {
        titulo: 'Interestelar',
        genero: ['Aventura', 'Drama'],
        lancamento: true,
        sinopse: 'Um grupo de astronautas tenta salvar a humanidade.'
    }
]

// console.log(filmes);

// Desenvolver funções com objetivos definidos onde cada função irá percorrer o array de objetos e executar algo

// Criar uma função que retorna todos os filmes em lançamento

/* PASSO-A-PASSO LÓGICO
    - Declarar a função
    - Definir um nome coerente
    - Receber o array de filmes por parametro 
    - Declar um array vazio (filmesEmLancamento)
    - Percorrer o array
        - Utilizar um if para verificação
        - Verificar o valor da propriedade lancamento do filme atual
            - Armazenar o elemento dentro do array vazio
    - return 
*/

let numero = 0;
let str = '';
let arr = [];
let obj = {};


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
// console.log(getFilmesEmLancamento(filmes));

//Filtrar filmes por gênero

/* PASSO-A-PASSO LÓGICO
 - Declarar uma função
 - Dar um nome para a função
 - Definir os parâmetros da função
 - Declarar o array vazio
 - Percorrer o array de de filmes
    - Percorrer o array de generos
        - Verificar se o genero atual é igual ao genero recebido por parametro
            - Adicionar o objeto dentro do array vazio
 - return no array que agora não estará mais vazio (talvez) 
*/

function procurarFilmesPeloGenero(filmes, genero){
    let filmesDoGenero = [];
    for(let i = 0 ; i<filmes.length ; i++){
        const filme = filmes[i];
        const generosDoFilme = filme.genero;
        for(let j = 0; j<generosDoFilme.length ; j++){
            if(generosDoFilme[j] == genero){
                filmesDoGenero.push(filme);
            }
        }
    }
    return filmesDoGenero
}
// console.log(procurarFilmesPeloGenero(filmes, 'Drama'));


function procurarFilmesPeloGenero2(filmes, genero){
    let filmesDoGenero = [];
    for(let i = 0 ; i<filmes.length ; i++){
        const filme = filmes[i];
        const generosDoFilme = filme.genero;
        if(generosDoFilme.includes(genero)){
            filmesDoGenero.push(filme);
        }
    }
    return filmesDoGenero
}
console.log(procurarFilmesPeloGenero2(filmes, 'Ficção Cientifica'));
