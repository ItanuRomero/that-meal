const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const FavouriteController = require("../controllers/FavouriteController");

const routes = Router();

routes.get("/favourite/:recipe_id", FavouriteController.listAll);
routes.post("/favourite", verifyJWT, FavouriteController.add);

module.exports = routes;