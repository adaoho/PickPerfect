const MovementStatic = require("../controllers/movementStatic");
const router = require("express").Router();

router.get("/", MovementStatic.getMovement);

module.exports = router;
