const RecipeService = require("../services/RecipeService");

module.exports = {
    listAll: function (req, res) {
      RecipeService.getAllRecipes().then(recipes => {
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(recipes));
      })
    },

    add: function (req, res) {
      RecipeService.addNewRecipe(req.body).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    },

    get: function (req, res) {
      const recipeId = req.params.recipe_id;
      RecipeService.getRecipeById(recipeId).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));                    
      });
    },

    update: function (req, res) {
      RecipeService.updateRecipe(req.body, req.params.recipe_id).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    },

    remove: function (req, res) {
      RecipeService.removeRecipeById(req.params.recipe_id).then((status) => {
        res.statusCode = status.codeStatus;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status.status));
      });
    }
}
