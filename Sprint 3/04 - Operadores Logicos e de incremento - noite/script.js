// Operadores lógicos

let nome = prompt('Digite seu nome'); //Thiago
let senha = prompt('Digite a sua senha'); //9876

console.log(nome, senha);

if(nome === 'Thiago'){ //true
    if(senha == '1234'){ //false
        console.log('Usuário válido!')
    }else{
        console.log('Usuário inválido!');
    }
}else{
    console.log('Usuário inválido!');
}

// //&& - AND

// false && true
if(nome === 'Thiago' && senha == '1234'){
    console.log('Usuário válido!');
}else{
    console.log('Usuário inválido!');
}

/*
1 + 1 = ?

Tabela verdade do AND (&&) e
true  && true = true
true  && false = false
false && true = false
false && false = false
*/


//OR - ||

/*
Tabela verdade do OR (||) 
true  || true = true
true  || false = true
false || true = true
false || false = false
*/

let user = prompt('Digite seu nome de usuário:');

if(user == 'Thiago'){  //false
    console.log('O usuário é valido');
}else if(user == 'Vilson'){ // false
    console.log('O usuário é valido');
}else{
    console.log('Usuário não tem permissão!!!');  
}

if( user == 'Thiago' || user == 'Vilson' || user == 'Gabriel' || user == 'Fernando' || user == 'Amanda'){
    console.log('O usuário é válido');
}else{
    console.log('Usuário não tem permissão!!!'); 
}

//NOT - !

let lampada = true;

lampada = !lampada; //false
lampada = !lampada; //true
lampada = !lampada; //false

// console.log(lampada);

//Operadores de incremento e decremento

const a = 0;
const b = 1;
let result = a+b; // 0 + 1 = 1

result = result + 1; // 1 + 1 = 2
result++; // 2 + 1 = 3
result+=1; // 3 + 1 = 4

result+=2; // 4 + 2 = 6

result--; // 6 - 1 = 5
result-=3; // 5 - 3 = 2

result*=10;

// console.log(result);


// let resposta = confirm('Você deseja ficar feliz?');

// if(resposta){
//     alert('Eba, esteja feliz com esse emote (-.-)')
// }else{
//     alert('Fique triste então!!! (`.´)');
// }


// if( (nome == 'thiago' && senha == '1234') || (nome =='vilson' && senha == '4567') ){

// }