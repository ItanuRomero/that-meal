const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./src/api/routes/UserRouter");
const RecipeRoutes = require("./src/api/routes/RecipeRouter");
const CommentRoutes = require("./src/api/routes/CommentRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(UserRoutes);
app.use(RecipeRoutes);
app.use(CommentRoutes);

module.exports = app;