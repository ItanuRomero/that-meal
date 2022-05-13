const RecipeRepository = require("../repositories/RecipeRepository");

module.exports = {
    getAllRecipes: async function (){
      return await RecipeRepository.all();
    },

    getRecipeById: async function (recipeId){
      try{
        const recipe = await RecipeRepository.find(recipeId);
        return {codeStatus: 200, status: recipe};
      }catch{
        return {codeStatus: 404, status: "Error: Receita não encontrada"};
      }
    },

    addNewRecipe: async function (recipe){
      try{
        const newRecipe = await RecipeRepository.create(recipe);
        return {codeStatus: 201, status: newRecipe};
      }
      catch(e){
        return {codeStatus: 400, status: "Error: " + e.message};
      } 
    },

    updateRecipe: async function (recipe, recipeId){
      try{
        await RecipeRepository.update(recipe, recipeId);
        return {codeStatus: 201, status: "Receita atualizada com sucesso"};
      }
      catch(e){
        if(e.message.startsWith("DB:")){
          return {codeStatus: 400, status: "Error: " + e.message};
        }else{
          return {codeStatus: 404, status: "Error: " + e.message};
        }      
      } 
    },
    
    removeRecipeById: async function(recipeId) {
      try{
        await RecipeRepository.remove(recipeId);
        return {codeStatus: 202, status: "Receita desativada com sucesso"};
      } 
      catch{
        return {codeStatus: 404, status: "Error: Receita não encontrada"};
      }
    }
}