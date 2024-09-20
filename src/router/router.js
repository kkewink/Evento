const {Router} = require("express");
const RouterE = require("./routerEvent");


const router = Router();
router.use('/event', RouterE);


module.exports = router;