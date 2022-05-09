const {Router} = require("express");

const UserController = require("../controllers/UserController")

const routes = Router();

routes.get("/user", UserController.listAll);
routes.get("/user/:user_id", UserController.get);
routes.post("/user", UserController.add);
routes.delete("/user/:user_id", UserController.remove);

module.exports = routes;