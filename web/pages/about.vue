<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
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
  
</style>