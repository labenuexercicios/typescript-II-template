 /* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/



type TPerson = {
  id: string
  name: string
  email: string
  password: string
  role: string
}

type TAdminAccount ={
  account: string
  permission: boolean
}

type TNormalAccount ={
  account: string
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

enum ROLE {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

type TUserInfo = TPerson & TAdminAccount | TPerson & TNormalAccount

const pessoa1: TUserInfo = {
  id: "001",
  name: "Michelly",
  email: "michelly@gmail.com",
  password: "123456",
  role: ROLE.ADMIN,
  account: "corrente",
  permission: true
}

const pessoa2: TUserInfo = {
  id: "002",
  name: "Jezebel",
  email: "jezebel@gmail.com",
  password: "123456",
  role: ROLE.NORMAL,
  account: "corrente",
  permission: false
}

/* const users: TUserInfo[] = []

users.push(pessoa1, pessoa2)
console.log(users)  */