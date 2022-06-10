const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const UserController = require("../controllers/UserController");

const routes = Router();

routes.get("/user", UserController.listAll);
routes.get("/user/:user_id", UserController.get);
routes.put("/user/:user_id", verifyJWT, UserController.update);
routes.post("/user", verifyJWT, UserController.add);
routes.delete("/user/:user_id", verifyJWT, UserController.remove);

module.exports = routes;