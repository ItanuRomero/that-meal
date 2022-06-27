const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const RatingController = require("../controllers/RatingController");

const routes = Router();

routes.get("/rating/:recipe_id", RatingController.list);
routes.post("/rating", verifyJWT, RatingController.add);
routes.post("/rating", verifyJWT, RatingController.edit);

module.exports = routes;