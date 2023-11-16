const FruitMovementStatic = require("../controllers/fruitMovStatic");
const { authorization } = require("../middlewares/authorization");
const router = require("express").Router();

router.get("/", FruitMovementStatic.getFruitMovement);
router.post(
  "/:MovementId",
  authorization,
  FruitMovementStatic.postFruitMovement
);
router.delete(
  "/:MovementId",
  authorization,
  FruitMovementStatic.leaveFruitMovement
);

module.exports = router;
