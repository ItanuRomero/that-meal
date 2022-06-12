<template>
  <div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowLogin">
        <b-col id="colLogin">
          <div role="group">
            <label for="input-live"><h3>Entrar:</h3></label>
            <b-form-input
              id="input-live"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="E-mail"
              trim
            ></b-form-input>
          </div>
          <br />
          <div role="group">
            <b-form-input
              id="input-live"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Senha"
              trim
            ></b-form-input>
            <NuxtLink to="/esqueci-minha-senha"
              ><h4 id="esqueciMinhaSenha">Esqueci minha senha</h4></NuxtLink
            >
            <b-button block variant="primary" id="LoginButton">Login</b-button>
            <h4 id="h4CrieUmaConta">
              Não tem uma conta?<NuxtLink to="/crie-uma-conta">
                Crie uma</NuxtLink
              >
            </h4>
          </div>
        </b-col>
        <b-col align-self="stretch">
          <div id="imgLogin">
            <h4 id="textThatMeal">that.meal</h4>
            <h4 id="textDescrubra">Descubra temperos<br />incríveis</h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
}
</script>

<style>
#LoginButton {
  background-color: #ffc452 !important;
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
  background-position: center;
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
  padding-bottom: 40%;
  padding-right: 5%;
}
</style>