const {Router} = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
// const { route } = require("./routerEvent");

const router = Router();

router.post('/', (req,res) =>{
    ParticipanteController.create(req,res);
})

router.get('/' , (req,res) =>{
    ParticipanteController.getAll(req,res);
});

router.get('/por-evento/:evento_id', (req,res) =>{
    ParticipanteController.getEvent(req,res);
});

router.get('/:id', (req,res) =>{
    ParticipanteController.getOne(req,res);
});

router.put('/:id', (req,res) =>{
    ParticipanteController.update(req,res);
});

router.delete('/:id', (req,res)=>{
    ParticipanteController.delete(req,res);
});

module.exports = router;