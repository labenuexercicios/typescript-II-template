/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/


type TPerson = {
    id: string;
    name: string;
    email:string;
    password:string;
}

enum USE_ROLE {
    ADMIN = 'admin',
    NORMAL = 'normal'
}

type AdminAccount = {
    account: string,
    permission: USE_ROLE.ADMIN
}

type NormalAccount = {
    account: string,
    permission: USE_ROLE.NORMAL
}

const userAdmin: AdminAccount ={
    account: 'Gabriel',
    permission: USE_ROLE.ADMIN
}

const userNormal: NormalAccount ={
    account: 'Michele',
    permission: USE_ROLE.NORMAL
}







/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 


// enum USE_ROLE {
//     ADMIN = 'admin',
//     NORMAL = 'normal'
// }

type AdminUser = TPerson & AdminAccount
type NormalUser = TPerson & NormalAccount

const userComum: NormalUser = {
    id:'002',
    name: 'Régi',
    email:'regi@gmail.com',
    password: '12343',
    account: 'Normal',
    permission: USE_ROLE.NORMAL
}

const userAdm:AdminUser = {
    id:'001',
    name:'Micheli',
    email: 'michele@gmail.com',
    password:'1234',
    account: 'administrador',
    permission: USE_ROLE.ADMIN
}

const users: Array<AdminUser | NormalUser> = [userAdm, userComum]

console.log(userComum)