const PurchaseStatic = require("../controllers/purchaseStatic");
const { authorization } = require("../middlewares/authorization");
const router = require("express").Router();

router.get("/", authorization, PurchaseStatic.getPurchase);
router.post("/:id", authorization, PurchaseStatic.postPurchase);
router.delete("/:id", authorization, PurchaseStatic.deletePurchase);
router.patch("/:id", authorization, PurchaseStatic.statusPurchase);

module.exports = router;
