"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/users.json");
    const { hashPassword } = require("../helpers/bcrypt");

    data.forEach((element) => {
      element.password = hashPassword(element.password);
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
