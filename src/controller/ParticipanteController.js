const Participante = require("../models/Participante");
const { create, getAll, getOne } = require("./EventoController");

const ParticipanteController = {
    create: async(req, res) =>{
        try {
            const{nome,email,eventoID} = req.body;
            const ParticipanteCriado  =await Participante.create({nome,email,eventoID});

            return res.status(200).json({
                msg: 'Parabens por sua incrição ela foi um sucesso!',
                participante: ParticipanteCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:" Deu pra conseguir seu imgresso não"});
        }
    },

    getAll: async(req,res) => {
        try {
            const participante = await Participante.findAll();
            return res.status(200).json({
                msg: 'Todos os participantes Encontrados!',
                participante
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:"Esse Erro todo amostradinho"});
        }
    },

    getOne: async(req,res) =>{
        try {
            const {id} = req.params;
            const participanteEncontrado = await participante.findByPk(id);
            if(participanteEncontrado == null) {
                return res.status(404).json({
                    msg:'Particpante não encontrado!',
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:'chame o doido'});
        }
    },

    update: async(req,res) =>{
        try {
            const{id} = req.params;
            const {nome, email,eventoID} = req.body;

            const participante = await Participante.findByPk(id);

            if(!participante){
                return res.status(404).json({
                    msg: "Participante não encontrado"
                });
                
            }

            await participante.update({nome,email,eventoID})
            return res.status(200).json({
                msg:"Participante encontrado"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:"Calma ai paizão"});
        }
    },

    delete: async(req,res) =>{
        try {
            const {id} = req.params;

            const participanteFinded = await participante.findByPk(id);

            if(!participanteFinded){
                return res.status(404).json({
                    msg:"SEM PARTICIPANTE",
                })
            }
            await eventoFinded.destroy();
            return res.status(400).json({
                msg: "deletou pai!",
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Bora bill Bora suporte do bill aquele meme là KKKKK"});
        }
    },
};

module.exports = ParticipanteController;