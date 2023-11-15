const router = require("express").Router();
const userRouter = require("./userRouter");
const authentication = require("../middlewares/authentication");

router.use("/user", userRouter);

router.use(authentication);

// router.use("/fruit", cuisineRouter);
// router.use("/category", categoryRouter);

module.exports = router;
