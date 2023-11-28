/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.*/

  enum CORES_DO_ARCO_IRIS  {
    AMARELO = "amarelo",
    AZUL = "azul",
    ROSA = "rosa",
    BRANCO = "branco"
  }

type TPessoa = {
  nome: string,
  idade: number,
  corFavorita: CORES_DO_ARCO_IRIS
}

/* 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades. */

const pessoa1: TPessoa = {
  nome: 'Camila',
  idade: 41,
  corFavorita: CORES_DO_ARCO_IRIS.AMARELO 
}

const pessoa2: TPessoa = {
  nome: 'Elza',
  idade: 69,
  corFavorita: CORES_DO_ARCO_IRIS.BRANCO
}

const pessoa3: TPessoa = {
  nome: 'Antonio',
  idade: 71,
  corFavorita: CORES_DO_ARCO_IRIS.AZUL
}
//3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. 
//Utilize um enum para isso.


const pessoas: TPessoa[] = [
  pessoa1,
  pessoa2,
  pessoa3
]

console.table(pessoas);
