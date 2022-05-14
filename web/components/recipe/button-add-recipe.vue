<template>
  <div>
    <b-button id="button-add-recipe" variant="success"
      >Adicionar Receita</b-button
    >
  </div>
</template>

<script>
export default {
  name: 'ButtonAddRecipeComponent',
}
</script>

<style>
#button-add-recipe {
  margin: 1rem;
  height: 3rem;
  width: 10rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>