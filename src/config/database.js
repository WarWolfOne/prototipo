const Sequelize = require('sequelize')
// 7 - Configuração do banco de dados.
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1995',
    database: 'psique',
    difine: {
        timestamp: true,
        //atualizar data e hora de criação e alteração.
        underscored: true,
        //Iniciar em letra maiuscula.
    }
})

module.exports = sequelize;