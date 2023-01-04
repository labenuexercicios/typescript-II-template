/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type TPessoa ={
  nome:string,
  idade:number,
  corFavorita:string
}

enum CorFavorita {
  VERMELHO="vermelho",
  LARANJA="laranja",
  AMARELO="amarelo",
  VERDE="verde",
  AZUL="azul",
  ANIL="anil",
  VIOLETA="violeta"
}

const pessoa1:TPessoa={
  nome:"Thalita",
  idade:29,
  corFavorita: CorFavorita.AMARELO
}

const pessoa2:TPessoa={
  nome:"Luizinho",
  idade:2,
  corFavorita:CorFavorita.AZUL
}

const pessoa3:TPessoa={
  nome:"Luiz Paulo",
  idade:36,
  corFavorita:CorFavorita.VERMELHO
}

const pessoa4:TPessoa={
  nome:"Paulo",
  idade:96,
  corFavorita:CorFavorita.LARANJA
}

console.table([pessoa1,pessoa2,pessoa3,pessoa4])