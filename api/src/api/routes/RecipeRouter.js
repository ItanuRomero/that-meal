const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const RecipeController = require("../controllers/RecipeController");

const routes = Router();

routes.get("/recipe", RecipeController.listAll);
routes.get("/recipe/:recipe_id", RecipeController.get);
routes.put("/recipe/:recipe_id", verifyJWT, RecipeController.update);
routes.post("/recipe", verifyJWT, RecipeController.add);
routes.delete("/recipe/:recipe_id", verifyJWT, RecipeController.remove);

module.exports = routes;