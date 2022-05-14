<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <RecipeDetail
        :name="recipe.name"
        :body="recipe.body"
        :image="recipe.image"
        :id="recipe.id"></RecipeDetail>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
import RecipeDetail from '../../components/recipe/recipeDetail.vue'
export default {
  name: 'RecipeDetailPage',
  components: {
    HeaderComponent,
    NavbarComponent,
    RecipeDetail
  },
  
  async asyncData({ $axios }) {
        try {
          const recipe = await $axios.$get(`recipe/${$route.params.id}`);
          return { recipe };
        } catch (ex) {
            console.log(ex);
            return { recipe: false}
        }
    }
}
</script>

<style>
  
</style>