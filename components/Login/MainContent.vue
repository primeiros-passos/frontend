<template>
  <div class="main-content">
    <div class="top-bar">
      <NuxtLink to="/signup">
        <img src="@/assets/img/up-arrow.png" />
        <p>Cadastrar</p>
      </NuxtLink>
      <h1 class="title">Login</h1>
    </div>

    <div class="form">
      <label>E-mail</label>
      <Input v-model="email" type="email" placeholder="E-mail" />

      <label>Senha</label>
      <Input v-model="password" type="password" placeholder="Senha" />

      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div class="d-flex justify-end">
        <Button secondary :on-click="authenticate">Login</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginMainContent',
  data() {
    return {
      error: '',
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['getUserFromToken']),
    authenticate() {
      this.error = ''

      if (!this.email) {
        this.error = 'Informe um endereço de e-mail'
        return
      }
      if (!this.password) {
        this.error = 'Informe a sua senha'
        return
      }

      this.$axios
        .post('auth/login', { email: this.email, password: this.password })
        .then((res) => {
          localStorage.setItem('token', res.data)
          this.getUserFromToken()
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            this.error = error.response.data.message
            return
          }

          this.error =
            'Ocorreu um erro inesperado, por favor tente novamente mais tarde.'
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  max-width: 600px;
  width: 100%;
  padding: 1.5rem 1.25rem;

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      img {
        width: 1.5rem;
        height: 1.5rem;
        rotate: 270deg;
        margin-right: 0.5rem;
      }

      p {
        font-size: 1.5rem;
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        transition-duration: 0.2s;
        transition-property: border-bottom;
      }

      &:hover {
        p {
          border-bottom: 2px solid $secondary;
        }
      }
    }

    .title {
      border-bottom: 5px solid $secondary;
    }
  }

  .form {
    width: 70%;
    margin: 0 auto;

    label {
      margin-left: 2rem;
    }

    ::v-deep .container {
      margin-bottom: 1.5rem;
    }

    button {
      margin-top: 1.5rem;
    }

    .error {
      p {
        color: $red;
      }
    }
  }
}
</style>
