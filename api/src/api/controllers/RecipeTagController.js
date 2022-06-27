const RecipeTag = require("../repositories/database/model/RecipeTag");

module.exports = {
  async listAll(request, response) {
    try {
      const id = request.params.recipe_id;
      const recipeTags = await RecipeTag.findAll({ where: { recipe_id: id } });

      response.status(200).json(recipeTags);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await RecipeTag.create(request.body);
      
      response.status(202).json("Tag relacionada com receita criada");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async remove(request,response){
    try {
      const id = request.params.recipetag_id;
      const recipeTag = await RecipeTag.destroy({ where: { id } });

      if (!recipeTag) {
        return response.status(404).json("Relação entre receita e tag não encontrada");
      }

      response.status(202).json("Relação entre receita e tag deletada");
    } catch (error) {
      response.status(400).send(error);
    }
  }
};
