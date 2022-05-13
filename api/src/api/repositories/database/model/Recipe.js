const User = require("./User");

class Recipe {
  constructor(recipeDados) {
    this.id = recipeDados.id,
    this.name = recipeDados.name,
    this.image = recipeDados.image,
    this.body = recipeDados.body,
    this.createdBy = [new User(recipeDados.createdBy)]
  }
}

module.exports = Recipe;