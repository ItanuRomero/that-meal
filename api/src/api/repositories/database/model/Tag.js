const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Tag extends Model{};

Tag.init({
  tag: {
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
    modelName: "Tag",
    timestamps: false
});

module.exports = Tag;