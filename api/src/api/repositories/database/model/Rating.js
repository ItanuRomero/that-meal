const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Rating extends Model{};

Rating.init({
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
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
    modelName: "Rating",
    timestamps: false
});

module.exports = Rating;