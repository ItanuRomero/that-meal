// class User {
//   constructor(userDados) {
//     this.id = userDados.id,
//     this.email = userDados.email,
//     this.username = userDados.username,
//     this.birth = userDados.birth,
//     this.phone = userDados.phone,
//     this.password = userDados.password,
//     this.createdAt = userDados.createdAt,
//     this.updatedAt = userDados.updatedAt,
//     this.isAdmin = userDados.isAdmin,
//     this.isActive = userDados.isActive
//   }
// }

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