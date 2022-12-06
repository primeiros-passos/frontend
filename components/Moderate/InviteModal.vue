<template>
  <div>
    <label>Convide amigos para lhe ajudar a administrar esta comunidade:</label>
    <Input v-model="email" type="email" placeholder="email@email.com" />

    <div v-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div class="d-flex justify-end">
      <Button secondary :on-click="sendInvite">Convidar</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModerateInviteModal',
  data() {
    return {
      error: '',
      email: '',
    }
  },
  methods: {
    sendInvite() {
      this.error = ''
      if (!this.email) {
        this.error = 'Informe um endereço de e-mail.'
      }

      const token = localStorage.getItem('token')
      this.$axios
        .post(
          '/moderators/invite',
          {
            email: this.email,
            id_community: this.$route.params.id,
          },
          { headers: { Authorization: token } }
        )
        .then(() => {
          this.$emit('closeModal')
        })
        .catch(() => {
          this.error = 'Verifique as informações inseridas e tente novamente.'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .container {
  margin-top: 1rem;
}

.error {
  margin-top: 2rem;

  p {
    color: $red;
  }
}

button {
  margin-top: 1rem;
}
</style>
