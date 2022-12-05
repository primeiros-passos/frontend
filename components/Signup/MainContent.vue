<template>
  <div class="main-content">
    <div class="top-bar">
      <h1 class="title">Cadastrar</h1>
      <NuxtLink to="/login">
        <p>Login</p>
        <img src="@/assets/img/up-arrow.png" />
      </NuxtLink>
    </div>

    <div class="form">
      <label>Nome</label>
      <Input v-model="name" type="text" placeholder="Nome" />

      <label>E-mail</label>
      <Input v-model="email" type="email" placeholder="E-mail" />

      <label>Senha</label>
      <Input v-model="password" type="password" placeholder="Senha" />

      <label>Confirme a senha</label>
      <Input v-model="confirmPassword" type="password" placeholder="Senha" />

      <SignupTerms />

      <div class="accept-terms">
        <input id="terms" v-model="terms" type="checkbox" />
        <label for="terms">Concordo com os termos e condições</label>
      </div>

      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div class="d-flex justify-end">
        <Button secondary :on-click="createUser">Cadastrar</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupMainContent',
  data() {
    return {
      error: '',
      name: '',
      email: '',
      password: '',
      terms: false,
      confirmPassword: '',
    }
  },
  methods: {
    createUser() {
      this.error = ''

      if (!this.name) {
        this.error = 'Informe um nome'
        return
      }

      if (!this.email) {
        this.error = 'Informe um endereço de email'
        return
      }

      if (!this.password) {
        this.error = 'Informe uma senha'
        return
      }

      if (this.password !== this.confirmPassword) {
        this.error = 'As senhas não coincidem'
        return
      }

      if (!this.terms) {
        this.error = 'Aceite os termos para poder criar uma conta'
        return
      }

      this.$axios
        .post('users', {
          name: this.name,
          username: this.name.replaceAll(' ', '').toLowerCase(),
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ path: '/login' })
        })
        .catch(() => {
          this.error = 'Verifique as informações inseridas e tente novamente'
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
        rotate: 90deg;
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

    .accept-terms {
      margin-bottom: 1rem;

      label {
        margin-left: 0;
        color: $tertiary-lighter;
      }
    }

    .error {
      p {
        color: $red;
      }
    }
  }
}
</style>
