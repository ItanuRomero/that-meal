const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Favourite extends Model{};

Favourite.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "Favourite",
    timestamps: false
});

module.exports = Favourite;