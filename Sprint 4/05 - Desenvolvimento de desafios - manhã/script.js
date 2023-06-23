// Desafio da Conversão de Temperatura: Crie uma função que converta uma temperatura de Celsius para Fahrenheit.
// A função deve receber a temperatura em Celsius como parâmetro
function celsiusParaFh(celsius) {
  // F = C x 1,8 + 32
  // F -> Fahrenheit
  // C -> Celsius

  const fahrenheit = celsius * 1.8 + 32;
  // e retornar o valor correspondente em Fahrenheit.
  return fahrenheit;
}

console.log(celsiusParaFh(30));
console.log(celsiusParaFh(16));
