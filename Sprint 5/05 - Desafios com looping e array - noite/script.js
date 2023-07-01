//1 - Desafio do login: Crie um sistema de login que solicita ao usuário seu nome de usuário e senha. Se o nome de usuário e a senha estiverem corretos, exiba uma mensagem de boas-vindas. Caso contrário, exiba uma mensagem informando que o nome de usuário ou a senha estão incorretos e peça que o usuário tente novamente.


// let nome = "";
// let senha = "";

// while(nome !='TKranio' && senha !== "Batatinha"){
//     nome = prompt('Digite o username');
//     senha = prompt('Digite a senha');

//     if(nome !='TKranio' && senha !== "Batatinha"){
//         alert('Algo de errado não está certo. Tente novamente!');
//     }
// }
// alert('Seja bem vindo ' + nome);

//3 - Desafio da senha segura: Crie um formulário de cadastro que solicita ao usuário um nome de usuário e uma senha. A senha deve ter pelo menos oito caracteres, deve conter numeros ou caracteres especiais e letras maiusculas e minusculas. Use condicionais para verificar se a senha atende a esses critérios e exiba uma mensagem de erro caso contrário e peça que o usuário tente novamente.

/*
 - Pelo menos 8 caracteres - ok
 - Numeros ou caracteres especiais - ok
 - Maiusculas e minusculas - ok
*/

let pass = "";
let flagVer1 = true;
let flagVer2 = true;
let flagVer3 = true;

// while(flagVer1 || flagVer2 || flagVer3){
//     pass = prompt('Digite a sua senha');

//     flagVer1 = !verifyCaracter(pass);
//     flagVer2 = pass.length < 8;
//     flagVer3 = !(pass.toUpperCase() != pass || pass.toLowerCase() != pass)

//     if(flagVer1 || flagVer2 || flagVer3 ){
//         alert('Senha não cumpre os requisitos, tente outra!');
//     }
// }
// alert('Senha segura cadastrada: '+pass)

function verifyCaracter(str){
    let flag = false;
    for(let i = 0; i<str.length ; i++){
        if(str[i].toUpperCase() == str[i].toLowerCase()){
            flag = true;
        }
    }
    return flag;
}



for(let i = 0 ; i < 5 ; i++){
    console.log(i);
}