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
        <b-card-text>
            {{user}}
        </b-card-text>
        <b-card-text>
            {{comments}}
        </b-card-text>
        <b-card-text>
            {{favourites.length}}
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
      let user = await $axios.$get(`user/${recipe.user_id}`);
      user = {
        name: user.username,
        isActive: user.isActive
      }
      const comments = await $axios.$get(`comment/${params.id}`);
      const favourites = await $axios.$get(`favourite/${params.id}`);
      return { recipe, user, comments, favourites};
    } catch (ex) {
        console.log(ex);
        return { recipe: false}
    }
  }
}
</script>

<style>
  
</style>