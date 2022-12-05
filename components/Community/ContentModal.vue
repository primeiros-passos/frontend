<template>
  <div class="suggestion">
    <label class="input-label">Nome do conteúdo</label>
    <Input v-model="name" placeholder="Ex: aulas de Java" />

    <label class="input-label">Cole o link do conteúdo</label>
    <Input
      v-model="link"
      placeholder="link do site, video, blog, etc"
      type="url"
    />

    <div class="d-flex flex-wrap-reverse align-center justify-between">
      <div class="w-40 d-flex flex-column align-center mb">
        <label class="input-label center">O conteúdo é pago?</label>
        <div class="d-flex align-center justify-center">
          <Radio
            v-model="isPayed"
            option="false"
            :icon="require('@/assets/img/free.png')"
          />
          <Radio
            v-model="isPayed"
            option="true"
            :icon="require('@/assets/img/payed.png')"
          />
        </div>
      </div>

      <div class="w-60 d-flex flex-column align-center mb">
        <label class="input-label center">
          O conteúdo é de leitura, vídeo ou curso?
        </label>
        <div class="d-flex align-center justify-center">
          <Radio
            v-model="type"
            option="ARCHIVE"
            :icon="require('@/assets/img/archive-yellow.png')"
          />
          <Radio
            v-model="type"
            option="VIDEO"
            :icon="require('@/assets/img/video-yellow.png')"
          />
          <Radio
            v-model="type"
            option="COURSE"
            :icon="require('@/assets/img/course-yellow.png')"
          />
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap align-center justify-between">
      <div v-if="isPayed === 'true'" class="w-40">
        <label class="input-label">Valor do conteúdo</label>
        <Input v-model="contentValue" placeholder="R$ 0,00" type="number" />
      </div>

      <div class="w-50">
        <label class="input-label">Dificuldade</label>
        <Dropdown
          v-model="selectedLevel"
          placeholder="Selecione uma dificuldade"
          :options="levels"
        />
      </div>
    </div>

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div class="d-flex justify-end">
      <Button secondary :on-click="suggestContent">Enviar conteúdo</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CommunityContentModal',
  data() {
    return {
      error: '',
      name: '',
      link: '',
      isPayed: 'false',
      type: 'ARCHIVE',
      contentValue: '',
      selectedLevel: '',
      levels: [
        {
          name: 'Iniciante',
          value: 'STARTER',
        },
        {
          name: 'Intermediário',
          value: 'MEDIUM',
        },
        {
          name: 'Avançado',
          value: 'ADVANCED',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    suggestContent() {
      this.error = ''
      const data = {
        content_type: this.type,
        type: 'INSERT',
        id_community: this.$route.params.id,
        id_user: this.user.id,
      }
      const token = localStorage.getItem('token')

      if (!this.name) {
        this.error = 'Informe um nome'
        return
      }
      data.description = this.name

      if (!this.link) {
        this.error = 'Informe um link'
        return
      }
      data.link = this.link

      if (this.isPayed === 'true' && this.contentValue < 1) {
        this.error = 'Informe um preço válido'
        return
      }
      data.value = this.isPayed === 'true' ? `${this.contentValue}` : '0'

      if (!this.selectedLevel) {
        this.error = 'Informe o nível de dificuldade'
        return
      }
      data.level = this.selectedLevel

      this.$axios
        .post('suggestions', data, { headers: { Authorization: token } })
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
  width: 100%;

  ::v-deep .container,
  .mb {
    margin-bottom: 1.5rem;
  }

  .input-label {
    margin-left: 1rem;

    .center {
      text-align: center;
    }
  }

  .error {
    margin-bottom: 1rem;
    margin-left: 1rem;

    p {
      color: $red;
    }
  }
}

@media only screen and (max-width: 800px) {
  .suggestion {
    .w-50,
    .w-60,
    .w-40 {
      width: 100%;
    }
  }
}
</style>
