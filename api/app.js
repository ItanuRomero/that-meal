const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./src/api/routes/UserRouter");
const RecipeRoutes = require("./src/api/routes/RecipeRouter");
const CommentRoutes = require("./src/api/routes/CommentRouter");
const FavouriteRoutes = require("./src/api/routes/FavouriteRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(UserRoutes);
app.use(RecipeRoutes);
app.use(CommentRoutes);
app.use(FavouriteRoutes);

module.exports = app;