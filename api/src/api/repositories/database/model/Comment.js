const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Comment extends Model{};

Comment.init({
  text: {
    type: DataTypes.TEXT,
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
    modelName: "Comment",
    timestamps: false
});

module.exports = Comment;