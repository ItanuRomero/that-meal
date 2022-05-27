const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Comment extends Model{};

Comment.init({
  text: {
    type: DataTypes.TEXT,
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  recipe_id: {
    type: DataTypes.INTEGER
  },
}, { 
    sequelize,
    modelName: "Comment",
    timestamps: false
});

module.exports = Comment;