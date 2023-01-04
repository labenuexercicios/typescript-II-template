/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string
  role: "Normal" | "Admin"
}




//1.2
type AdminAccount = {
  account: string | number,
  permission: boolean
}

type NormalAccount = {
  account: string | number,
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

enum Role  {
 ADMIN = "Admin",
 NORMAL = "Normal"
}

const userOne: TPerson = {
  id:"01",
  name:"Milena",
  email:"milena@email.com",
  password: "123456",
  role: Role.ADMIN
}

//2.2
type AdminUser = TPerson & AdminAccount

const userAdmin: AdminUser = {
  id: "03",
  name: "Milena",
  email: "milena@email.com",
  password: "654321",
  role: Role.ADMIN,
  account: "admin1",
  permission: true

}

type NormalUser = TPerson & NormalAccount

const userNormal: NormalUser = {
  id: "04",
  name: "Maria",
  email: "maria@email.com",
  password: "65432177",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}










