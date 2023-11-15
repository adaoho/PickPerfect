"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Checkout.belongsTo(models.User);
      Checkout.belongsTo(models.Fruit);
    }
  }
  Checkout.init(
    {
      amount: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
      UserId: DataTypes.INTEGER,
      FruitId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Checkout",
    }
  );
  return Checkout;
};
