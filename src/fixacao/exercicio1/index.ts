/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

//1.
type Person = {
  nome: string
  idade: number
  corFavorita: Colour
}

enum Colour {
  CORUM = 'Vermelho',
  CORDOIS = 'Laranja',
  CORTRES = 'Amarelo',
  CORQUATRO = 'Verde',
  CORCINCO = 'Azul',
  CORSEIS = 'Anil',
  CORSETE = 'Violeta',
}

//2.
const pessonOne : Person = {
  nome: 'Juliano',
  idade: 34,
  corFavorita: Colour.CORUM,
}

const personTwo : Person = {
  nome: 'Dimitri',
  idade: 15,
  corFavorita: Colour.CORSETE
}

const personThree : Person = {
  nome: 'Douglas',
  idade: 27,
  corFavorita: Colour.CORQUATRO
}