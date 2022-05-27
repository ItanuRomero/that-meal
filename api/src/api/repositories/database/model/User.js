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
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
  },
  birth: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  isAdmin:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, { 
    sequelize,
    modelName: "User",
    timestamps: false
});

module.exports = User;