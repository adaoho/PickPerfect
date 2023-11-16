"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FruitMovement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FruitMovement.belongsTo(models.User, { foreignKey: "UserId" });
      FruitMovement.belongsTo(models.Movement, { foreignKey: "MovementId" });
    }
  }
  FruitMovement.init(
    {
      MovementId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FruitMovement",
    }
  );
  return FruitMovement;
};
