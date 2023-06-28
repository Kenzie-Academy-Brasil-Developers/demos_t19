// 0 1 2 3 4 5
// B a t a t a

// Arrays
const primeiroArray = [10, 20, 30, 40, 50, 100, 200];
// console.log(primeiroArray);
// console.table(primeiroArray);

// Acessar um elemento de um array
// const primeiroElemento = primeiroArray[0];
// console.log(primeiroElemento);
// console.log(primeiroArray[3]);
// console.log(primeiroArray[100]);

// console.log(primeiroArray.length);
// console.log(primeiroArray.length - 1);
// const ultimoIndice = primeiroArray.length - 1;
// console.log(primeiroArray[ultimoIndice]);

// Alterando elementos
// primeiroArray[2] = 60;
// primeiroArray[ultimoIndice] = 1000;
// console.table(primeiroArray);

// primeiroArray = [100, 200, 300];

// Indice             0       1      2     3
// const segundoArray = [10, "Batata", true, 9.5];
// console.log(segundoArray[2]);
// segundoArray[2] = "Alface";
// console.log(segundoArray[2]);

// Metodos de Array
const terceiroArray = ["Vilson"];
// console.log(terceiroArray);

// push -> adiciona um elemento no final do array
// terceiroArray.push("Lorena");
terceiroArray.push("Lorena", "Wesley", "Luiz", "Kayan", "Chrys");
// console.log(terceiroArray);

// unshift -> adiciona um elemento no começo do array
terceiroArray.unshift("Thiago");
// console.log(terceiroArray);

// splice -> adicionamos um elemento em um local específico do array e podemos remover elementos posteriores
terceiroArray.splice(1, 0, "Ale");
// terceiroArray.splice(1, 2, "Ale");
// console.table(terceiroArray);

// Removendo elementos específicos com splice
// terceiroArray.splice(2, 1);
// terceiroArray.splice(2, 2);
// console.table(terceiroArray);

// pop -> remove o último elemento de um array
// terceiroArray.pop();
// const elementoRemovido = terceiroArray.pop();
// console.log(terceiroArray);
// console.log(elementoRemovido);

// shift -> remove o primeiro elemento de um array
// terceiroArray.shift();
// console.log(terceiroArray);

/*
  [x] -> Percorrendo cada um dos elementos do array
  [x] -> Verificando se o elemento é identico ao valor passado em instrutor
  [x] -> Caso encontre, retornar mensagem: "Encontramos o seu instrutor(a)!"
  [] -> Caso não encontre, retornar mensagem: "Parece que esse instrutor(a) não está na turma!"
*/

// console.table(terceiroArray);

const instrutores = terceiroArray;

function encontraInstrutor(array, instrutor) {
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].length);
    // console.log(array[i][0]);

    if (array[i] === instrutor) {
      return `Encontramos o seu/sua instrutor(a)! Bem vindo(a) a turma da ${instrutor}`;
    } else if (array[i] === "Vilson") {
      array[i] = "Golimar";
    }

    // array[i] = "Batata";
  }

  return `Parece que o/a instrutor(a) ${instrutor} não está na turma!`;
}

// console.log(encontraInstrutor(terceiroArray, "Lorena"));
// console.log(encontraInstrutor(terceiroArray, "Kayan"));
// console.log(encontraInstrutor(terceiroArray, "Thiago"));
console.log(encontraInstrutor(terceiroArray, "Lore"));

console.table(terceiroArray);

// console.log(terceiroArray[1][0]);
let instrutor = terceiroArray[1];
// console.log(instrutor);
// console.log(instrutor[0]);

instrutor = instrutor.split("");
console.log(instrutor);
const tamanho = instrutor.length;
console.log(tamanho);
