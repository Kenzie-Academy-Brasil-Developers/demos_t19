// arrays
const arrayPessoa = [
  "Chrystian", // 0
  "Rodolfo", // 1
  30, // 2
  [3, 3], // 3
  ["leitura", "musica"], // 4
  true, // 5
  "Sao Paulo", // 6
];

for (let i = 0; i < arrayPessoa.length; i++) {
  console.log(arrayPessoa[i]);
}
// console.log(arrayPessoa[3][0]);

// Objetos (estrutura de chave e valor)
const pessoa = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  idade: 30,
  aniversario: [3, 3],
  interesses: ["leitura", "musica"],
  admin: true,
  cidade: "São Paulo",
  removerPrivilegioAdmin: function (usuario) {
    usuario.admin = false;
  },
};

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.interesses[1]);

// console.log(`Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}, você tem ${pessoa.idade}
// anos de idade e faz aniversario em ${pessoa.aniversario[0]}/${pessoa.aniversario[1]}.
// `);

function converteAniversarioParaObj(usuario) {
  // console.log(usuario);
  usuario.aniversario = {
    dia: usuario.aniversario[0],
    mes: usuario.aniversario[1],
  };

  // usuario.endereco = "Rua das flores";
}
// converteAniversarioParaObj(pessoa);
// converteAniversarioParaObj();
// console.log(`Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}, você tem ${pessoa.idade}
// anos de idade e faz aniversario em ${pessoa.aniversario.dia}/${pessoa.aniversario.mes}.
// `);

function removeAdmin(usuario) {
  usuario.admin = false;
}
// console.log(pessoa);
// removeAdmin(pessoa);
// console.log(pessoa);

// pessoa.removerPrivilegioAdmin(pessoa);
// console.log(pessoa);

// console.log(pessoa.idade);
// Forma equivalente de acessar valor de uma chave
// console.log(pessoa["idade"]);
// console.log(pessoa["cidade"]);

// for (let i = 0; i < arrayChaves.length; i++) {
//   let chave = arrayChaves[i];
//   // console.log(chave);
//   // console.log(pessoa.chave);
//   console.log(pessoa[chave]);
//   // console.log(pessoa["nome"]);
// }

// Funciona para arrays e objetos, itera sobre os indices (arrays) ou sobre as chaves (objetos)
for (let chave in pessoa) {
  // console.log(chave);
  console.log(pessoa[chave]);
}

for (let index in arrayPessoa) {
  // console.log(index);
  console.log(arrayPessoa[index]);
}

// Funciona para arrays, itera diretamente sobre os valores
for (let valor of arrayPessoa) {
  console.log(valor);
}

// É possivel deletar um atributo (chave e valor) de um objeto, mas raramente se usa.
delete pessoa.admin;
console.log(pessoa);

pessoa.removerPrivilegioAdmin(pessoa);
console.log(pessoa);
