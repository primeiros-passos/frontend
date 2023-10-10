<template>
  <div class="google-login d-flex flex-column align-center">
    <h4>Outro método</h4>
    <Button primary :on-click="getInfo">Entrar com a conta sua Google</Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginWithGoogle',
  methods: {
    ...mapActions(['getUserFromToken']),
    getInfo() {
      this.$gapi.login().then(({ currentUser }) => {
        if (!currentUser) return
        this.login()
      })
    },
    login(dontRetry = false) {
      const currentUser = this.$gapi.getUserData()
      this.$axios
        .post('auth/login', {
          email: currentUser.email,
          password: `${process.env.G_SECRET}${currentUser.email}`,
        })
        .then((res) => {
          localStorage.setItem('token', res.data)
          this.getUserFromToken()
          this.$router.push({ path: '/' })
        })
        .catch(() => {
          if (!dontRetry) this.createAccount()
          else console.log('Houve um erro durante o login, tente mais tarde')
        })
    },
    createAccount() {
      const currentUser = this.$gapi.getUserData()
      this.$axios
        .post('users', {
          name: currentUser.fullName,
          username: `${currentUser.fullName.replaceAll(' ', '').toLowerCase()}+${currentUser.email}`,
          email: currentUser.email,
          password: `${process.env.G_SECRET}${currentUser.email}`,
        })
        .then(() => {
          this.login(true)
        })
    },
  },
}
</script>

<style>
.google-login {
  margin-top: 3rem;
}
</style>
