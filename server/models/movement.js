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
      Movement.belongsTo(models.User, { foreignKey: "UserId" });
      Movement.hasMany(models.Fruit);
    }
  }
  Movement.init(
    {
      name: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movement",
    }
  );
  return Movement;
};
