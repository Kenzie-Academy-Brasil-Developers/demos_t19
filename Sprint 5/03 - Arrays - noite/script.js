/*
 - Variaveis (let, const, var)
 - Tipos de valor(boolean, number, string)
 - Condicionais (if, else if, else)
 - Funções (function, parâmetros, return)
 - Loop ou laço de repetição (while, do while, for)
 - Array 
*/

let arr = [1,2,3]; //length -> 3


arr.push('K');   // [1,2,3,'K']
arr.push('e');   // [1,2,3,'K','e']
arr.push(true);  // [1,2,3,'K','e',true]
arr.push(false); // [1,2,3,'K','e',true, false]
arr.push([]);    // [1,2,3,'K','e',true, false, []]

arr.unshift(0); //[0,1,2,3,'K','e',true, false, []].length -> 9

console.log(arr); //[1,2,3]

//[ 0 , 1 , 2 , 3 , 'K' , 'e' , true ,  false , [] ]
//  0   1   2   3    4     5      6       7      8

const ultimoIndiceArr = arr.length - 1;  //8
console.log(arr[ultimoIndiceArr]);

let str = 'Kenzie Academy';
const ultimoIndiceStr = str.length - 1;
console.log(str[ultimoIndiceStr]);
// 'K' 'e' 'n' 'z' 'i' 'e'
//  0   1   2   3   4   5



//Desenvolva uma função recebe por parametro um array e uma string, e tem o objetivo de retornar se a string está presente dentro do array ou não.

function verificaValor(arr, str){
    for(let i = 0; i<arr.length; i++){
        const nome = arr[i];
        if(nome == str){
            return `Encontrei a palavra no indice: ${i}`;
        }
    }

    return 'Infelizmente, não encontrei a palavra na lista!'

}
let lista = ['Thiago', 'Gabriel', 'Taina', 'Diego'];
console.log(verificaValor(lista, 'Ugo'));


