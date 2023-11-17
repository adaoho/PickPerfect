const fruityViceApi = require("../api/fruityViceApi");
const { Fruit } = require("../models");

class FruitStatic {
  static async fetchFruitData(req, res, next) {
    try {
      const { data } = await fruityViceApi.get("/all");

      data.map(async (element) => {
        // console.log(element.nutritions.calories, "<<< this is from element");

        return await Fruit.create({
          name: element.name,
          family: element.family,
          calories: element.nutritions.calories,
          fat: element.nutritions.fat,
          sugar: element.nutritions.sugar,
          carbohydrates: element.nutritions.carbohydrates,
          protein: element.nutritions.protein,
          price: Math.ceil(Math.random() * 25000),
          imageUrl: `https://source.unsplash.com/random/900x700/?${element.name}`,
        });
      });

      res.status(201).json({
        message: "Fetching data from FruityViceAPI Success",
      });
    } catch (error) {
      next(error);
    }
  }

  static async getFruit(req, res, next) {
    try {
      const getFruit = await Fruit.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        getFruit,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getFruitDetail(req, res, next) {
    try {
      const { id } = req.params;
      const getFruitDetail = await Fruit.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        getFruitDetail,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FruitStatic;
