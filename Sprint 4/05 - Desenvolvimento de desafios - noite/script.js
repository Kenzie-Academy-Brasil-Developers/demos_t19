// Desafio da Conversão de Moeda: Crie uma função js que converta uma quantidade de real em para outra moeda. A função deve receber o valor e a moeda de destino como parâmetros e retornar o valor convertido.

function convertMoeda(valor, moeda){
    if(moeda == 'dolar'){
        return 'U$'+(valor / 4.78).toFixed(2);
    }else if(moeda == 'euro'){
        return '$'+(valor / 5.23).toFixed(2);
    }else if(moeda == 'iene'){
        return '¥'+(valor / 0.033).toFixed(2);
    }
    return 'Não foi possivel realizar a conversão';
}

// console.log(convertMoeda(100, 'dolar'));


// Desafio da Conversão de Temperatura: Crie uma função que converta uma temperatura de Celsius para Fahrenheit. A função deve receber a temperatura em Celsius como parâmetro e retornar o valor correspondente em Fahrenheit.

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius*1.8) + 32;
    return fahrenheit + ' °F';
}

// console.log(celsiusToFahrenheit(-2));