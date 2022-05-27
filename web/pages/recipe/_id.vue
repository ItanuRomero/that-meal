<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <b-container>
      <b-card 
        :img-src="recipe.image" 
        :img-alt="recipe.name"
        :title="recipe.name"
        img-top id="card" 
        tag="article"
        class="mb-2"
      >
        <b-card-text>
            {{recipe.body}}
        </b-card-text>
      </b-card>
    </b-container>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
export default {
  name: 'RecipeDetail',
  components: {
    HeaderComponent,
    NavbarComponent
  },
  async asyncData({ $axios, params }) {
        try {
          const recipe = await $axios.$get(`recipe/${params.id}`);
          if (recipe.createdBy) {
            recipe.createdBy = {username: recipe.createdBy.username}
          }
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