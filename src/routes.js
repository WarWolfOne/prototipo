// 11 - Consumir as funções dos Controllers.
// 12 - Importar Express e o Router do Express.
const express= require('express')
const router = express.Router()

// Importando Controllers.
const PacienteController = require('./controllers/PacienteController')

// Rota principal.
router
    .route('/pacientes')
    .post((req, res) => PacienteController.save(req, res))

// Rota para manipulação de dados por ID de Paciente
router
    .route('/pacientes/:id')
    .get((req, res) => PacienteController.getById(req, res))
    .put((req, res) => PacienteController.update(req, res))
    .delete((req, res) => PacienteController.delete(req, res))

// 13 - Exportar modulo de rotas.
module.exports = router;