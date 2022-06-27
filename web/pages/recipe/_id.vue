<template>
  <div>
    <main>
    <HeaderComponent></HeaderComponent>
    <NavbarComponent></NavbarComponent>
    <b-container>
      <b-card 
        :img-src="recipe.image" 
        :img-alt="recipe.name"
        :title="recipe.name"
        img-top id="card" 
        tag="article"
        class="mb-2"
      >
        <b-container v-if="favourites">
          <h5>Favoritos: {{favourites.length}}</h5>
        </b-container>
        <b-container>
          <b-button @click="addFavourite" variant="primary">Adicionar aos favoritos</b-button>
        </b-container>

        <b-card-text>
            {{recipe.body}}
        </b-card-text>
        <b-card-text>
          Criado por: {{user.username}}
        </b-card-text>

        <b-container v-if="comments" style="display: block;">
        <h5>Comentários:</h5>
          <div v-bind:key="comment.id" v-for="comment in comments">
            <b-card-text>
              {{comment.text}} <br/>
            </b-card-text>
          </div>
        </b-container>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Novo comentário"
                label-for="input-1"
                description="Este comentário será visível a todos."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.text"
                  type="text"
                  placeholder="Digite aqui"
                  required
                ></b-form-input>
              </b-form-group>
            <b-button  type="submit" variant="primary">Inserir comentário</b-button>
            </b-form>
      </b-card>
    </b-container>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
export default {
  name: 'RecipeDetail',
  components: {
    HeaderComponent,
    NavbarComponent
  },
  async asyncData({ $axios, $getCookie, params }) {
    try {
      $axios.setHeader('Authorization', `Bearer ${$getCookie('token')}`);
      const recipe = await $axios.$get(`recipe/${params.id}`);
      return { recipe };
    } catch (ex) {
        console.log(ex);
        return { recipe: false}
    }
  },
  async fetch() {
    this.user = await this.$axios.$get(`http://localhost:5000/user/${this.$getCookie('user_id')}`);
    this.comments = await this.$axios.$get(`comment/${this.$route.params.id}`);
    this.favourites = await this.$axios.$get(`favourite/${this.$route.params.id}`);
  },
  data() {
    return {
      user: {},
      comments: [],
      favourites: [],
      form:  {
          text: '',
        },
      show: true
    }
  },
  methods: {
    addFavourite() {
      this.$axios.setHeader('Authorization', `Bearer ${this.$getCookie('token')}`);
      const self = this;
      this.$axios.post(`favourite/`, {
        user_id: this.$getCookie('user_id'),
        recipe_id: this.$route.params.id
      })
      .then(function (response) {
        console.log(response);
        self.$router.push(`/recipe/${self.$route.params.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    onSubmit(event) {
        const self = this
        this.$axios.setHeader('Authorization', `Bearer ${this.$getCookie('token')}`);
        event.preventDefault()
        this.$axios.post('comment', {
          text: this.form.text,
          user_id: this.$getCookie('user_id'),
          recipe_id: this.$route.params.id
        })
        .then(function (response) {
          self.$router.push(`/recipe/${self.$route.params.id}`);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.text = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  }
}
</script>

<style>
  
</style>