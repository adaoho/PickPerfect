const FruitStatic = require("../controllers/fruitStatic");
const router = require("express").Router();

router.get("/", FruitStatic.getFruit);
router.get("/:id", FruitStatic.getFruitDetail);
router.post("/fetchfruit", FruitStatic.fetchFruitData);

module.exports = router;
