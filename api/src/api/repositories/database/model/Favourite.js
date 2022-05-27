const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Comment extends Model{};

Comment.init({
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

module.exports = Comment;