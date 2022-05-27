<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    {{ $route.params.id }}
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
export default {
  name: 'IndexPage',
  components: {
    HeaderComponent,
    NavbarComponent,
  },
  /*
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
    */
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;
   
  }
</style>