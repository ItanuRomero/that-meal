 <template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info" id="header">
        <NuxtLink to="/about">
          <b-navbar-brand>that.meal</b-navbar-brand>
        </NuxtLink>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Pesquise por categorias"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Buscar</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav style="margin-left: 3rem">
            <NuxtLink to="/login">
              <b-button size="sm" class="my-2 my-sm-0" variant="outline-primary"
                >Sign In</b-button
              >
            </NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
#header {
  background-color: #ffc452 !important;
  height: 10vh;
}
</style>