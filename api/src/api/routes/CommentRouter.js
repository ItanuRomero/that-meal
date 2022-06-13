const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const CommentController = require("../controllers/CommentController");

const routes = Router();

routes.get("/comment/:recipe_id", CommentController.listAll);
routes.post("/comment", verifyJWT, CommentController.add);

module.exports = routes;