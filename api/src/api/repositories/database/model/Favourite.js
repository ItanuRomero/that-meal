const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Comment extends Model{};

Comment.init({
  user_id: {
    type: DataTypes.INTEGER
  },
  recipe_id: {
    type: DataTypes.INTEGER
  },
}, { 
    sequelize,
    modelName: "Favourite",
    timestamps: false
});

module.exports = Comment;