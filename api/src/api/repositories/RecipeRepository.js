// const database = require("./database/database");
// const Recipe = require("./database/model/Recipe");
// const RecipeSeed = require("./database/seed/RecipeSeed");

// class RecipeRepository{
//     constructor(){
//       RecipeSeed(database);
//       this.database = database;
//     }

//     async create(recipe){
//       return database.addRecipe(new Recipe(recipe));
//     }

//     async update(recipe, recipeId){
//       const newRecipe = new Recipe(recipe);
//       database.updateRecipe(newRecipe, recipeId);
//       return newRecipe;
//     }

//     async find(recipeId){
//       return database.findByRecipeId(recipeId);
//     }

//     async all(){
//       return database.getAllRecipes();
//     }

//     async remove(recipeId){
//       return database.removeByRecipeId(recipeId);
//     }
// }

// module.exports = new RecipeRepository();