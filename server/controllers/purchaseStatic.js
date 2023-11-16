const { Purchase } = require("../models");

class PurchaseStatic {
  // Perlu Authorization
  static async postPurchase(req, res, next) {
    try {
      const { id } = req.params;
      const { name, quantity, price, total } = req.body;

      const createPurchase = await Purchase.create({
        name,
        quantity,
        price,
        total,
        UserId: id,
        status: false,
      });

      res.status(201).json({
        message: `Purchase has been made`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPurchase(req, res, next) {
    try {
      const { id } = req.params;

      const findPurchase = await Purchase.findAll({
        where: {
          UserId: id,
          status: false,
        },
      });

      res.status(201).json({
        findPurchase,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletePurchase(req, res, next) {
    try {
      const { id } = req.params;

      const deletePurchase = await Purchase.destroy({
        where: {
          UserId: id,
        },
      });

      res.status(201).json({
        message: "Purchase has been deleted",
      });
    } catch (error) {
      next(error);
    }
  }

  static async statusPurchase(req, res, next) {
    try {
      const { id } = req.params;

      const statusPurchase = await Purchase.update(
        { status: true },
        { where: { UserId: id } }
      );

      res.status(201).json({
        message: "Purchase has been update",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PurchaseStatic;
