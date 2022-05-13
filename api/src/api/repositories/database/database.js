const User = require("./model/User");
const Recipe = require("./model/Recipe");

class Banco {
    constructor() {
      this.users = [];
      this.recipes = [];
    }

    getAllUsers() {
      return this.users;
    }

    getAllRecipes() {
      return this.recipes;
    }

    addUser(novoUser) {
      if(novoUser instanceof User){
        const user = this.users.filter(x => x.id == novoUser.id)[0];

        if(user){
          throw Error("Usuário já existe");
        }

        this.users.push(novoUser)
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    addRecipe(novoRecipe) {
      if(novoRecipe instanceof Recipe){
        novoRecipe.id = this.recipes.length + 1;
        this.recipes.push(novoRecipe)

        return novoRecipe;
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    findByUserId(userId) {
      const user = this.users.filter(x => x.id == userId)[0];

      if(user === undefined){
        throw Error();
      }

      return user;
    }

    findByRecipeId(recipeId) {
      const recipe = this.recipes.filter(x => x.id == recipeId)[0];

      if(recipe === undefined){
        throw Error();
      }

      return recipe;
    }

    updateUser(newUser, userId) {
      if(newUser instanceof User){
        const userIndex = this.users.findIndex(x => x.id == userId);

        if(userIndex === -1){
          throw Error("Usuário não encontrado");
        }

        newUser.id = userId;
        this.users[userIndex] = newUser;
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    updateRecipe(newRecipe, recipeId) {
      if(newRecipe instanceof Recipe){
        const recipeIndex = this.recipes.findIndex(x => x.id == recipeId);

        if(recipeIndex === -1){
          throw Error("Receita não encontrada");
        }

        newRecipe.id = recipeId;
        this.recipes[recipeIndex] = newRecipe;
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    removeByUserId(userId) {
      const user = this.users.findIndex(x => x.id == userId);

      if(user === -1){
        throw Error();
      }

      return this.users.splice(user, 1);
    }

    removeByRecipeId(recipeId) {
      const recipe = this.recipes.findIndex(x => x.id == recipeId);

      if(recipe === -1){
        throw Error();
      }

      return this.recipes.splice(recipe, 1);
    }
}

let banco = new Banco();

module.exports = banco;