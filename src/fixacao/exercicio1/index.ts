/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum CORES {
  VERMELHO = "Vermelho",
  AMARELO = "Amarelo",
  AZUL = "Azul",
  VERDE = "Verde"
}

type TPessoa = {
  nome: string
  idade: Number
  corFavorita: string
}

type TInfos = TPessoa

const objeto1: TInfos = {
  nome: "Beltrano",
  idade: 22,
  corFavorita: CORES.AMARELO
}

const objeto2: TInfos = {
  nome: "Fulano",
  idade: 35,
  corFavorita: CORES.AZUL
}

const objeto3: TInfos = {
  nome: "Ciclano",
  idade: 18,
  corFavorita: CORES.VERDE
}

const user: TInfos[] = []

user.push(objeto1, objeto2, objeto3)
console.log(user)