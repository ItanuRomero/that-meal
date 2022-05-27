const {Router} = require("express");

const CommentController = require("../controllers/CommentController")

const routes = Router();

routes.get("/comment", CommentController.listAll);
routes.get("/comment/:comment_id", CommentController.get);
routes.put("/comment/:comment_id", CommentController.update);
routes.post("/comment", CommentController.add);
routes.delete("/comment/:comment_id", CommentController.remove);

module.exports = routes;