/*
  Propriedades:  
  - Atributos: São como se fossem `variáveis`do objeto.
  - Métodos: São como se fosse `funções` do objeto.
*/

const filme1 = {
  titulo: "O Poderoso Chefão",
  generos: ["Crime", "Drama"],
  lancamento: false,
};

// console.log(filme1.titulo);
// console.log(filme1.genero);
// console.log(filme1.lancamento);
//     0        1
// [ 'Crime', 'Drama' ]
// console.log(filme1.genero[0]);

const filme2 = {
  titulo: "Matrix",
  generos: ["Ficção Científica"],
  lancamento: false,
};

// console.log(filme2.titulo);
// console.log(filme2.generos);
// console.log(filme2.lancamento);

filme2.titulo = "Matrix Reloaded";
filme2.nota = "9.1";
// [ 'Ficção Científica' ]
filme2.generos.push("Aventura");

// console.log(filme2);

// Uma base de dados de filmes
const filmes = [
  {
    titulo: "Matrix",
    generos: ["Ficção Científica"],
    lancamento: false,
  },
  {
    titulo: "O Poderoso Chefão",
    generos: ["Crime", "Drama"],
    lancamento: false,
  },
  {
    titulo: "A Origem",
    generos: ["Ação", "Ficção Científica"],
    lancamento: true,
  },
  {
    titulo: "Pulp Fiction",
    generos: ["Crime", "Drama"],
    lancamento: false,
  },
  {
    titulo: "Interstellar",
    generos: ["Aventura", "Drama"],
    lancamento: true,
  },
];

// filmes[0].titulo = "Matrix Reloaded";
// filmes[0].generos.push("Aventura");
// console.log(filmes);

/*
  Problema: Criar uma função que retorne somente os filmes em lançamento.
  Passos lógicos:
  - Criar a função
  - Receber o array de filmes por parâmetro
  - Criar um array vazio
  - Percorrer o array de filmes
  - Verificar se o filme em questão é um lançamento
  - Adicionar o filme em lançamento ao array vazio
  - Retornar o array de filmes fora do for.
*/
function retornaFilmesEmLancamento(listaDeFilmes) {
  const filmesEmLancamento = [];

  for (let i = 0; i < listaDeFilmes.length; i++) {
    const filmeAtual = listaDeFilmes[i];

    if (filmeAtual.lancamento) {
      filmesEmLancamento.push(filmeAtual);
    }
  }
  // console.log não é return / Debuggar
  // console.log(filmesEmLancamento);

  return filmesEmLancamento;
}

// const filmesEmLancamento = retornaFilmesEmLancamento(filmes);
// console.log(filmesEmLancamento);

/*
  Criar uma função que retorna todos os filmes do genero passado por
  parametro.
  Passos lógicos:
  - Criar a função
  - Receber o array de filmes por parâmetro
  - Receber o genero a pesquisar por parametro
  - Criar um array vazio
  - Percorrer o array de filmes
  - Verificar se o genero está no array de generos do filme em questão
    - Percorrer o array de generos e comparar com o genero do parametro.
  - Adicionar o filme com o genero ao array vazio
  - Retornar o array de filmes fora do for.
*/

function retornaFilmesDoGenero(listaDeFilmes, genero) {
  const filmesDoGenero = [];

  for (let i = 0; i < listaDeFilmes.length; i++) {
    const filmeAtual = listaDeFilmes[i];
    // console.log(filmeAtual.generos);

    for (let j = 0; j < filmeAtual.generos.length; j++) {
      const generoAtual = filmeAtual.generos[j];

      if (generoAtual.toLowerCase() === genero.toLowerCase()) {
        filmesDoGenero.push(filmeAtual);
      }
    }
  }

  return filmesDoGenero;
}

const filmesDoGenero = retornaFilmesDoGenero(filmes, "crimE");
// console.log(filmesDoGenero);

function retornaFilmesDoGenero2(listaDeFilmes, genero) {
  const filmesDoGenero = [];
  // Converte o parametro genero para lower case
  const generoEmMinusculo = genero.toLowerCase();
  // Deixa somente a primeira letra em maiusculo
  const generoCapitalizado =
    generoEmMinusculo[0].toUpperCase() + generoEmMinusculo.slice(1);
  console.log(generoCapitalizado);

  for (let i = 0; i < listaDeFilmes.length; i++) {
    const filmeAtual = listaDeFilmes[i];
    if (filmeAtual.generos.includes(genero)) {
      filmesDoGenero.push(filmeAtual);
    }
  }

  return filmesDoGenero;
}

// const filmesDoGenero2 = retornaFilmesDoGenero2(filmes, "ficção científica");
// console.log(filmesDoGenero2);

// EXTRA
/*
  Mesmo comportamento básico da função anterior, mas agora tratando
  a string genero de entrada para ser transformada para a primeira letra
  em maiusculo (capitalizar). Exemplo (entrada -> tratado):
  'cRiMe' -> 'Crime'
  'fIcção ciENtíficA' -> 'Ficção Científica'
*/
function capitalizaString(string) {
  // 1. Converter tudo para minusculo
  const stringEmMinusculo = string.toLowerCase();
  // 2. Utilizar método split para separar palavras caso haja mais de uma ('ficção cientifica' por exemplo)
  const stringSeparada = stringEmMinusculo.split(" ");
  // 3. Percorrer o array de strings anteriores, tornar maiuscula a primeira letra
  // e concatenar com o restante das letras. Substituir na posição atual pelo valor
  // processado (capitalizado)
  for (let i = 0; i < stringSeparada.length; i++) {
    const stringCapitalizada =
      stringSeparada[i][0].toUpperCase() + stringSeparada[i].slice(1);

    stringSeparada[i] = stringCapitalizada;
  }

  // 4. Juntar o array de strings tratatadas para ter novamente 1 string.
  const stringCapitalizada = stringSeparada.join(" ");

  // 5. Retornar a string
  return stringCapitalizada;
}

const stringCapitalizada1 = capitalizaString("fiCção ciEnTIfiCa");
console.log(stringCapitalizada1);
// Ficção Cientifica
const stringCapitalizada2 = capitalizaString("cRiMe");
console.log(stringCapitalizada2);
// Crime

function retornaFilmesDoGenero3(listaDeFilmes, genero) {
  const filmesDoGenero = [];
  // Converte o parametro genero para lower case
  const generoCapitalizado = capitalizaString(genero);

  for (let i = 0; i < listaDeFilmes.length; i++) {
    const filmeAtual = listaDeFilmes[i];

    if (filmeAtual.generos.includes(generoCapitalizado)) {
      filmesDoGenero.push(filmeAtual);
    }
  }

  return filmesDoGenero;
}

const filmesDoGenero3 = retornaFilmesDoGenero3(filmes, "ficção científica");
console.log(filmesDoGenero3);
