const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Paciente = sequelize.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // Correção do nome da propriedade
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    nomeSocial: {
        type: Sequelize.STRING(128),
        allowNull: true,
    },
    eMail: {
        type: Sequelize.STRING(128),
        allowNull: false,
    },
    telefone: {
        type: Sequelize.STRING(11),
        allowNull: false,
    },
    pais: {
        type: Sequelize.STRING(3),
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
    }
});

sequelize
    .sync({ force: false })
    .then(() => console.log("Tabela Paciente criada."))
    .catch((error) => console.log("Erro na criação de tabela Paciente.", error));

module.exports = Paciente;