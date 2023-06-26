/*
  Laços de Repetição (Loops)
  - Inicializador -> É a variável que utilizamos para o controle do loop;
  - Condição -> O loop vai funcionar até a condição se tornar falsa;
  - Incremento/Decremento -> Uma mudança no inicializador que vai garantir que o loop tenha um fim.
*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

/* 
  While -> enquanto

  while (condição) {
    // Bloco de código
  }
*/

// console.log("Inicio do While");

// // Inicializador
// let i = 0;

// /* Condição */
// while (i <= 5) {
//   // i = i + 1 -> i += 1

//   console.log(i);

//   /* Incremento/Decremento */
//   i++;
// }

// console.log("Fim do While");

// console.log(i);

/* 
  For -> Durante, enquanto

  for (inicializador; condição; incremento/decremento) {
    // Bloco de código
  }
*/

// console.log("Inicio do For");

// // i -> indice -> index
// for (let index = 0; index <= 5; index = index + 1) {
//   console.log(index);
// }

// console.log("Fim do For");

// Soma de números

function somarLaco(numeroVezes) {
  let total = 0;

  for (let i = 0; i <= numeroVezes; i++) {
    // console.log(total);
    total = total + i;
  }

  return total;
}

// console.log(somarLaco(7));
// console.log(somarLaco(10));
// console.log(somarLaco(25));

function mostrarPares() {
  for (let i = 15; i > 0; i--) {
    // % -> Resto da divisão
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// mostrarPares();

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`A multiplicação de ${numero} x ${i} = ${resultado}`);
  }
}

// tabuada(2);
// tabuada(3);

// ------------------------------------
// Tira dúvidas

// Fibonacci

let anterior = 0; // passado
let atual = 0; // presente
let posterior = 1; // futuro

for (let i = 1; i <= 15; i++) {
  anterior = atual;
  atual = posterior;
  console.log(anterior);

  posterior = atual + anterior;
}

// // i -> indice -> index
// for (let batata = 0; batata <= 5; batata++) {
//   console.log(batata);
// }
