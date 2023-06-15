// REVISÃO DEMO DE ONTEM:

// // Manipulação de dados (string)
// let str = 'Kenzie';
// str = str + ' Academy'; //'Kenzie Academy'
// str = `${str} Brasil`; //'Kenzie Academy Brasil'

// console.log(str[7]); //'A'
// console.log(str[str.length - 1]) //'l'

// //Entrada e saída de dados
// const texto = prompt('Digite algo!');
// alert(texto);

// // Comparadores
// /*
//  ==
//  ===
//  !=
//  !==
//  <
//  >
//  <=
//  >=
// */


// DEMO DE HOJE
// Condicionais

// if, else if, else


let peso = parseInt(prompt('Digite seu peso:'));
let altura = parseFloat(prompt('Digite seu altura:'));

let imc = peso / (altura**2);

alert(imc); //43.8

if(imc < 18.5){ //43.8 < 18.5 - false
    alert('Você está em estado de Magreza!!');
}else if(imc < 25){ //43.8 < 25 - false
    alert('Você está em seu estado normal!!');
}else{
    alert('Você está com sobrepeso ou obesidade');
}



let a = parseFloat(prompt('Digite o primeiro numero'));
let b = parseFloat(prompt('Digite o segundo numero'));
let op = prompt('Digite a operação a ser realizada!');

// op = '&'

if(op == '+'){ 
    let result = a + b;
    alert(`${a} ${op} ${b} = ${result}`); 
}else if(op == '-'){
    let result = a - b;
    alert(`${a} ${op} ${b} = ${result}`); 
}else if(op == '*'){ 
    let result = a * b;
    alert(`${a} ${op} ${b} = ${result}`); 
}else if(op == '/'){ 
    let result = a / b;
    alert(`${a} ${op} ${b} = ${result}`); 
}else{
    alert('Este operador não está disponivel!')
}

//op = '-'
if(op == '+'){ //'-' == '+' - false
    let result = a + b;
    alert(`${a} ${op} ${b} = ${result}`)
}
if(op == '-'){
    let result = a + b;
    alert(`${a} ${op} ${b} = ${result}`)
}


// Escopo de variavel

// let variavel_global = 'texto';
// {
//     let variavel_local = 'texto2';
//     console.log(variavel_global);
//     console.log(variavel_local);
// }
