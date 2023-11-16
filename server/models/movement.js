"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movement.hasMany(models.FruitMovement);
      Movement.hasMany(models.Fruit, { foreignKey: "MovementId" });
    }
  }
  Movement.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movement",
    }
  );
  return Movement;
};
