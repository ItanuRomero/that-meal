const Recipe = require("../repositories/database/model/Recipe");

module.exports = {
  async listAll(request, response) {
    try {
      const recipes = await Recipe.findAll();
      response.status(200).json(recipes);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Recipe.create(request.body);
      response.status(200).json("product inserted!!");
    } catch (error) {
      console.log(error);
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
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, image, body, createdBy } = request.body;
      const id = request.params.recipe_id;
      const recipe = await Recipe.findOne({ where: { id } });

      if (!recipe) {
        return response.status(400).json("Product not found");
      }
      recipe.name = name;
      recipe.image = image,
      recipe.body = body,
      recipe.createdBy = createdBy,

      await recipe.save();
      response.status(200).json("product uptated!!");
    } catch (error) {
      console.log(error);
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
      console.log(error);
      response.status(400).send(error);
    }
  }
};
