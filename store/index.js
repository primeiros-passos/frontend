export const state = () => ({
  user: {},
})

export const getters = {
  user(state) {
    return state.user
  },

  hasUser(state) {
    return JSON.stringify(state.user) !== '{}'
  },
}

export const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  getUserFromToken({ commit }) {
    const token = localStorage.getItem('token')

    if (token) {
      this.$axios
        .get('users/token', { headers: { Authorization: token } })
        .then((res) => {
          commit('UPDATE_USER', res.data)
          this.$router.push({ path: '/' })
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message === 'Token inválido'
          ) {
            commit('UPDATE_USER', {})
            this.$router.push({ path: '/login' })
          }
        })
    }
  },

  logout({ commit }) {
    localStorage.removeItem('token')
    commit('UPDATE_USER', {})
  },
}
