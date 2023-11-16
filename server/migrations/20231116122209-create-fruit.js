"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Fruits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      family: {
        type: Sequelize.STRING,
      },
      calories: {
        type: Sequelize.STRING,
      },
      fat: {
        type: Sequelize.STRING,
      },
      sugar: {
        type: Sequelize.STRING,
      },
      carbohydrates: {
        type: Sequelize.STRING,
      },
      protein: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      MovementId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movements",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Fruits");
  },
};
