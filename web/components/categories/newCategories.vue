<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" style="margin: 10% 25% 25% 25%">
      <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Nome da categoria" required></b-form-input>
      <b-button block variant="primary" to="/" id="ConfirmarButton" style="margin-top: 10px">Confirmar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        },
        show: true
      }
    }
  }
</script>

