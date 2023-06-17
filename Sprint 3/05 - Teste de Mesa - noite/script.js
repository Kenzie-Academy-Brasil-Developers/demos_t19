// TESTE DE MESA

let a = 2;
let b = 3;

a = a*b;
b = a+b;
a = a+b;
b = a*b;

let result = a+b;

if(result % 2 == 0){
    console.log('O resultado é par');
}else{
    console.log('O resultado é impar');
}

/*
Desafio do login: Crie um sistema de login que solicita ao usuário seu nome de usuário e senha. Se o nome de usuário e a senha estiverem corretos, exiba uma mensagem de boas-vindas. Caso contrário, exiba uma mensagem informando que o nome de usuário ou a senha estão incorretos.
*/

//Dev_kenzie | senacabulos1234

let nome = prompt('Digite seu nome de usuário:');

if(nome == 'Dev_kenzie'){
    let senha = prompt('Digite sua senha');
    if(senha == 'senacabulos1234'){
        alert(`Seja bem vindo, ${nome}`);
    }else{
        alert('A senha está incorreta!');
    }
}else{
    alert(`Usuário ${nome} inválido`);
}



/*
Desafio do jogo de dados: Crie um jogo de dados simples em que o usuário jogue um dado e tente adivinhar se o próximo número será maior ou menor. Se o usuário acertar, exiba uma mensagem de parabéns. Caso contrário, exiba uma mensagem informando que ele perdeu. Você pode usar a função Math.random() para gerar os números aleatórios.
*/
//maior ou igual a 0 e menor que 1 || Math.random()


/*
    0 =< num < 1
    num * 11
    0 =< num < 11
    max num -> 10.9999999999
    ( 0 =< num <= 10 ) + 2
    2 =< num <= 12

*/

//2 -> 12  != 10

// [1] [1] = 2
// [6] [6] = 12

let dados = parseInt(Math.random()*11) + 2;

let resposta = prompt('O valor do dado é: ' + dados+' O próximo numero será maior ou menor que o anterior? (menor|maior|empate)');

let dados2 = parseInt(Math.random()*11) + 2;

if((dados > dados2 && resposta == 'menor') ||
   (dados < dados2 && resposta == 'maior') ||
   (dados == dados2 && resposta == 'empate')  
){
    alert('Muito bem, você ganhou! O valor do segundo foi:' + dados2);
}else{
    alert(`Infelizmente você errou! o primeiro dado foi ${dados} e o segundo foi ${dados2} e você infomou que o valor do segundo dado seria ${resposta} que o valor do primeiro dado!`);
}




/*
Desafio do jogo de advinhação: Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100 e o usuário tem que adivinhar qual é o número. O jogo deve informar se o número inserido pelo usuário é maior ou menor do que o número secreto. 
*/

let numero = parseInt(Math.random()* 100) + 1;

let numUser = parseInt(prompt('Digite um numero de 1 a 100'));

if(numUser > numero){
    alert('Seu numero é MAIOR do que o numero secreto');
    numUser = parseInt(prompt('Digite um numero de 1 a 10'));
    if(numUser == numero){
        alert('Parabéns, você acertou!!');
    }
}else if(numUser < numero){
    alert('Seu numero é MENOR do que o numero secreto');
    numUser = parseInt(prompt('Digite um numero de 1 a 100'));
    if(numUser == numero){
        alert('Parabéns, você acertou!!');
    }
}else{
    alert('Parabéns, de primeira!!!');
}

alert('O numero secreto era:' + numero);


