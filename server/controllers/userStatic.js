const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");

class UserStatic {
  static async userRegister(req, res, next) {
    try {
      const { fullname, email, password, imageUrl, age, address, phoneNumber } =
        req.body;

      if (!email) throw { name: `EmailEmpty` };
      if (!password) throw { name: `PasswordEmpty` };

      await User.create({
        fullname,
        email,
        password,
        imageUrl: "https://source.unsplash.com/random/500x500/?person",
        age,
        address,
        phoneNumber,
      });

      const newUser = await User.findOne({
        attributes: {
          exclude: ["password", "phoneNumber", "createdAt", "updatedAt"],
        },
        where: { email },
      });

      // console.log(newUser);

      res.status(201).json({
        newUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: `EmailEmpty` };
      if (!password) throw { name: `PasswordEmpty` };

      const findUser = await User.findOne({ where: { email } });

      if (!findUser) throw { name: "InvalidLogin" };

      const isValidPassword = comparePassword(password, findUser.password);

      if (!isValidPassword) throw { name: "InvalidLogin" };

      const access_token = createToken({
        id: findUser.id,
        email: findUser.email,
        fullName: findUser.fullname,
      });

      res.status(200).json({
        access_token,
        email: findUser.email,
        fullname: findUser.fullname,
      });
    } catch (error) {
      next(error);
    }
  }

  static async userGoogleLogin(req, res, next) {
    try {
      const code = req.body.token;

      const client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_SECRET_ID,
        "postmessage"
      );

      // console.log(client, "<<< from client");
      const exchangedToken = await client.getToken(code);

      const ticket = await client.verifyIdToken({
        idToken: exchangedToken.tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      console.log(payload, "<<<< Google OAuth Payload");

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          fullname: payload.given_name + " " + payload.family_name,
          email: payload.email,
          imageUrl: payload.picture,
          password: "google_password",
        },
        hooks: false,
      });

      // console.log(user, "<<<< Google OAuth User");
      const access_token = createToken({
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      });
      res
        .status(200)
        .json({ access_token, fullname: user.fullname, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async userGithubLogin(req, res, next) {
    try {
      console.log(req.body);
      const { fullname, email, password, imageUrl } = req.body;

      const [user, created] = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          fullname,
          password,
          imageUrl,
        },
        hooks: false,
      });

      const access_token = createToken({
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      });

      res
        .status(200)
        .json({ access_token, fullname: user.fullname, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async userFacebookLogin(req, res, next) {
    try {
      console.log(req.body);
      const { fullname, email, password, imageUrl } = req.body;

      const [user, created] = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          fullname,
          password,
          imageUrl,
        },
        hooks: false,
      });

      const access_token = createToken({
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      });

      // console.log(access_token);

      res
        .status(200)
        .json({ access_token, fullname: user.fullname, email: user.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserStatic;
