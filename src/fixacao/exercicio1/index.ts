/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


enum ARCO_IRIS {
  VERMELHO = "#FF0000",
  LARANJA = "#FF7F00",
  AMARELO = "#FFFF00",
  VERDE = "#00FF00",
  AZUL_CLARO = " #00FFFF",
  AZUL_ESCURO = "#0000FF",
  LILAS = " #8B00FF"
}

type Tperson = {
  nome: string,
  idade: number,
  corFav: ARCO_IRIS
}

const pessoa1: Tperson = {
  nome : "Fulano",
  idade:  23,
  corFav: ARCO_IRIS.AMARELO,
}

const pessoa2: Tperson = {
  nome : "Ciclano",
  idade:  24,
  corFav: ARCO_IRIS.AZUL_CLARO,
}

const pessoa3: Tperson = {
  nome : "Beltrano",
  idade:  25,
  corFav: ARCO_IRIS.LARANJA,
}


console.log(pessoa3);
