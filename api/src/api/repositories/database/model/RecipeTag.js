const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class RecipeTag extends Model{};

RecipeTag.init({
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "RecipeTag",
    timestamps: false
});

module.exports = RecipeTag;