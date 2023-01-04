/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1

type TPerson = {
  id:string,
  name:string,
  email:string,
  password: string,
  role: Role
}




//1.2

type TAdminAccount = {
  account:string|number,
  permission: boolean
}

type TNormalAccount = {
  account:string|number,
  permission:boolean
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
  ADMIN = "Admin",
  NORMAL = 'Normal'
}

const userOne : TPerson={

  id: "21536",
  name:"Thalita",
  email:"thalita@email",
  password: "123456",
  role: Role.ADMIN

}

const userTwo : TPerson={

  id: "65326",
  name:"Luiz",
  email:"Luiz@email",
  password: "123456",
  role: Role.NORMAL

}

console.table(userOne)
console.table(userTwo)

//2.2

type TAdminUser = TPerson & TAdminAccount

const userThre:TAdminUser = {
  id: "21536",
  name:"Thalita",
  email:"thalita@email",
  password: "123456",
  role: Role.ADMIN,
  account:134568-8,
  permission: true
}



type TNormalUser = TPerson&TNormalAccount

const userFour:TNormalUser = {
  id: "65326",
  name:"Luiz",
  email:"Luiz@email",
  password: "123456",
  role: Role.NORMAL,
  account:1345896-8,
  permission: false
}



const arrayUser:TAdminUser[]|TNormalUser[] = [userThre,userFour]

console.table(arrayUser)