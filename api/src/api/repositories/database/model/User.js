const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class User extends Model{};

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  birth: {
    type: DataTypes.DATE
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  isAdmin:{
    type: DataTypes.BOOLEAN
  },
  isActive:{
    type: DataTypes.BOOLEAN
  }
}, { 
    sequelize,
    modelName: "User",
    timestamps: false
});

module.exports = User;