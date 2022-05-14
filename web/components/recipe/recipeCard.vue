<template>
  <div>
  <b-card
    :title="name"
    :img-src="image"
    :img-alt="image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card"
  >
    <b-card-text>
      {{body}}
    </b-card-text>

    <b-button href="#" variant="primary">Ver receita</b-button>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'RecipeCardComponent',
  props: {
    name: String,
    body: String,
    image: String,
    id: Number
  },
  data() {
    return {

    };
  }
}
</script>

<style>
.card {
    margin: 1rem;
}
#navbar {
    background-color: #F8B42F !important;
}
</style>