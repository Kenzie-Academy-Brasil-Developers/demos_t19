//Revisão da demo de ontem

// Escopos

// Escopo global
// Escopos de bloco
// Escopos de função

// let escopoGlobal = 'global';

// {
//     let escopoBloco = 'bloco';       
//     var escopoBloco_var = 'bloco';       
// }

// function teste(){
//     let escopoFuncao = 'Função';
//     var escopoFuncao_var = 'Função';
// }


// EXEMPLOS DE FUNÇÕES UTILIZADAS NO DIA-A-DIA

function format2Decimals(n){ 
    let str = `${n}`;
    if(str.length < 2){
        return '0'+str; 
    }else{
        return str;
    }
} 
// console.log(format2Decimals('1'));


function checkPair(n){
    if(n%2 == 0){
        return true;
    }
    return false;
}
// console.log(checkPair(321))


function isMultiple(n,div){

/**
 * 50 / 5 = 10 -> true
 * 3 / 2 = 1.5 -> false
 */
    if(n%div == 0){
        return true;
    }
    return false;
}
// console.log(isMultiple(3,2));


// Verificar se um numero é inteiro
function isInteger(n){
/*
 1 -> true
 1.5 -> false

 1.5 === 1 -> false
*/

    if(n === parseInt(n)){
        return true;
    }
    return false;
    
}
// console.log(isInteger(1.5));


function findMaxString(str1, str2){
    if(str1.length > str2.length){
        return str1;
    }else if(str1.length < str2.length){
        return str2;
    }else{
        return str1; 
    }
}
// console.log(findMaxString('Paralelepipedo', 'Tigre'));

function isString(param){
    if(param === `${param}`){
        return true;
    }
    return false;
}
// console.log(isString(true));

function isNumber(param){
    if(typeof param === 'number'){
        return true;
    }
    return false;
}
// console.log(isNumber('123'));


// NO-ELSE-RETURN

function qualquer(){
    if(true == false){
        return true;
    }else{
        return false;
    }
}

function noElseReturn(){
    if(true == false){
        return true;
    }
    return false;
}

// Renomear uma função (apontamento de função)
function vaca(){
    console.log('muuuuuu');
}

const mimosa = vaca;
// mimosa();
// vaca();

const funcaoPadrao = qualquer;
// console.log(funcaoPadrao());


function teste(n1, n2){
    return n1 + n2;
}

console.log(teste(1,3))