const { Movement } = require("../models");

class MovementStatic {
  static async getMovement(req, res, next) {
    try {
      const getMovement = await Movement.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        getMovement,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovementStatic;
