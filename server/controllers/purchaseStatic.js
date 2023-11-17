const { Purchase } = require("../models");
const { PaymentRequest, Invoice } = require("xendit-node");

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

  static async purchaseXendit(req, res, next) {
    try {
      const invoiceService = new Invoice({
        secretKey:
          "xnd_development_3RivEnJBSJw9lQwBiMDiRk2LZZPxlxiv6ek3uukvjW5a2hY6e6VujAshOgWJMH",
      });

      const data = {
        amount: 10000,
        invoiceDuration: 172800,
        externalId: "test1234",
        description: "Test Invoice",
        currency: "IDR",
        reminderTime: 1,
      };
      const response = await invoiceService.createInvoice({
        data: data,
      });

      // console.log(response, "<<< response xendit");

      res.status(200).json(response);
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
}

module.exports = PurchaseStatic;
