const { User } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.user;

    const findUser = await User.findByPk(id);

    // console.log(findUser);

    if (!findUser) {
      throw { name: `InvalidId` };
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
