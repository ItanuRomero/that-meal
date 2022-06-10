const {Router} = require("express");

const TagController = require("../controllers/TagController");

const routes = Router();

routes.get("/tag/:recipe_id", TagController.listAll);
routes.post("/tag", TagController.add);

module.exports = routes;