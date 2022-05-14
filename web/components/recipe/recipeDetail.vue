<template>
  <div>
  <b-container>
  <b-card 
    :img-src="image" :img-alt="name" img-height="200" img-top id="card" 
    :title="name"
    tag="article"
    style="max-width: 80vw;"
    class="mb-2"
  >
    <b-card-text>
        {{body}}
    </b-card-text>
    </b-card>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  props: {
    name: String,
    body: String,
    image: String,
    id: String
  },
  data() {
    return {

    };
  }
}
</script>

<style>
#card {
    margin: 1rem 0;
}
</style>