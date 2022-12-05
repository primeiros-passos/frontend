<template>
  <div class="banner">
    <div class="user-count d-flex flex-wrap align-center justify-center">
      <p>Mais de</p>
      <p>
        &nbsp;
        {{ userCount < 10 ? `0${userCount}` : userCount }}
        &nbsp;
      </p>
      <p>usuários</p>
    </div>
    <p class="banner-text">Muitos conteúdos trazidos pela comunidade</p>
  </div>
</template>

<script>
export default {
  name: 'LoginBanner',
  data() {
    return {
      userCount: 0,
    }
  },
  created() {
    this.getUserCount()
  },
  methods: {
    getUserCount() {
      this.$axios.get('users/count').then((res) => {
        this.userCount = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  max-width: 600px;
  width: 100%;

  .user-count {
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    p {
      font-family: 'Sora', sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      color: $white;

      &:first-child {
        margin-bottom: 2rem;
      }

      &:nth-child(2) {
        font-size: 4rem;
        font-weight: bold;
      }

      &:last-child {
        margin-top: 2rem;
      }
    }
  }

  .banner-text {
    text-align: center;
    font-size: 0.75rem;
    color: $white;
  }
}
</style>
