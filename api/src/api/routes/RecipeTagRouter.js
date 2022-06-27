const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const RecipeTagController = require("../controllers/RecipeTagController");

const routes = Router();

routes.get("/recipetag/:recipe_id", RecipeTagController.listAll);
routes.post("/recipetag", verifyJWT, RecipeTagController.add);
routes.delete("/recipetag/:recipetag_id", verifyJWT, RecipeTagController.remove);

module.exports = routes;