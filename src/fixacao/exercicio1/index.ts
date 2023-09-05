/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.
*/

enum COLOR {
  AZUL_MARINHO = " #1a1e47",
  VERMELHO = " # e02b2b",
  AZUL_BEBE = ' #ff0000',
  AMARELO = ' #FFFF00',
  VERDE = ' #00FF00',
  ROXO = ' 8B00FF',
}

type TPeople = {
  name:string;
  idade:number;
  favoriteColor:COLOR
}

const pessoa1:TPeople = {
  name: 'Gabriel',
  idade: 22,
  favoriteColor: COLOR.AZUL_MARINHO
}

const pessoa2:TPeople = {
  name: 'Michele',
  idade: 20,
  favoriteColor: COLOR.ROXO
}

const pessoa3:TPeople = {
  name: 'Jhonatan',
  idade: 1,
  favoriteColor: COLOR.VERMELHO
}

// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.

// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
// */