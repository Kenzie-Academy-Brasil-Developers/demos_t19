// Revisão S4

function nomeDaFuncao(a,b,op){
    if(op == '+'){
        return a+b;
    }else if(op == '-'){
        return a-b;
    }

    return NaN;
} 


let retorno = nomeDaFuncao(3,5,'+');
retorno = `${retorno}`;
console.log(retorno);


// Laço de repetição - loop

let i = 0;
while(i<=10){
    i++; //i = i + 1
    console.log(i);
}


do{
    i++; //i = i + 1
    console.log(i);
}while(i<10);

console.log('Finalizou o laço');



// for(inicialização ; condição ; iteração)
for(let i = 0 ; i<10 ; i++){
    console.log(i);
}


// Exemplo de aplicação do laço de repetição

let nome = 'Kenzie Academy Brasil'; //21 caracteres

let nomeCript = '';
for(let i = 0; i<21 ; i++){
    let char = nome[1];

    if(char == 'e' || char == 'a'){
        nomeCript = nomeCript + '-'
    }else{
        nomeCript = nomeCript+char;
    }
    console.log(nomeCript);
}
