"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/fruitMov.json");

    data.forEach((element) => {
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("FruitMovements", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("FruitMovements", null, {});
  },
};
