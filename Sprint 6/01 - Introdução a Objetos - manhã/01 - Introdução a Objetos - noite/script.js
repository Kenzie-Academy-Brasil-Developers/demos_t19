//ARRAY
let arr = [1,2,3,4];
arr.push(5);
arr.unshift(0);

//LOOP
let count = 0;
while(count < 10){
    // console.log(count);
    count++;
}

for(let i = 0; i < 10 ; i++){
    // console.log(i);
}

for(let i = 0 ; i<arr.length ; i++){
    // console.log(arr[i]);
}


// OBJETOS

// let smartphone1 = {
//     marca: 'Samsung',
//     tamanhoTela: '9',
//     armazenamento: '128Gb',
//     preco: 1889,
//     cor: 'Azul'
// }
// let smartphone2 = {
//     marca: 'Apple',
//     tamanhoTela: "8'2",
//     armazenamento: "64Gb",
//     preco: 3200,
//     cor: 'Branco'
// }


//Receber o mes em numero e retornar o nome do mes 
function cornverteMes(numero){
    let arrMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
       //               0           1          2       3         4        5       6         7          8          9         10          11      
       //               1           2          3       4         5        6       7         8          9          10        11          12  

    return arrMeses[numero - 1];

    // if(numero == 1){
    //     return 'Janeiro';
    // }else if(numero == 2){
    //     return 'Fevereiro'
    // }else if(numero == 3){
    //     return 'Março'
    // }else if(numero == 4){
    //     return 'Abril'
    // }else if(numero == 5){
    //     return 'Maio'
    // }else if(numero == 6){
    //     return 'Junho'
    // }else if(numero == 7){
    //     return 'Julho'
    // }else if(numero == 8){
    //     return 'Agosto'
    // }else if(numero == 9){
    //     return 'Setembro'
    // }else if(numero == 10){
    //     return 'Outubro'
    // }else if(numero == 11){
    //     return 'Novembro'
    // }else if(numero == 12){
    //     return 'Dezembro'
    // }
}

let arr2 = ['Thiago', 'Koman', 25, 22, 1 , 1998, true];

let pessoa1 = {
    nome: 'Thiago', 
    sobrenome: 'Koman', 
    idade: 25,
    dataNascimento: [22,1,1998],
    admin: true,
    acao: 'correr'    
} 


let pessoa2 = {
    nome: 'Chrystian',
    sobrenome: 'Rodolfo',
    idade: 27,
    dataNascimento: [25,2,1996],
    admin: false
} 

console.log(`O nome da pessoa é: ${pessoa1.nome}`);
//console.log(pessoa1.idade);
//console.log(pessoa1['nome']);

pessoa1.corDoCabelo = 'Amarelo';
pessoa1['idade'] = 26;
// //console.log(pessoa1);

// pessoa1.dataNascimento = {
//     dia: pessoa1.dataNascimento[0],
//     mes: pessoa1.dataNascimento[1],
//     ano: pessoa1.dataNascimento[2],
// }

pessoa1.dataNascimento = `${pessoa1.dataNascimento[0]} de ${cornverteMes(pessoa1.dataNascimento[1])} de ${pessoa1.dataNascimento[2]}`

delete pessoa1.corDoCabelo;
//console.log(pessoa1);



let pet1 = {
    raca: 'poodle',
    tamanho: 'médio',
    pelagem: 'media',
    nome: 'pipoquinha',
    tipo: 'cachorro',
    latir: function(){
        //console.log('AuAuAu');
    } 
}

let pet2 = {
    raca: 'Siamês',
    tamanho: 'pequeno',
    pelagem: 'curta',
    nome: 'Felicia',
    tipo: 'gato',
    miar: function(){
        //console.log('Miaaaauaua')
    },
    latir: function(){
        //console.log('AuAuAu');
    } 
}

for (key in pet2) {
    console.log(`${key}: ${pet2[key]}`);
}



let arrExemplo = [];
for(let i = 10 ; i >= -10 ; i--){
    arrExemplo.push(i);
}
console.log(arrExemplo)