<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <b-container >
        Created by:
        Itanu Romero
        Gabriel Souza
        André
        Priscila Barros
    </b-container>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/header.vue'
import NavbarComponent from '../components/navbar.vue'
export default {
  name: 'AboutPage',
  components: {
    HeaderComponent,
    NavbarComponent
  },
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;
  }
</style>