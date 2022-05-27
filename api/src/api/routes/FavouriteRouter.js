const {Router} = require("express");

const FavouriteController = require("../controllers/FavouriteController");

const routes = Router();

routes.get("/favourite/:recipe_id", FavouriteController.listAll);
routes.post("/favourite", FavouriteController.add);

module.exports = routes;