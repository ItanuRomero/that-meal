const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: true //Ativa a impressão das SQLs formadas
});

module.exports = sequelize;