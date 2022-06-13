const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const TagController = require("../controllers/TagController");

const routes = Router();

routes.get("/tag/:recipe_id", TagController.listAll);
routes.post("/tag", verifyJWT, TagController.add);

module.exports = routes;