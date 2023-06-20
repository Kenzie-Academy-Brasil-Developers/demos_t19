//FUNÇÕES

// Definição: Uma função em JavaScript é um bloco de código reutilizável que executa uma tarefa específica. É definida usando a palavra-chave "function", seguida pelo nome da função, e pode receber parâmetros entre parênteses.


function nomeDaFuncao(){
    console.log('Executou a função');
}  
nomeDaFuncao();


function calculaIMC(peso, altura){
    let imc = peso / (altura**2);
    return imc;
}

let pessoa1 = calculaIMC(85, 1.80);
let pessoa2 = calculaIMC(95, 1.60);
let pessoa3 = calculaIMC(45, 1.70);

/*
if(pessoa1 < pessoa2){
    console.log('O primeiro possui o menor IMC');
}else if(pessoa1 > pessoa2){
    console.log('O segundo possui o menor IMC');
}else{
    console.log('Os dois possuem o mesmo IMC');
}

if(pessoa1 < pessoa3){
    console.log('O primeiro possui o menor IMC');
}else if(pessoa1 > pessoa3){
    console.log('O segundo possui o menor IMC');
}else{
    console.log('Os dois possuem o mesmo IMC');
}

if(pessoa2 < pessoa3){
    console.log('O primeiro possui o menor IMC');
}else if(pessoa2 > pessoa3){
    console.log('O segundo possui o menor IMC');
}else{
    console.log('Os dois possuem o mesmo IMC');
}
*/

function comparaIMC(imc1, nome1 , imc2, nome2){
    if(imc1 < imc2){
        return `O ${nome1} possui o menor IMC ( ${imc1.toFixed(1)}, ${imc2.toFixed(1)})` ;
    }else if(imc1 > imc2){
        return 'O '+nome2+' possui o menor IMC ( '+imc1.toFixed(1)+', '+imc2.toFixed(1)+')';
    }else{
        return `Os dois possuem o mesmo IMC ${imc1.toFixed(1)}, ${imc2.toFixed(1)})`;
    }
}

console.log(comparaIMC(pessoa1,'Thiago' , pessoa2, 'Vilson'));
console.log(comparaIMC(pessoa1,'Thiago' , pessoa3, 'Carlos'));
console.log(comparaIMC(pessoa2,'Vilson' , pessoa3, 'Carlos'));




