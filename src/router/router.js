const {Router} = require("express");
const RouterE = require("./routerEvent");
const RouterP = require("./routerPartic");

const router = Router();
router.use('/event', RouterE);

router.use('/participante', RouterP);


module.exports = router;