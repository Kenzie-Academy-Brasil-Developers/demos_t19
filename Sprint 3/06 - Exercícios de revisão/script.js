// 1. Escreva um algoritmo que verifique se um número é positivo, negativo ou zero, e mostre na tela. Caso ele seja 3, mostre a mensagem 'o número é igual a 3' 

const primeiroNumero = prompt("Digite o número")

// resolução 1
if (primeiroNumero > 0) {
    console.log("é positivo");
} 
if (primeiroNumero == 3){
    console.log("o número é igual a 3");
}
if (primeiroNumero < 0) {
    console.log("é negativo");
} 
if (primeiroNumero == 0){
    console.log("é zero");
}

// resolução 2    
if (primeiroNumero > 0) {
    console.log("é positivo");
} else if (primeiroNumero == 3) {
    console.log("o número é igual a 3");
} else if (primeiroNumero < 0) {
  console.log("é negativo");
} else {
  console.log("é zero");
}

// resolução 3  
if (primeiroNumero > 0) {
    console.log("é positivo");
    if (primeiroNumero == 3) {
        console.log("o número é igual a 3");
    }
} else if (primeiroNumero < 0) {
  console.log("é negativo");
} else {
  console.log("é zero");
}

// 2. Crie um algoritmo que verifique se um número é ímpar e múltiplo de 3.

const segundoNumero = 15

// resolução 1
if (segundoNumero % 2 != 0){
    if (segundoNumero % 3 == 0){
        console.log('O número é ímpar e múltiplo de 3')
    } else {
        console.log('O número é ímpar mas não múltiplo de 3')
    }
} else {
    console.log('O número não é impar e múltiplo de 3')
}

// resolução 2
if (segundoNumero % 2 != 0 && segundoNumero % 3 == 0){
    console.log('O número é impar e múltiplo de 3')
} else {
    console.log('O número não é ímpar ou múltiplo de 3')
}


//3. Escreva um algoritmo que determine se um ano é bissexto.
//     Um ano é bissexto se:
//     - É divisível por 4 E NÃO é divisivel por 100 OU se é divisível por 400.

const ano = 400

// resolução 1 (não funciona pro caso 400)
if (ano % 4 === 0) {
    if (ano % 100 !== 0) {
      console.log("ano bissexto");
    } else {
      console.log("não é ano bissexto");
    }
  } else if (ano % 400 === 0) {
    console.log("ano bissexto");
  } else {
    console.log("não é ano bissexto");
  }

// resolução 2
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("ano bissexto");
} else {
  console.log("não é ano bissexto");
}

// 4. Crie um algoritmo que verifique se um número está dentro de um intervalo específico. Verifique se está entre 10 e 20. 

const numero = 15

if (numero > 10 && numero < 20){
    console.log('Está dentro do intervalo')
} else {
    console.log('Não está dentro do intervalo')
}

// 5. Escreva um algoritmo que determine se um triângulo é equilátero, isósceles ou escaleno. 

const ladoA = 50
const ladoB = 70
const ladoC = 40

if (ladoA == ladoB && ladoB == ladoC){
    console.log('Equilátero')
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    console.log('Isósceles')
} else {
    console.log('Escaleno')
}

// 6. Crie um algoritmo que verifique se uma pessoa tem idade o suficiente para comprar o ingresso de um show cuja classificação indicativa é 16 anos, e se ela tem carteirinha de estudante para comprar o ingresso com desconto.

const idade = 16
const temCarteirinha = false

// resolução 1
if (idade >= 16){
    if (temCarteirinha){
        console.log('Pode comprar o ingresso com desconto')
    } else {
        console.log('Pode comprar o ingresso com preço cheio')
    }
} else {
    console.log('Não está autorizada a comprar o ingresso')
}

// resolução 2
if (idade >= 16 && temCarteirinha){
    console.log('Pode comprar o ingresso com desconto')
} else if (idade >= 16 && !temCarteirinha){
    console.log('Pode comprar o ingresso com preço cheio')
} else {
    console.log('Não está autorizada a comprar o ingresso')
}

// 7. Crie um algoritmo que calcule o desconto em uma compra. Armazene o valor original do produto em uma variável e o percentual de desconto em outra variável. Calcule o valor final com desconto e exiba-o.

const preco = 200
const desconto = 30
const descontoCalculado = preco * (desconto/100)
const precoFinal = preco - descontoCalculado

console.log(precoFinal)

// 8. Crie um algoritmo que faça o incremento e decremento de um número. Armazene um número em uma variável e faça o incremento e o decremento usando os operadores aritméticos. Exiba o resultado de cada operação.

let novoNumero = 10
const incremento = novoNumero++
const decremento = novoNumero--

console.log(incremento, decremento)

// 9. Concatene duas strings apenas se ambas tiverem mais de 5 caracteres:

const gato1 = "Safira"
const gato2 = "Granada"

if (gato1.length > 5 && gato2.length > 5){
    console.log(gato1 + gato2)
}

// 10. Concatene duas strings, mas se alguma delas for vazia, exiba uma mensagem de erro:

const palavra1 = "batata"
const palavra2 = "frita"

// resolução 1
if (palavra1 == "" || palavra2 == ""){
    console.log('erro')
} else {
    console.log(palavra1 + palavra2)
}

// resolução 2
if (palavra1 != "" && palavra2 != ""){
    console.log(palavra1 + palavra2)
} else {
    console.log('erro')
}

// 11. Concatene duas strings, mas se alguma delas for "undefined", atribua um valor padrão antes da concatenação:

const stringDeclarada = "batata"
let stringIndefinida

if (stringDeclarada == undefined){
    stringDeclarada = "valor padrão"
} else if (stringIndefinida == undefined){
    stringIndefinida = "valor padrão"
}

console.log(stringDeclarada + stringIndefinida)
