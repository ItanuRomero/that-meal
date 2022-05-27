const {Router} = require("express");

const CommentController = require("../controllers/CommentController")

const routes = Router();

routes.get("/comment/:recipe_id", CommentController.listAll);
routes.post("/comment", CommentController.add);

module.exports = routes;