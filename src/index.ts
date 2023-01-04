/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: 'ADMIN' | 'NORMAL'
}

type TAdminAccount = {
  account: string,
  permission: boolean,
  role: 'ADMIN'
}

type TNormalAccount = {
  account: string,
  permission: boolean,
  role: 'NORMAL'
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.
*/ 

enum Role {
  ADMIN = "ADMIN",
  NORMAL =  "NORMAL"
}

const client:TPerson = {
  id: "1b2b3b",
  name: 'Jorge',
  email: 'jorgindopneu@gmail.com',
  password: '123',
  role: Role.NORMAL
}

type NormalUser = TPerson & TNormalAccount
type AdminUser = TPerson & TAdminAccount

const userNormal: NormalUser = {
  id: '1b2b3b23b',
  name: 'César',
  email: 'cesinha@email.com',
  password: '123cesar',
  account: 'Seu césar',
  role: Role.NORMAL,
  permission: false
}

const userAdmin: AdminUser = {
  id: '1b2b3b23b',
  name: 'Lucas',
  email: 'luquinha@email.com',
  password: '123luc',
  account: 'ever',
  role: Role.ADMIN,
  permission: true
}

const normalAccountArray:NormalUser[] = []
normalAccountArray.push(userNormal)

const adminAccountArray:AdminUser[] = []
adminAccountArray.push(userAdmin)

type unionTypeToArray = NormalUser | AdminUser
const arrayUsers: unionTypeToArray[] = []
arrayUsers.push(userAdmin)
arrayUsers.push(userNormal)

console.table(adminAccountArray)
console.table(normalAccountArray)
console.table(arrayUsers)