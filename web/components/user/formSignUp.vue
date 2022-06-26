<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowCriarConta">
        <b-col id="colCriarConta">
          <div role="group">
            <label for="input-live"><h3>Criar Conta:</h3></label>
            <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Nome Completo" trim></b-form-input>
          </div>
          <br />
          <div role="group">
            <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Data de Nascimento" trim></b-form-input>
            <br>
            <div role="group">
              <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Número de Telefone" trim></b-form-input>
            </div>
            <br>
            <div role="group">
              <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="E-mail" trim></b-form-input>
            </div>
            <br>
            <div role="group">
              <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Confirmação de E-mail" trim></b-form-input>
            </div>
            <br>
            <div role="group">
              <b-form-input id="input-live" aria-describedby="input-live-help input-live-feedback" placeholder="Senha" trim></b-form-input>
            </div>
            <br>
            <b-button block variant="primary" id="CriarContaButton">Criar Conta</b-button>
            <h4 id="h4FazerLogin" style="margin: 5px">Já tem uma conta? <NuxtLink to="/login" style="padding-left: 3px;">Fazer Login.</NuxtLink></h4>
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
  name: 'FormSignUp',
  components:{
    AsideComponent
  }
}
</script>

<style>
#CriarContaButton {
  background-color: #ffc452 !important;
  border-color: #ffc452 !important;
  border-radius: 3px;
}

#colCriarConta {
  margin-top: 5%;
  margin-right: 10%;
  margin-left: 10%;
}

#colDivis {
  width: 10px;
}
#h4FazerLogin {
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
  background-position: center;
  background-color: #ffc452;
}
#rowCriarConta {
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
</style>
