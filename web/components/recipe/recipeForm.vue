<template>
<div>
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nome"
        label-for="input-1"
        description="Coloque aqui o nome da sua receita"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Algum nome massa..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Modo de preparo" label-for="input-2">
        <b-form-textarea
            id="textarea"
            v-model="form.body"
            placeholder="Coloque aqui o passo a passo da sua receita"
            rows="3"
            max-rows="30"
        ></b-form-textarea>
      </b-form-group>

    <b-form-group
      id="input-group-1"
      label="Url da imagem"
      label-for="input-1"
      description="Coloque uma url ou faça o upload"
    >
      <b-form-input
        id="input-1"
        v-model="form.image"
        type="text"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Imagem da receita:" label-for="input-2">
        <b-form-file
            v-model="form.image"
            :state="Boolean(form.image)"
            placeholder="Escolha uma foto bem bonita pra gente mostrar"
            drop-placeholder="Pode soltar sua foto aqui!"
        ></b-form-file>
        <div class="mt-3">Selected file: {{ form.image ? form.image.name : '' }}</div>
    </b-form-group>

      <b-button type="submit" variant="primary">Criar Receita</b-button>
      <b-button type="reset" variant="danger">Descartar</b-button>
    </b-form>

</div>
    
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          body: '',
          image: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$axios.post('recipe', {
          name: this.name,
          body: this.body,
          image: this.image,
          user_id: 1
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      onReset(event) {
        event.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.image = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>