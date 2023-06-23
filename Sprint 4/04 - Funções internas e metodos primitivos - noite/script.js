// REVISÃO DEMO ANTERIOR

// 1. Função para auxiliar na formatação de data (dia/mes)
// 2. Verificação de uma numero par
// 3. Verificação de numero multiplo
// 4. Verificar se um numero é inteiro
// 5. Verificar e retornar texto com mair quantidade de caracteres
// 6. Verificação do tipo texto (string)
// 7. Verificação do tipo numero (number)

// no-else-return

function revisao(a){
    if(a < 10){
        return a+' é menor do que 10';
    }
    return a+' é maior ou igual a 10';
}


// DEMO DE HOJE

// Funções internas

function calculadora(a, b, op, flag){
    
    function soma(n1,n2){
        return n1+n2;
    }
    function subtracao(n1, n2){
        return n1-n2;
    }
    function multiplicacao(n1, n2){
        return n1*n2
    }
    function divisao(n1,n2){
        return n1/n2;
    }

    function verificaOperacao(){
        if(op == '+'){
            return soma(a,b);
        }else if(op == '-'){
            return subtracao(a,b);
        }else if(op == '*'){
            return multiplicacao(a,b);
        }else if(op == '/'){
            return divisao(a,b);
        }else{
            return NaN;
        }
    }

    let resultado = verificaOperacao();
    
    function showMessage(){
        return `${a} ${op} ${b} = ${resultado}`;
    }

    /*
        false == true -> false
        true == true  -> true
    */
    if(flag){ 
        return showMessage();
    }
    return resultado;
   
}

// console.log(calculadora(15,5,'/',false)); //10

// console.log(soma(12,3));
// a, b, op('+','-','*','/')



// MÉTODOS PRIMITIVOS

// Métodos de string
let str1 = 'Kenzie Academy';
let str2 = 'Academy Academy Academy';

// replace
console.log(str1.replace('Academy', 'Escola')); //'Kenzie Escola'

// replaceAll
console.log(str2.replaceAll('Academy', 'Escola')); //'Escola Escola Escola'

// starsWith
console.log(str1.startsWith('Ken'));  //false

// includes
console.log(str1.includes('Brasil')); //true

let data = '12h14:15'
if(data.includes('h') || data.includes('m')){
    data = data.replace('h',':');
    data = data.replace('m',':');
}

// console.log(data);


// Métodos de numeros
let n1 = 12345;
let n2 = 3.141517; 
let str_num = '12.5';

// toFixed()
console.log(parseFloat(n2.toFixed(1)));

// isInteger
console.log(Number.isInteger(n1));
console.log(Number.isInteger(n2));

// parseInt()
console.log(parseInt(str_num));
console.log(parseInt(n2));

// parseFloat()
console.log(parseFloat(str_num));

// Converter numero para string
console.log(`${n2}`);
console.log(n2.toString());




let nome = 'Thiago';
let senha = '1234';

if(nome == 'Thiago'){
    if(senha == '1234'){
        console.log('Usuário tem permissão');
    }
}

if(nome == 'Thiago' && senha == '1234'){
    console.log('Usuário tem permissão');
}

