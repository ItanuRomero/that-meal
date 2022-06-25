<template>
  <div>
    <main>
      <b-container>
        <div>
          <b-button variant="danger" @click="ToastDanger('danger')" class="mb-2">Oops, algo deu errado!</b-button>
          <b-button variant="success" @click="ToastPerfil('success')" class="mb-2">Perfil atualizado com sucesso!</b-button>
          <b-button variant="success" @click="ToastAddFavoritos('success')" class="mb-2">Adicionado aos favoritos!</b-button>
          <b-button variant="success" @click="ToastDelFavoritos('success')" class="mb-2">Removido dos favoritos!</b-button>
          <b-button variant="success" @click="ToastAddCategoria('success')" class="mb-2">Categoria adicionada!</b-button>
          <b-button variant="success" @click="ToastDelCategoria('success')" class="mb-2">Categoria removida!</b-button>
          <b-button variant="success" @click="ToastAddReceita('success')" class="mb-2">Receita criada!</b-button>
          <b-button variant="success" @click="ToastDelReceita('success')" class="mb-2">Receita removida!</b-button>
          <b-button variant="success" @click="ToastAvaliacao('success')" class="mb-2">Avaliação enviada!</b-button>
          <b-button variant="success" @click="ToastComentario('success')" class="mb-2">Comentário adicionado!</b-button>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../../components/header.vue'
import NavbarComponent from '../../components/navbar.vue'
import ButtonAddRecipeComponent from "../../components/recipe/button-add-recipe.vue"
export default {

  name: 'Toasts',
  components: {
    HeaderComponent,
    NavbarComponent,
    ButtonAddRecipeComponent,
  },

  data() {
    return {
      showBottom: false,
      showTop: false
    }
  },


    methods: {
      ToastPerfil(variant = null) {
        this.$bvToast.toast('Perfil atualizado com sucesso!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastAddFavoritos(variant = null) {
        this.$bvToast.toast('Adicionado aos favoritos!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastDelFavoritos(variant = null) {
        this.$bvToast.toast('Removido dos favoritos!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastAddCategoria(variant = null) {
        this.$bvToast.toast('Categoria adicionada!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastDelCategoria(variant = null) {
        this.$bvToast.toast('Categoria removida!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastAddReceita(variant = null) {
        this.$bvToast.toast('Receita criada!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastDelReceita(variant = null) {
        this.$bvToast.toast('Receita removida!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastAvaliacao(variant = null) {
        this.$bvToast.toast('Avaliação enviada!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastComentario(variant = null) {
        this.$bvToast.toast('Comentário adicionado!', {
          title: `Tudo certo! :)`,
          variant: variant,
          solid: true
        })
      },
      ToastDanger(variant = null) {
        this.$bvToast.toast('Tente novamente.', {
          title: `Oops, algo deu errado! :(`,
          variant: variant,
          solid: true
        })
      }
    },
  async asyncData({ $axios }) {
        try {
          const recipes = await $axios.$get('recipe');
          return { recipes };
        } catch (ex) {
            console.log(ex);
            return { recipes: true}
        }
    }
}
</script>

<style>
  main {
    height: 100vh;
    width: 100vw;

  }
#button-add-categorie {
  margin: 1rem;
  height: 3rem;
  width: 20rem;
  border-radius: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
  #background {
    margin-left: 5rem;
    height: 70vh;
    width: 95vw;
    background: url("~assets/home-bg.png") no-repeat;
    background-size: contain;
    background-position: center;
  }

  .container {
    display: flex;
  }

  .categoria{
    border: 1px solid;
    background-color: #ffc452;
    width: 100%;
    padding: 2px;
  }

</style>
