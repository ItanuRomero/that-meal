<template>
  <div>
    <main>
      <b-container>
        <div id="categoria">
          Minha categoria
        </div>
      </b-container>
      <b-button id="button-add-categorie" variant="success">Adicionar Categoria</b-button>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
import ButtonAddRecipeComponent from "../../components/recipe/button-add-recipe.vue"
import RecipeCard from "../../components/recipe/recipeCard.vue"
export default {
  name: 'RecipesPage',
  components: {
    HeaderComponent,
    NavbarComponent,
    ButtonAddRecipeComponent,
    RecipeCard
  },

  async asyncData({ $axios }) {
        try {
          const recipes = await $axios.$get('recipe');
          return { recipes };
        } catch (ex) {
            console.log(ex);
            return { recipes: true}
        }
    }
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;

  }
#button-add-categorie {
  margin: 1rem;
  height: 3rem;
  width: 20rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
  #background {
    margin-left: 5rem;
    height: 70vh;
    width: 95vw;
    background: url("~assets/home-bg.png") no-repeat;
    background-size: contain;
    background-position: center;
  }

  .container {
    display: flex;
  }

  .categoria{
    border: 1px solid;
    background-color: #ffc452;
  }
</style>
