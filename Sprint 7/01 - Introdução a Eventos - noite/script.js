// Objetos

// Métodos de objetos

// Introdução ao DOM

// Seletores
// createElement
// appendChild
// classList
// innerHTML innerText

// const pessoa = {
//     nome: 'Thiago',
//     sobrenome: 'Koman',
//     idade: 25
// }

// let pessoas = [
//     pessoa,
//     {
//         nome: 'Jose',
//         sobrenome: 'Carlos',
//         idade: 22
//     },
//     {
//         nome: 'Gustavo',
//         sobrenome: 'Fernando',
//         idade: 28
//     },
//     {
//         nome: 'Diego',
//         sobrenome: 'Alves',
//         idade: 24
//     },
// ]

// let elementos = document.querySelector('#elementos');

// for(let i = 0; i<pessoas.length ; i++){
//     // 1. Criar um elemento
//     let p = document.createElement('p');

//     // 2. Configurar o elemento
//     p.innerText = `${pessoas[i].nome} ${pessoas[i].sobrenome} tem ${pessoas[i].idade} anos de idade`;

//     // 3. Configurar a hieraquia interna dos elementos

//     // 4. Adicionar o elemento dentro de um outro elemento já existente na página
//     elementos.appendChild(p);
// }



// EVENTOS

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     alert('Clicou')
// });

const ul = document.querySelector('#elementos');

const show = document.querySelector('#btn-show');
show.addEventListener('click', function(e){
    e.stopPropagation();
    ul.style.opacity = '1';
    console.log(e);

    // if(e.pointerType == "mouse"){
    //     alert('Você está no PC');
    // }else{
    //     alert('Você está no smartphone')
    // }
    // ul.classList.remove('hide');
    // ul.classList.add('show');
    // console.log('Clicou no Show');
});

const hide = document.querySelector('#btn-hide');
hide.addEventListener('click', function(e){
    e.stopPropagation();
    ul.style.opacity = '0';

    console.log(e);
    // ul.classList.remove('show');
    // ul.classList.add('hide');
    // console.log('Clicou no Hide');
});

const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', function(e){
    // console.log('Clicou na DIV');
    console.log(e.target);

})
buttons.addEventListener('dblclick', function(e){
    console.log('Duplo Click na DIV');
})


const body = document.querySelector('body');
body.addEventListener('click', function(e){
    console.log(e);

    // console.log('Clicou no BODY');
})

const a = document.querySelector('a');
a.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('Clicou na ancora');
})



// function original(tipo, funcao){
//     console.log(tipo);
//     console.log(funcao(tipo));
// }

// original('click', function(tipo){
//     return 'Executei '+tipo;
// });