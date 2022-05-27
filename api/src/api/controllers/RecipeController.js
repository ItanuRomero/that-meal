const Recipe = require("../repositories/database/model/Recipe");

module.exports = {
  async listAll(request, response) {
    try {
      const recipes = await Recipe.findAll();

      response.status(200).json(recipes);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Recipe.create(request.body);

      response.status(200).json("product inserted!!");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async get(request, response) {
    try {
      const id = request.params.recipe_id;
      const recipe = await Recipe.findOne({ where: { id } });

      if (!recipe) {
        return response.status(400).json("Product not found");
      }

      response.status(200).json(recipe);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, image, body, user_id } = request.body;
      const id = request.params.recipe_id;
      const recipe = await Recipe.findOne({ where: { id } });

      if (!recipe) {
        return response.status(400).json("Product not found");
      }

      recipe.name = name;
      recipe.image = image;
      recipe.body = body;
      recipe.user_id = user_id;

      await recipe.save();
      response.status(200).json("product uptated!!");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async remove(request,response){
    try {
      const id = request.params.recipe_id;
      const recipe = await Recipe.destroy({ where: { id } });

      if (!recipe) {
        return response.status(400).json("Product not found");
      }

      response.status(200).json("product removed!!");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
