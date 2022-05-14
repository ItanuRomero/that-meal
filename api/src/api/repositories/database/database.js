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

    addUser(newUser) {
      if(newUser instanceof User){
        if(this.users.length === 0){
          newUser.id = 1;
        }else{
          newUser.id = parseInt(this.users[this.users.length - 1].id) + 1;
        }

        this.users.push(newUser)
        return newUser;
      }else{
        throw Error("DB: invalid input, object invalid")
      }
    }

    addRecipe(newRecipe) {
      if(newRecipe instanceof Recipe){
        if(this.recipes.length === 0){
          newRecipe.id = 1;
        }else{
          newRecipe.id = parseInt(this.recipes[this.recipes.length - 1].id) + 1;
        }

        const user = this.users.filter(x => x.id == newRecipe.createdBy.id)[0];
        if(user === undefined){
          throw Error("Usuário não encontrado");
        }

        newRecipe.createdBy = user;

        this.recipes.push(newRecipe)
        return newRecipe;
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

        const user = this.users.filter(x => x.id == newRecipe.createdBy.id)[0];
        if(user === undefined){
          throw Error("Usuário não encontrado");
        }

        newRecipe.createdBy = user;
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