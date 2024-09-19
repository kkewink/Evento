const Event = require("../models/Event");

const EventController = {
    create: async(req, res) =>{
        try {
            const {nome, data, localizacao} = req.body;
            const eventCriado = await.create({nome, data, localizacao});

            return res.status(200).json({
                msg: 'Evento criado com sucesso!',
            })
        } catch (error) {
            
        }
    },

    getAll: async(req,res) =>{
        try {
            const eventos = await Event.findAll();
            return res.status(200).json({
                msg: 'Eventos encontrados!',
                eventos
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:" Esse Erro todo amostradinho aquele meme la"});
        }
    }
};

module.exports = EventController;