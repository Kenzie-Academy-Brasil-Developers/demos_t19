const array = [
    {
        nome: 'Thiago',
        sobrenome: 'Koman'
    },
    {
        nome: 'Chrys',
        sobrenome: 'Rodolfo'
    },
    {
        nome: 'Jonatã',
        sobrenome: 'Sousa'
    }
]

for(let i = 0 ; i<array.length ; i++){
    // console.log(array[i].sobrenome);
}

//DOM
// Document Object Model (Modelo de objeto do documento)

const titulo = document.head.children[2];
// titulo.innerHTML = "Teste 1234";
// console.log(titulo);

const h1 = window.document.body.children[0];
h1.innerText = 'Estou testando um negocinho'
h1.style.color = 'blue';
h1.style.background = 'yellow';

// Seleção pelo nome da tag
const ul = document.getElementsByTagName('ul');
ul[0].style.background = 'gray';

// Seleção pelo nome da classe
const li_0 = document.getElementsByClassName('primeiro-elemento');
li_0[0].style.fontWeight = 'bold';

// Seleção pelo id
const li_1 = document.getElementById('seletores');
li_1.style.color = 'white';

const lis = document.getElementsByTagName('li');
// let lis2 = document.querySelectorAll('li');

for(let i = 0; i<lis.length ; i++){
    // console.log(lis[i]);
    lis[i].style.border = '2px solid black';
}

const filmes = ['O poderoso Chefinho', 'Os minions', 'Avatar','Veloso e furioso', 'A volta dos que não foram'];

for(let i = 0; i<filmes.length ; i++){
    lis[i].innerText = filmes[i];
}

let obj = {
    nome: 'Thiago',
    sobrenome: 'Koman',
    apelido: 'TK',
    dataNascimento: [22,1,1998],
    admin: true
}
let str = 'Kenzie Academy Brasil';
let arr = ['Lucas', 'Fernando', 'Feijão', 'João', 'Pedro'];

for(let i = 0; i<arr.length ; i++){
    let valor = arr[i];
    console.log(valor)
}


// for(valor of arr){
//     console.log(valor);
// }

// for(chave in arr){
//     console.log(arr[chave]);
// }