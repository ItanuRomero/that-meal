<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowLogin">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="login-form">
          <b-col id="colLogin">
            <b-form-group
              id="input-group-1"
              label="Nome:"
              label-for="input-1"
              description="Insira seu nome"
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Senha: " label-for="input-2">
              <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
              ></b-form-input>
            </b-form-group>
            <NuxtLink to="/redefinirSenha"><h4 id="esqueciMinhaSenha" style="margin: 5px">Esqueci minha senha</h4></NuxtLink>
            <b-button  type="submit" variant="primary" id="LoginButton">Login</b-button>
            <h4 id="h4CrieUmaConta" style="margin: 5px">Não tem uma conta? <NuxtLink to="/signup"  style="padding-left: 3px;">Crie agora.</NuxtLink></h4>
          </b-col>
        </b-form>
        <AsideComponent></AsideComponent>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AsideComponent from "./asideAuth.vue"
export default {
  name: 'FormLogin',
  components:{
    AsideComponent
  },
  data() {
      return {
        form: {
          username: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        const self = this
        event.preventDefault()
        this.$axios.post('http://localhost:5000/login', {
          username: this.form.username,
          password: this.form.password
        })
        .then(function (response) {
          console.log(response.data.token);
          document.cookie = `token=${response.data.token}`;
          self.$router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
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
#LoginButton {
  background-color: #ffc452 !important;
  border-color: #ffc452 !important;
  border-radius: 3px;

}

#colLogin {
  margin-top: 15%;
  margin-right: 10%;
  margin-left: 10%;
}

#colDivis {
  width: 10px;
}
#h4CrieUmaConta {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 0.8rem;
  color: gray;
  padding-top: 5px;
}

#esqueciMinhaSenha {
  display: flex;
  align-content: center;
  justify-content: right;
  font-size: 0.8rem;
  font-style: normal;
  padding-top: 2px;
}

#imgLogin {
  height: 100%;
  width: 100%;
  background: url('~assets/logo.png') no-repeat;
  background-position: right !important;
  background-color: #ffc452;
}

#rowLogin {
  height: 100vh;
}

#textThatMeal {
  color: white;
  display: flex;
  align-content: right;
  justify-content: right;
  padding-right: 8%;
  padding-top: 8%;
}

#textDescrubra {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 20% !important;
  padding-right: 5%;
}
</style>
