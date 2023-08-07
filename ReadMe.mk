Node:

Express:

Sequelize:
>>>ORM:

Nodemon: 

BodyParser: Converte a requisição para diversos formatos, principamente JSON.

Criar banco de dados: npx sequelize db:create (o arquivo ".sequelizerc" deve estar dentro da raiz do projeto).
Migrations: Basicamente o historico do banco de dados.
Criar migrations(tabelas): npx sequelize migration:create --name=create-pacientes
Criar todas as migrates existentes: npx sequelize db:migrate

Para forçar a ceiação de tabelas sem usar migrations:
sequelize
    //Criar tabela somente se ela não existir.
    .sync({force: false})
    .then(() => console.log("Tabela Duelista criada!"))
    .catch((error) => console.log("Erro na criação de tabela.", error));
module.exports = Duelist;

Erro 404:
Erro 500: