<template>
    <b-col align-self="stretch">
        <div id="imgLogin">
        <h4 id="textThatMeal">that.meal</h4>
        <h4 id="textDescrubra">Descubra temperos<br />incríveis</h4>
        </div>
    </b-col>
</template>

<script>
export default {
  name: 'FormRedefinirSenha',
}
</script>

<style>
#imgLogin {
  height: 100%;
  width: 100%;
  background: url('~assets/logo.png') no-repeat;
  background-position: center;
  background-color: #ffc452;
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
