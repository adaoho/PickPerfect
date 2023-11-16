"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/movement.json");

    data.forEach((element) => {
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Movements", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movements", null, {});
  },
};
