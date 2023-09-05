/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/


type TPerson = {
   id: string,
   name: string,
   email: string,
   password: string 
}

enum USE_ROLE {
    ADMIN = "admin",
    NORMAL = "normal"
}


type AdminAccount = {
    account: string,
    permission: USE_ROLE.ADMIN
}

type NormalAccount = {
    account: string,
    permission: USE_ROLE.NORMAL
}


const userAdmin:AdminAccount={
    account: "Felipe",
    permission: USE_ROLE.ADMIN
}

const userNormal:NormalAccount={
    account: "Felipe",
    permission: USE_ROLE.NORMAL
}







/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

type AdminUser = TPerson & AdminAccount
type NormalUser = TPerson & NormalAccount

const userAdm:AdminUser = {
    id:"001",
    name:"Joara",
    email:"joara@email.com",
    password:"12345",
    account:"administrador",
    permission: USE_ROLE.ADMIN

    
}

const userComun:NormalUser = {
    id:"002",
    name:"Joaraa",
    email:"joara1@email.com",
    password:"12345",
    account:"normal",
    permission: USE_ROLE.NORMAL
}


const users: Array<AdminUser | NormalUser> = [userAdm,userComun]


console.table(users);
