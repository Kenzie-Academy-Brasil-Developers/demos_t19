// Revisão S4-01

function nomeDaFuncao(parametro){
    return 'O parametro é: ' + parametro;
}

// console.log(nomeDaFuncao('Kenzie'));

/*
 - Conceito de funções
 - Parâmetros
 - return
*/



// DEMO DE HOJE

// Função para refatorar o código

// dd/mm/aaaa


// if(dia.length < 2){
//     dia = "0"+dia;
// }

// if(mes.length < 2){
//     mes = "0"+mes;
// }
function adicionaZeroEsquerda(str){ 
    if(str.length < 2){ 
        return "0"+str;
    }else{
        return str;
    }
}


function formataData(dia, mes, ano){
    dia = adicionaZeroEsquerda(dia);
    mes = adicionaZeroEsquerda(mes);
    let dataFormatada = `${dia}/${mes}/${ano}`;

    let dataFormatada2 = dia + "/" + mes + '/' + ano; 

    // let resultado_teste = 'O resultado foi: ' + dataFormatada2;

    return dataFormatada;
}

let dia = prompt('Digite o dia:');
let mes = prompt('Digite o mês:');
let ano = prompt('Digite o ano:');

alert(formataData(dia,mes,ano))



// ESCOPO DE FUNÇÃO

//Escopo global
let variavel_global = 'global';

//Escopo de bloco
if(true){
    let variavel_bloco_let = 'bloco';
    const variavel_bloco_const = 'bloco';
    var variavel_bloco_var = 'bloco';
}
console.log(variavel_bloco_var);
console.log(variavel_bloco_const);
console.log(variavel_bloco_let);


//Escopo de função
function testeEscopo(){
    let func_let = 'função';
    const func_const = 'função';
    var func_var = 'função';

    if(true){
        let teste = 'Teste';

    }
    console.log(teste);
}

testeEscopo();
console.log(func_let);
console.log(func_const);
console.log(func_var);