const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./src/api/routes/UserRouter");
const RecipeRoutes = require("./src/api/routes/RecipeRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(UserRoutes);
app.use(RecipeRoutes);

module.exports = app;