<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <NavbarComponent></NavbarComponent>
    <main id="main">
        <b-container>
            <RecipeForm></RecipeForm>
        </b-container>
    </main>
    </div>
</template>

<script>
import RecipeForm from "../../components/recipe/recipeForm.vue"
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
export default {
  name: 'NewRecipePage',
  components: {
    RecipeForm,
    HeaderComponent,
    NavbarComponent,
  },
}
</script>

<style>
  #main {
    width: auto;
    margin: 2rem 0;
  }
</style>