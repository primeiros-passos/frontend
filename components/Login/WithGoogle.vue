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
        this.login(currentUser)
      })
    },
    login(currentUser, dontRetry = false) {
      const email = currentUser.Mx.Fy
      this.$axios
        .post('auth/login', {
          email,
          password: `${process.env.G_SECRET}${email}`,
        })
        .then((res) => {
          localStorage.setItem('token', res.data)
          this.getUserFromToken()
          this.$router.push({ path: '/' })
        })
        .catch(() => {
          if (!dontRetry) this.createAccount(currentUser)
          else console.log('Houve um erro durante o login, tente mais tarde')
        })
    },
    createAccount(currentUser) {
      const [username, email] = [currentUser.Mx.Zf, currentUser.Mx.Fy]
      this.$axios
        .post('users', {
          name: username,
          username: `${username.replaceAll(' ', '').toLowerCase()}+${email}`,
          email,
          password: `${process.env.G_SECRET}${email}`,
        })
        .then(() => {
          this.login(currentUser, true)
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
