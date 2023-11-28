// PRÁTICA GUIADA - Parte 1
// Crie um sistema de cadastro de usuários que contenha:

// 1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password;

type TPerson = {
  id: string | number;
  name: string;
  email: string;
  password: string;
};

// PRÁTICA 2.1: CRIANDO ENUM
enum USER_ROLES {
  ADMIN = "admin",
  NORMAL = "normal",
}

// 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;

type AdminAccount = {
  account: string;
  //   permission: string | boolean;
  permission: USER_ROLES;
};

type NormalAccount = {
  account: string;
  //   permission: string | boolean;
  permission: USER_ROLES;
};

// 3. Crie exemplos de usuários Admin e Normal;

// const user1: TPerson & AdminAccount = {
//     id: "u001",
//     name: "Fernanda",
//     email: "fer@email.com",
//     password: "123456",
//     account: "admin",
//     permission: "admin"
// }

type AdminUser = TPerson & AdminAccount; //INTERSECTION UNION

type NormalUser = TPerson & NormalAccount;

const user1: AdminUser = {
  id: "u001",
  name: "Fernanda",
  email: "fer@email.com",
  password: "123456",
  account: "admin",
  //   permission: "admin",
  permission: USER_ROLES.ADMIN,
};

const user2: NormalUser = {
  id: "u002",
  name: "Erik",
  email: "erik@email.com",
  password: "123456",
  account: "normal",
  //   permission: "normal",
  permission: USER_ROLES.NORMAL,
};

// ---------------------------------------------

// PRÁTICA GUIADA - Parte 2
// Vamos continuar nosso sistema de cadastro de usuários criando:

// 1. Enum com valores ADMIN e NORMAL e atribua ã propriedade permission de AdminAccount e NormalAccount;
// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Account;

const users: AdminUser[] | NormalUser[] = [user1, user2];

// OUTRA OPÇÃO DE SINTAXE:
// const users: Array <AdminUser | NormalUser> = [user1, user2];

console.log(users);