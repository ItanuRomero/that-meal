<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
export default {
  name: 'UserDetailPage',
  components: {
    HeaderComponent,
    NavbarComponent,
  },

  async asyncData({ $axios }) {
        try {
          console.log($route.params.id)
          const user = await $axios.$get(`user/${ $route.params.id }`);
          return { user };
        } catch (ex) {
            console.log(ex);
            return { user: false}
        }
    }
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;
   
  }
  #background {
    margin-top: 1rem;
    height: 70vh;
    width: 95vw;
    background: url("~assets/home-bg.png") no-repeat;
    background-size: contain;
    background-position: center;
  }
</style>