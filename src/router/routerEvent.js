const {Router} = require("express");
const EventController = require("../controller/EventoController");
const {validateEventId, validateEvent} = require("../middlewares/ValidateEvent");

const router = Router();

router.post('/', validateEvent, (req,res) => {
    EventController.create(req,res);
})

router.get('/', (req,res) =>{
    EventController.getAll(req,res);
});

router.get('/:id', validateEventId, (req,res) =>{
    EventController.getOne(req,res);
});

router.get('/:id/participante', (req,res) =>{
    EventController.getPartic(req,res);
});

router.put('/:id', validateEvent,validateEventId, (req,res) =>{
    EventController.update(req,res);
});

router.delete('/:id', validateEventId, (req,res) =>{
    EventController.delete(req,res);
});



module.exports = router;