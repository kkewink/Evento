const {Router} = require("express");
const EventController = require("../controller/EventoController");

const router = Router();

router.post('/')
EventController.create(req,res);

router.get('/')
EventController.getAll(req,res);

router.get('/:id')
EventController.getOne(req,res);

router.put('/:id')
EventController.update(req,res);

router.delete('/:id')
EventController.delete(req,res);

module.exports = router;