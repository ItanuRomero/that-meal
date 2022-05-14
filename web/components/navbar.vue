 <template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
    <NuxtLink to="/">
      <b-navbar-brand>Home</b-navbar-brand>
    </NuxtLink>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <NuxtLink to="/">
          <b-nav-item href="#">Minhas receitas</b-nav-item>
        </NuxtLink>
        <NuxtLink to="/">
          <b-nav-item href="#">Meus favoritos</b-nav-item>
        </NuxtLink>
        <NuxtLink to="/">
          <b-nav-item href="#">Minhas categorias</b-nav-item>
        </NuxtLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style>
    #navbar {
        background-color: #F8B42F !important;
    }
</style>