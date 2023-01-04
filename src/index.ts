// /* PRÁTICA GUIADA - Parte 1
// Crie um sistema de cadastro de usuários que contenha:

// 1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
// 2. Type Aliases de conta, com as propriedades account e permission: 
//   a. AdminAccount 
//   b. NormalAccount
// */

// function HelloWorld() {
//   return 'Olá Mundo'
// }

// enum Role {
//   ADMIN = 'ADMIN',
//   NORMAL = 'NORMAL',
// }

// type Person = {
//   id: string
//   name: string
//   email: string
//   password: number
//   role: Role.NORMAL
// }

// const cliente: Person = {
//   id: "Marimba",
//   name: "Ataíde",
//   email: "marimba@kmail.com",
//   password: 108108,
//   role: Role.NORMAL,
// }


// type AdminAccount = {
//   account: string
//   permission: boolean
// }

// type NormalAccount = {
//   account: string
//   permission: boolean 
// }

// type AdminUser = Person & NormalAccount

// type NormalUser = Person & NormalAccount

// const normalAccountArr : NormalUser[] = []

// const adminAccountArr : AdminUser[] = []

// const normalUser : NormalUser = {
//   id:'Novinho123',
//   name:'Antoni',
//   email: 'novinho123@kmail.com',
//   password: 1533,
//   role: Role.NORMAL,
//   account: 'normal',
//   permission: false, 
// }

// normalAccountArr.push(normalUser)

// /* PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL;
// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
// 4. Crie duas pessoas, uma com permissão normal e a outra admin;
// 5. Guarde essas pessoas no array de usuários.

// */