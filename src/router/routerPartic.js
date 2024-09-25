const {Router} = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
const { validateParticId, validatePartic} = require("../middlewares/ValidateParticipante");
// const { route } = require("./routerEvent");

const router = Router();

router.post('/', validatePartic, (req,res) =>{
    ParticipanteController.create(req,res);
})

router.get('/',  (req,res) =>{
    ParticipanteController.getAll(req,res);
});

router.get('/por-evento/:evento_id', (req,res) =>{
    ParticipanteController.getEvent(req,res);
});

router.get('/:id', validateParticId, (req,res) =>{
    ParticipanteController.getOne(req,res);
});

router.put('/:id', validatePartic, validateParticId, (req,res) =>{
    ParticipanteController.update(req,res);
});

router.delete('/:id', validateParticId, (req,res)=>{
    ParticipanteController.delete(req,res);
});

module.exports = router;