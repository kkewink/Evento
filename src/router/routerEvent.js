const {Router} = require("express");
const EventController = require("../controller/EventoController");

const router = Router();

router.post('/', (req,res) => {
    EventController.create(req,res);
})

router.get('/', (req,res) =>{
    EventController.getAll(req,res);
});

router.get('/:id', (req,res) =>{
    EventController.getOne(req,res);
});

router.get('/:id/participante', (req,res) =>{
    EventController.getPartic(req,res);
});

router.put('/:id', (req,res) =>{
    EventController.update(req,res);
});

router.delete('/:id',(req,res) =>{
    EventController.delete(req,res);
});



module.exports = router;