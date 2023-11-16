const { FruitMovement, Fruit, Movement, User } = require("../models");

class FruitMovementStatic {
  static async getFruitMovement(req, res, next) {
    try {
      const UserId = req.user.id;

      const findUserId = await User.findByPk(UserId);

      if (!findUserId) throw { name: "InvalidId" };

      const getFruitMovData = await FruitMovement.findAll({
        where: { UserId },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Movement,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            include: [
              {
                model: Fruit,
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
                },
              },
            ],
          },
        ],
      });

      if (getFruitMovData.length === 0) throw { name: "DataEmpty" };

      res.status(200).json({
        getFruitMovData,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async postFruitMovement(req, res, next) {
    try {
      const { MovementId } = req.params;
      const UserId = req.user.id;

      const findMovementId = await Movement.findOne({
        where: { id: MovementId },
      });

      if (!findMovementId) throw { name: "invalidId" };

      const setMovementId = await FruitMovement.findOne({
        where: { UserId, MovementId },
      });

      if (setMovementId) throw { name: "DataAlreadyInput" };

      await FruitMovement.create({
        UserId,
        MovementId,
      });

      res.status(200).json({
        message: `Add Movement ${findMovementId.name} to User Success`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async leaveFruitMovement(req, res, next) {
    try {
      const { MovementId } = req.params;
      const UserId = req.user.id;

      const findMovementId = await Movement.findOne({
        where: { id: MovementId },
      });

      if (!findMovementId) throw { name: "invalidId" };

      const setMovementId = await FruitMovement.findOne({
        where: { UserId, MovementId },
      });

      if (!setMovementId) throw { name: "DataAlreadyDelete" };

      await FruitMovement.destroy({
        where: {
          UserId,
          MovementId,
        },
      });

      res.status(200).json({
        message: `Movement ${findMovementId.name} success to delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FruitMovementStatic;
