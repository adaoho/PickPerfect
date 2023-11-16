const router = require("express").Router();
const userRouter = require("./userRouter");
const fruitRouter = require("./fruitRouter");
const fruitMovRouter = require("./fruitMovRouter");
const movementRouter = require("./movementRouter");
const purchaseRouter = require("./purchaseRouter");
const authentication = require("../middlewares/authentication");

router.use("/user", userRouter);

router.use(authentication);

router.use("/fruit", fruitRouter);
router.use("/fruitmov", fruitMovRouter);
router.use("/purchase", purchaseRouter);
router.use("/movement", movementRouter);

module.exports = router;
