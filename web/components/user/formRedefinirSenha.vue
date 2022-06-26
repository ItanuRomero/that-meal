<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowRedefinirSenha">
        <b-col id="colRedefinirSenha">
          <div role="group">
            <label for="input-live"><h3>Redefinir Senha:</h3></label>
            <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Digite seu E-mail" trim></b-form-input>
          </div>
          <br>
          <b-button block variant="primary" id="ConfirmarButton">Confirmar</b-button>
          <h4 id="h4Voltar"><NuxtLink to="/login" style="margin: 2px">Voltar ao início.</NuxtLink></h4>
        </b-col>
        <AsideComponent></AsideComponent>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AsideComponent from "./asideAuth.vue"
export default {
  name: 'FormRedefinirSenha',
  components:{
    AsideComponent
  }
}
</script>

<style>
#ConfirmarButton {
  background-color: #ffc452 !important;
  border-color: #ffc452 !important;
  border-radius: 3px;
}

#colRedefinirSenha {
  margin-top: 15%;
  margin-right: 10%;
  margin-left: 10%;
}

#colDivis {
  width: 10px;
}

#imgLogin {
  height: 100%;
  width: 100%;
  background: url('~assets/logo.png') no-repeat;
  background-position: center;
  background-color: #ffc452;
}
#rowRedefinirSenha {
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
  padding-bottom: 40%;
  padding-right: 5%;
}

#h4Voltar {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 0.8rem;
  color: gray;
  padding-top: 5px;
}
</style>
