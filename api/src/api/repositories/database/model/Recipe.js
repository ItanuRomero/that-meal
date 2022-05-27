const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Recipe extends Model{};

Recipe.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.TEXT,
  },
  createdBy: {
    type: DataTypes.INTEGER
  },
}, { 
    sequelize,
    modelName: "Recipe",
    timestamps: false
});

module.exports = Recipe;