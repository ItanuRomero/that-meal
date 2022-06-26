<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowLogin">
        <b-col id="colLogin">
          <div role="group">
            <label for="input-live"><h3>Entrar:</h3></label>
            <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="E-mail" trim></b-form-input>
          </div>
          <br/>
          <div role="group">
            <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Senha" trim></b-form-input>
            <NuxtLink to="/redefinirSenha"><h4 id="esqueciMinhaSenha" style="margin: 5px">Esqueci minha senha</h4></NuxtLink>
            <b-button block variant="primary" id="LoginButton">Login</b-button>
            <h4 id="h4CrieUmaConta" style="margin: 5px">Não tem uma conta? <NuxtLink to="/signup"  style="padding-left: 3px;">Crie agora.</NuxtLink></h4>
          </div>
        </b-col>
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
