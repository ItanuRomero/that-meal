const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoutes = require("./src/api/routes/UserRouter");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(UserRoutes);

module.exports = app;