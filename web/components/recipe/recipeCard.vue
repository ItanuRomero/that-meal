<template>
  <div>
  <b-card
    :title="name"
    :img-src="image"
    :img-alt="name"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 card"
  >
    <b-card-text>
      {{body}}
    </b-card-text>
    <NuxtLink :to="`/recipe/${id}`">
    <b-button variant="primary">Ver receita</b-button>
    </NuxtLink>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'NavbarComponent',
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