// const texto = "Olá Kenzie!";

// console.log(texto[0]);
// console.log(texto[1]);
// console.log(texto[2]);
// console.log(texto[3]);
// console.log(texto[4]);
// console.log(texto[5]);
// console.log(texto[6]);
// console.log(texto[7]);
// console.log(texto[8]);
// console.log(texto[9]);
// console.log(texto[10]);

// texto[i]
// i -> index

const texto = "Olá Kenzie!";
// Verificando tamanho da string
// console.log(texto.length);

for (let i = 0; i < texto.length; i++) {
  // console.log(texto[i]);
}

// Acessando último elemento
// console.log(texto.length - 1);

for (let i = texto.length - 1; i >= 0; i--) {
  // console.log(texto[i]);
}

// Exercícios

/*
1. Escreva uma função que recebe uma string e
  uma letra, procure a letra na string e a torna
  maiuscula se encontrada, retornando a string modificada.

  - Função que recebe uma string e
  uma letra
  - Procurar a letra na string 
    - se encontrada, tornar em maiuscula
  - Retornar a string modificada
*/

// let str = "kenzie";
// let crt = "e";

// kEnziE
function modificarCaracteres(string, letra) {
  let stringModificada = "";

  for (let i = 0; i < string.length; i++) {
    // Procurar a letra na string
    if (string[i] === letra) {
      // se encontrada, tornar em maiuscula
      stringModificada = stringModificada + string[i].toUpperCase();
    } else {
      stringModificada = stringModificada + string[i];
    }
  }

  // Retornar a string modificada
  return stringModificada;
}

// console.log(modificarCaracteres("kenzie!", "e"));
// console.log(modificarCaracteres("Casa", "a"));
// console.log(modificarCaracteres("a batata frita tem muito oleo", "a"));

/* 
  2. Desenvolva uma função que recebe uma string qualquer, e verifica se é
  um palindromo. O retorno da sua função deve ser true, caso o texto seja
  um palindromo ou false caso não. Sua função não deve diferenciar letras
  maiúsculas de minusculas.

  [x] Recebe uma string como parâmetro
  [x] Verifica se é um palindromo
    [x] Criar uma string invertida
    [x] Verificar se a string enviada é idêntica a mesma string, só que invertida
    [x] Sua função não deve diferenciar letras
  maiúsculas de minusculas.
  [x] Se for um palindromo, retorna true
  [x] Se não for, retorna false
*/

function ePalindromo(string) {
  string = string.toLowerCase();
  // console.log(string);

  string = retirarEspaco(string);
  // console.log(string);

  let stringInvertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida = stringInvertida + string[i];
  }

  if (string === stringInvertida) {
    return true;
  }

  return false;
}

// console.log(ePalindromo("Vilson"));
// console.log(ePalindromo("Osso"));

// console.log(ePalindromo("O lobo ama o bolo"));
// console.log(ePalindromo("Anotaramadatadamaratona"));

function retirarEspaco(string) {
  let novaString = "";

  for (let i = 0; i < string.length; i++) {
    // Se o caractere é um espaço -> " "
    if (string[i] !== " ") {
      // novaString = novaString + string[i]
      novaString += string[i];
    }
  }

  return novaString;
}

// console.log(retirarEspaco("Anotaram a data da maratona"));
// console.log(retirarEspaco("A Kenzie é top!"));

// ------------------------------------------------
// Tira Dúvidas

// i = 0
// var i = 0

// for (i = 1; i <= 5; i++) {
//   // console.log(i);
// }

// console.log(i);

// ------------------------------------------------
// function ePalindromo(string) {
//   string = string.toLowerCase();
//   console.log(string);

//   string = string.replaceAll(" ", "");
//   console.log(string);

//   let stringInvertida = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     stringInvertida = stringInvertida + string[i];
//   }

//   if (string === stringInvertida) {
//     return true;
//   }

//   return false;
// }

// console.log(ePalindromo("O lobo ama o bolo"));

// --------------------------------------
// let total = 0;

// for (let i = 1; i <= 10; i++) {
//   total = total + i;
// }

// console.log(total);

// ------------------------------------------

// for (let user = ""; user !== "Golimar"; user = user) {
//   user = prompt("Digite o nome do usuário!");

//   if (user === "Golimar") {
//     alert("Usuário indentificado! Bem vindo Golimar!");
//   } else {
//     alert(`Usuário ${user} inválido!`);
//   }
// }
