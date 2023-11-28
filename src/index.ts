/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role; */

export type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string
}

// 2.1 Criando ENUM

enum USER_ROLES{
    ADMIN = "admin",
    NORMAL = "normal"
}

/* 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e 
permission; */

export type TAdminAccount = {
    account: string,
    permission: USER_ROLES
}

export type TNormalAccount = {
    account: string,
    permission: USER_ROLES
}

//3. Crie exemplos de usuários Admin e Normal;

type AdminUser = TPerson & TAdminAccount //intersection Union

type NormalUser = TPerson & TNormalAccount

const user1: AdminUser = {
    id: "u001",
    name: "Camila",
    email: "camila@email.com",
    password: "01234camila",
    account: 'adm',
    permission: USER_ROLES.ADMIN
}

const user2: NormalUser = {
    id: "u002",
    name: "Paula",
    email: "paula@email.com",
    password: "0123456",
    account: 'normal',
    permission: USER_ROLES.NORMAL
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 

const users: AdminUser[] | NormalUser[] = [
    user1,
    user2
]

console.table(users)