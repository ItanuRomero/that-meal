const {Router} = require("express");
const {verifyJWT} = require("../middleware/AuthenticationMiddleware");

const RatingController = require("../controllers/RatingController");

const routes = Router();

routes.get("/rating/:recipe_id", RatingController.listAll);
routes.post("/rating", verifyJWT, RatingController.add);
routes.put("/rating/:recipe_id", verifyJWT, RatingController.update);

module.exports = routes;