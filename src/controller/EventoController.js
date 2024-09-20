const Event = require("../models/Event");

const EventController = {
    create: async(req, res) =>{
        try {
            const {nome, data, localizacao} = req.body;
            const eventCriado = await Event.create({nome, data, localizacao});

            return res.status(200).json({
                msg: 'Evento criado com sucesso!',
                event: eventCriado
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
    },
    
    getOne: async (req,res) => {
        try {
            const {id} = req.params;
            const eventoEncontrado = await Event.findByPk(id);
            if(eventoEncontrado == null){
                return res.status(400).json({
                    msg:'Evento não encontrado!',
                });
            }
            return res.status(400).json({
                msg:'Evento encontrado com sucesso!',
                evento: eventoEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg:'Chame o doido'});
        }
    },

    update: async(req,res) =>{
        try {
            const{id} = req.params;
            const {nome,data,localizacao} = req.body;

            console.log("Atualizando o Evento");
            console.log({id});
            console.log({nome,data,localizacao});

            const eventoUpdate = await Evento.findByPk(id);
            if(eventoUpdate == null){
                return res.status(200).json({msg: 'Evento atualizado com sucesso!'});
            }

            const update = await eventoUpdate.update({
                nome,data,localizacao
            });
            if(update){
                return res.status(200).json({
                    msg:"Evento atualizaco com sucesso!"
                });
            }
            return res.status(500).json({
                msg:"Erro ao atualizar"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Calma Calabreso aquele meme lá KKKKKKKKK"});
        }
    },

    delete: async(req,res) =>{
        try {
            const {id} = req.params;

            const eventoFinded = await Evento.findByPk(id);

            if(!eventoFinded){
                return res.status (400).json({
                    msg:"SEM EVENTO",
                })
            }
            await eventoFinded.destroy();
            return res.status(400).json({
                msg: "deletou pai!",
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "Bora bill Bora suporte do bill aquele meme là KKKKK"});
        }
    },
};

module.exports = EventController;