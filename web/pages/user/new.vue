<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>

    <UserLoginForm></UserLoginForm>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
import UserLoginForm from '../../components/user/newUserLogin.vue'
export default {
  name: 'NewUserPage',
  components: {
    HeaderComponent,
    NavbarComponent,
    UserLoginForm
  },
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