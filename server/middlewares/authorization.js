const { User } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.user;

    const findUser = await User.findByPk(id);

    if (!findUser) {
      throw { name: `InvalidId` };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
