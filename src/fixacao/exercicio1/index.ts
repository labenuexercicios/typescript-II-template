/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/
type TPersonType = {
  name: string,
  idade: number,
  favoriteColor: 'vermelha'|'laranja'|'amarela'|'verde'|'azul'|'azul-escuro'|'violeta'
}

enum ColorsRaibow {
  Vermelha = 'vermelha',
  Laranja = 'laranja',
  Amarela = 'amarela',
  Verde = 'verde',
  AzulEscuro = 'azul-escuro',
  Violeta = 'violeta'
}

const Person1:TPersonType = {
  name: 'Julio',
  idade: 16,
  favoriteColor: ColorsRaibow.AzulEscuro
}

const Person2:TPersonType = {
  name: 'Susana',
  idade: 14,
  favoriteColor: ColorsRaibow.Laranja
}

const Person3:TPersonType = {
  name: 'Edmundo',
  idade: 12,
  favoriteColor: ColorsRaibow.Vermelha
}

const Person4:TPersonType = {
  name: 'Lucia',
  idade: 9,
  favoriteColor: ColorsRaibow.Violeta
}