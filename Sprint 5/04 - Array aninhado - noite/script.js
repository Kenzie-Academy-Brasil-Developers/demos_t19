//Array 
let arr = [1,2,3];

arr.push(4); //[1,2,3,4]
arr.unshift(0); //[0,1,2,3,4]

let arr2 = [12, 13, 14, 15, 16, 17];

let arr3 = [12, 'Kenzie', [12,12], {nome: 'kenzie', tipo:'Estudo'}]

let arrayNotas = [
    //[html, css, javascript, responsividade, react]
    [100, 45,  10,  12,  15], //aluno 1
    [89,  87,  67,  89, 100], //aluno 2
    [65,  45,  12,  11,   8], //aluno 3
    [98,  99, 100, 100,  80]  //aluno 4
];

function listarNotas(matriz){
    let feedback = [];
    for(let i = 0 ; i<matriz.length ; i++){
        const notasAluno = matriz[i];
        let soma = 0;
        for(let j = 0 ; j<notasAluno.length ; j++){
            const nota = notasAluno[j]; 
            soma = soma + nota;
        }
        const media = soma/notasAluno.length;

        let situacao = "";
        if(media >= 80){
            situacao = 'Aprovado';
        }else{
            situacao = 'Reprovado';
        }

        feedback.push(`Média do aluno ${i+1}: ${media} - ${situacao}`); 

        feedback.push(media); 
    }
    return feedback;
}

console.log(listarNotas(arrayNotas));


function avaliarMateria(boletim){
    let arrResumo = [0,0,0,0,0];
    let count = 0;
    for(let i = 0 ; i<boletim.length ; i++){
        count++;
        for(let j = 0; j<boletim[i].length; j++){
            arrResumo[j] += boletim[i][j];
        }
    }

    for(let i = 0 ; i<arrResumo.length ; i++){
        arrResumo[i] = arrResumo[i]/count;
    }
    console.log(arrResumo);
}
// avaliarMateria(arrayNotas)



function listarNotas(matriz){
    let feedback = [];
    for(let i = 0 ; i<matriz.length ; i++){
        const notasAluno = matriz[i];
        let soma = 0;
        for(let j = 0 ; j<notasAluno.length ; j++){
            const nota = notasAluno[j]; 
            soma = soma + nota;
        }
        const media = soma/notasAluno.length;

        feedback.push(media); 
    }
    return feedback;
}

let arrayNotas2 = [
    //[html, css, javascript, responsividade, react]
    [100, 45,  10,  12,  15], //aluno 1
    [89,  87,  67,  89, 100], //aluno 2
    [65,  45,  12,  11,   8], //aluno 3
    [98,  99, 100, 100,  80]  //aluno 4
];
