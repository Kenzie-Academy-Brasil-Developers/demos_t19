/*
NA DEMO DE ONTEM
 - Introdução a laçõs de repetição
   - while
   - do while
   - for
 - Exemplo de utilização do for
*/

/*
DEMO DE HOJE
 - Utilização de funções por outras funções
 - Laço de repetição, para percorrer string
 - For aninhado
*/

/*
CONTEÚDO QUE SERÃO REVISADOS E REVISTOS
 - Funções
 - Manipulação de string
 - Condicionais
 - Laço de repetição 
*/

/*
    for(inicialização ; condição ; iteração)
        inicialização: trecho que será executado antes da primeira iteração
        condição: trecho que será verificado a cada iteração, é a condição de parada
        iteração: o que será executado a cada iteração, geralmente um incremento
*/

function removeSpace(str){
    let strWithoutSpace = "";

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] != ' '){
            strWithoutSpace += str[i];
        }
    }

    return strWithoutSpace;
}

function isPalindrome(str){

    let strInvert = "";
    let strLowerCase = str.toLowerCase();

    for(let i = strLowerCase.length - 1 ; i >= 0 ; i--){
        strInvert = strInvert + strLowerCase[i]; 
    }

    // console.log(strLowerCase,'|||', strInvert);
    // console.log(removeSpace(strLowerCase), '|||', removeSpace(strInvert));
    if(removeSpace(strLowerCase) == removeSpace(strInvert)){
        return true;
    }

    return false;
}

console.log(isPalindrome('Anotaram a data da maratona'));


function tabelaTabuada(n){
    for(let i = 1 ; i <= n ; i++){
        let linha = "";
        for(let j = 1 ; j <= n ; j++){
            linha += ' '+normalizaChar(i*j)+' '
            // console.log(`${i}x${j}=${i*j}`);
        }
        console.log(linha);
    }
}

function normalizaChar(str){
    let tamanho = str.toString().length;

    if(tamanho == 1){
        return `  ${str}`;
    }else if(tamanho == 2){
        return  ` ${str}`
    }else{
        return `${str}`;
    }
}
/**
 * i = 1 , j = 1  -> 1*1 = 1
 * i = 1 , j = 2  -> 1*2 = 2
 * i = 2 , j = 1  -> 2*1 = 2
 * i = 2 , j = 2  -> 2*2 = 4
 */

// tabelaTabuada(10)





