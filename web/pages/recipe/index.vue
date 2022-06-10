<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <b-container v-if="recipes">
      <div v-bind:key="recipe.id" v-for="recipe in recipes">
        <RecipeCard 
        :name="recipe.name"
        :body="recipe.body"
        :image="recipe.image"
        :id="recipe.id"
        ></RecipeCard>
      </div>
    </b-container>
    <b-container id="background" v-else>

    </b-container>
    <NuxtLink to="/recipe/new">
      <ButtonAddRecipeComponent></ButtonAddRecipeComponent>
    </NuxtLink>
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
            return { recipes: false}
        }
    }
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;
   
  }
  #background {
    margin-top: 1rem;
    height: 70vh;
    width: 95vw;
    background: url("~assets/home-bg.png") no-repeat;
    background-size: contain;
    background-position: center;
  }

  .container {
    display: flex;
  }
</style>