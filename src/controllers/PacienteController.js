// 10 - Importar Model.
const Paciente = require('../models/Paciente')

//Função para salvar novo usuário.
exports.save = async (req, res) => {
    console.log('Dados recebidos:', req.body);
    const {
        id,
        nome,
        nomeSocial,
        eMail,
        telefone,
        pais,
        cpf
    } = req.body;

    Paciente.create({
        id,
        nome,
        nomeSocial,
        eMail,
        telefone,
        pais,
        cpf
    }).then((post) => res.send(post));
};

//Função para encontrar paciente específico por id.
exports.getById = async (req, res) => {
    const { id } = req.params;

    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            res.status(404).send({
                message: 'Paceiente não encontrado!'
            });
        }
        res.send(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error!'
        })
    }
};

//Deletar Paciente específico por ID.
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            return res.status(404).send({
                message: 'Paciente não encontrado!'
            });
        }
        await paciente.destroy();
        res.send({
            message: 'Paciente deletado com sucesso!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

//Atualizar usuário específico por ID.
exports.update = async (req, res) => {
    const { id } = req.params;
    const {
        nome,
        nomeSocial,
        eMail,
        telefone,
        pais,
        cpf
    } = req.body;

    try {
        let paciente = await Paciente.findByPk(id);
        if (!paciente) {
            return res.status(404).send({
                message: 'Paciente não encontrado!'
            });
        }

        paciente.nome = nome;
        paciente.nomeSocial = nomeSocial;
        paciente.eMail = eMail;
        paciente.telefone = telefone;
        paciente.pais = pais;
        paciente.cpf = cpf;

        await paciente.save();

        res.send(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};