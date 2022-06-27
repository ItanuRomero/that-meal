const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RecipeRoutes = require("./src/api/routes/RecipeRouter");
const CommentRoutes = require("./src/api/routes/CommentRouter");
const FavouriteRoutes = require("./src/api/routes/FavouriteRouter");
const TagRoutes = require("./src/api/routes/TagRouter");
const RatingRoutes = require("./src/api/routes/RatingRouter");
const RecipeTagRoutes = require("./src/api/routes/RecipeTagRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(RecipeRoutes);
app.use(CommentRoutes);
app.use(FavouriteRoutes);
app.use(TagRoutes);
app.use(RatingRoutes);
app.use(RecipeTagRoutes);

module.exports = app;