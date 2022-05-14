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

      <b-form-group id="input-group-3" label="Categoria" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.category"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Modo de preparo" label-for="input-2">
        <b-form-textarea
            id="textarea"
            v-model="form.body"
            placeholder="Coloque aqui o passo a passo da sua receita"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    <b-form-group id="input-group-2" label="Imagem da receita:" label-for="input-2">
        <b-form-file
            v-model="form.photo"
            :state="Boolean(form.images)"
            placeholder="Escolha uma foto bem bonita pra gente mostrar"
            drop-placeholder="Pode soltar sua foto aqui!"
        ></b-form-file>
        <div class="mt-3">Selected file: {{ form.images ? form.images.name : '' }}</div>
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
          categories: null,
          images: []
        },
        categories: [{ text: 'Selecione uma categoria', value: null }, 'Suco', 'Massas', 'Básicos', 'Outros'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$axios.post('recipe', {
                  name: this.name,
                  body: this.body,
                  categories: this.categories,
                  createdBy: {
                    email: "example@example.com",
                    username: "MyUsername",
                    birth: "2016-08-29T09:12:33.001Z",
                    phone: "(11)99999-9999",
                    password: "string hash",
                    createdAt: "2016-08-29T09:12:33.001Z",
                    updatedAt: "2016-08-29T09:12:33.001Z",
                    isAdmin: true,
                    isActive: true
                  }
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
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.categories = null
        this.form.images = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>