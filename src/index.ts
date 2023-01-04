/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
*/
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: "ADMIN" | "NORMAL",
}

const cliente: TPerson={
  id:"1d12f1e5r",
  name:"Joao",
  email: "joao@gmail.com",
  password: "123456",
  role: "ADMIN",
}
console.log(`Nome: ${cliente.name},\n Email: ${cliente.email}`)

/*
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

type AdminAccount ={
  account: string,
  permission: boolean,
}
type NormalAccount ={
  account: string,
  permission: boolean,
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:*/

//1. Enum com valores ADMIN e NORMAL;

enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

const novoCLiente :TPerson ={
  id: "1s2df8r9w4d5f65f4d",
  name: "Maria",
  email: "maria@email.com",
  password: "maria123",
  role: Role.ADMIN
}
console.table(novoCLiente)

// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

type NormalUsers = TPerson & NormalAccount
type AdminUser = TPerson & AdminAccount

type UnionTypeToArray = NormalAccount | AdminUser

const NormalAccountArray : UnionTypeToArray[] = []
// 4. Crie duas pessoas, uma com permissão normal e a outra admin;
const userNormal: NormalUsers ={
  id: "n42n2n5",
  name: "César",
  email: "cesarbackend@contato.com",
  password: "cesar+datadeNascimento",
  role: Role.NORMAL,
  account: "Dr.Cesar",
  permission: false
}

const userAdmin: AdminUser = {
  id: "asvase3124",
  name: "Everson",
  email: "eversonbackend@contato.com",
  password: "everson+datadeNascimento",
  role: Role.ADMIN,
  account: "Ever",    
  permission: true
}

const pessoaCliente: TPerson = {
  id: "asv123ase3124",
  name: "Samvs",
  email: "samvs@contato.com",
  password: "samvs123456",
  role: Role.NORMAL
}
// 5. Guarde essas pessoas no array de usuários.
NormalAccountArray.push(userNormal)
NormalAccountArray.push(userAdmin)

console.log("Array de Usuários")
console.table(NormalAccountArray)