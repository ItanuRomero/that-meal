const {Router} = require("express");

const RecipeController = require("../controllers/RecipeController");

const routes = Router();

routes.get("/recipe", RecipeController.listAll);
routes.get("/recipe/:recipe_id", RecipeController.get);
routes.put("/recipe/:recipe_id", RecipeController.update);
routes.post("/recipe", RecipeController.add);
routes.delete("/recipe/:recipe_id", RecipeController.remove);

module.exports = routes;