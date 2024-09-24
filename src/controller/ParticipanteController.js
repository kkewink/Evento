const Participante = require("../models/Participante");
const { create, getAll, getOne } = require("./EventoController");

const ParticipanteController = {
    create: async(req, res) =>{
        try {

            console.log("ta no create do controller")

            const{nome,email,evento_id} = req.body;
            const existePart = await Participante.findOne({where : {email : email}})

            if(existePart){
                return res.status(5400).json(
                    
                )
            }
            console.log(nome,email,evento_id)

            const ParticipanteCriado = await Participante.create({
                nome : nome,
                email : email,
                evento_id : evento_id
            });

            return res.status(200).json({
                msg: 'Parabens por sua incrição ela foi um sucesso!',
                ParticipanteCriado
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


    getEvent: async(req,res)=>{
        try {
            const {evento_id} = req.params
            const participantes  = await Participante.findAll({where:{evento_id:evento_id }});
            
            return res.status(200).json({
                participantes
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg:'Chame o doido'});
        }
       
    },

    getOne: async(req,res) =>{
        try {
            const {id} = req.params;


            const participanteEncontrado = await Participante.findByPk(id);


            if(!participanteEncontrado) {
                return res.status(404).json({
                    msg:'Particpante não encontrado!',
                });
            }

            return res.status(200).json({
                msg:'Particpante encontrado!',
                participanteEncontrado
            });


        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:'chame o doido'});
        }
    },

    update: async(req,res) =>{
        try {
            const {id} = req.params;
            const{nome,email,evento_id} = req.body;
            

            const participante = await Participante.findByPk(id);

            if(!participante){
                return res.status(404).json({
                    msg: "Participante não encontrado"
                });
                
            }

            await participante.update({nome,email,evento_id})
            return res.status(200).json({
                msg:"Participante editado"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({msg:"Calma ai paizão"});
        }
    },

    delete: async(req,res) =>{
        try {
            const {id} = req.params;

            const participanteFinded = await Participante.findByPk(id);

            if(!participanteFinded){
                return res.status(404).json({
                    msg:"SEM PARTICIPANTE",
                })
            }

            await participanteFinded.destroy();

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