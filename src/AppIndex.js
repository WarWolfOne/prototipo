const express = require('express') // 1 - Importar 
const app = express() // 2 Instanciar o Express.
const port = 3001 // 3 - Definir porta de escuta da aplicação.
const bodyParse = require("body-parser")
// 14 - Importar modulo de rotas.
const router = require('./routes')
// 6 - Transforma os objetos da requisição em objetos JSON.
app.use(bodyParse.json());
// 15 - Adquirindo rotas.
app.use('/', router)

// 5 - Definir rota padão(raiz).
app.get('/', (req, res) => {
    res.send('Servidor ON!')
})

// 4 - Escutar porta Raiz.
app.listen(port, () => {
    console.log(`Servidor rodando em http:localhost:${port}`)
})