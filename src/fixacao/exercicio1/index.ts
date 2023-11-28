// EXERCÍCIO DE FIXAÇÃO
// 1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//   a. nome, que é uma string;
//   b. idade, que é um número;
//   c. corFavorita, que é uma string.

enum CORES {
  ADMIN = "admin",
  NORMAL = "normal",
  VERMELHO = "vermelho",
  LARANJA = "laranja",
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  ANIL = "anil",
  VIOLETA = "violeta"
}

// type TPessoa = {
//   name: string;
//   idade: number;
//   corFavorita: string;
// };

type TPessoa = {
  name: string;
  idade: number;
  corFavorita: CORES;
};

// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir que todos os objetos tenham as mesmas propriedades.

// const pessoa1 = {
//   name: "Fernanda",
//   idade: 48,
//   corFavorita: "azul"
// }

const pessoa1 = {
  name: "Fernanda",
  idade: 48,
  corFavorita: CORES.AZUL
}

const pessoa2 = {
  name: "Erik",
  idade: 48,
  corFavorita: CORES.VERDE
}

const pessoa3 = {
  name: "Maia",
  idade: 14,
  corFavorita: CORES.AMARELO
}

// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.

const pessoa = [pessoa1, pessoa2, pessoa3]

console.log(pessoa);