<template>
  <div class="suggestion">
    <label class="input-label">Nome da comunidade:</label>
    <Input v-model="name" placeholder="Ex: Python, Java, HTML..." />

    <label class="input-label">Sobre o que seria essa comundade?</label>
    <Textarea
      v-model="description"
      placeholder="Descreva um pouco sobre o tema , para que é usado, alguma curiosidade, etc."
    ></Textarea>

    <div class="d-flex flex-wrap justify-between">
      <div class="d-flex flex-column align-center">
        <label>Categoria dessa comunidade:</label>
        <Dropdown
          v-model="category"
          placeholder="Selecione uma categoria"
          :options="categories"
        />
      </div>
      <div class="d-flex flex-column align-center">
        <label>Deseja administrar essa comunidade?</label>
        <ToggleSwitch v-model="willModerate" />
      </div>
    </div>

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div class="d-flex align-center justify-end">
      <Button secondary :on-click="suggestCommunity">
        Solicitar comunidade
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CommunitiesSuggestionModal',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      error: '',
      name: '',
      description: '',
      category: '',
      willModerate: false,
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    suggestCommunity() {
      this.error = ''

      if (!this.name) {
        this.error = 'Informe um nome'
        return
      }

      if (!this.description) {
        this.error = 'Informe uma descrição'
        return
      }

      if (!this.category) {
        this.error = 'Informe uma categoria'
        return
      }

      const data = {
        name: this.name,
        description: this.description,
        id_category: this.category,
      }
      if (this.willModerate) data.id_user = this.user.id

      const token = localStorage.getItem('token')

      this.$axios
        .post('communities', data, { headers: { Authorization: token } })
        .then(() => {
          this.$emit('closeModal')
        })
        .catch(() => {
          this.error = 'Verifique as informações inseridas e tente novamente'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.suggestion {
  width: 700px;

  ::v-deep .container {
    margin-bottom: 1.5rem;
  }

  ::v-deep .switch {
    margin-top: 1rem;
  }

  textarea {
    margin-bottom: 1.5rem;
  }

  .input-label {
    margin-left: 1rem;
  }

  button {
    margin-top: 2rem;
  }

  .error {
    margin-top: 2rem;

    p {
      color: $red;
    }
  }
}

@media only screen and (max-width: 800px) {
  .suggestion {
    width: 100%;
  }

  .justify-between {
    justify-content: center;
  }

  label {
    text-align: center;
  }
}
</style>
