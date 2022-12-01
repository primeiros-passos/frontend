<template>
  <div class="home-banner">
    <div class="content">
      <div class="community-count d-flex flex-wrap align-center justify-center">
        <p>Mais de</p>
        <p>&nbsp;405&nbsp;</p>
        <p>Comunidades</p>
      </div>
      <p class="banner-text">
        Encontre o que aprender de maneira fácil e rápida
      </p>
      <div class="input-container">
        <Input
          v-model="term"
          placeholder="Qual comunidade você está procurando?"
          :action-icon="require('@/assets/img/search.png')"
          :action="redirectToCommunities"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageBanner',
  data() {
    return {
      term: '',
    }
  },
  methods: {
    redirectToCommunities() {
      if (this.term) {
        this.$router.push({ path: '/communities', query: { term: this.term } })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  background-image: url('@/assets/img/banner.png');
  background-repeat: no-repeat;
  background-position: center 100%;
  background-size: cover;

  .content {
    padding: 5rem 2rem 10rem;
    p {
      color: $white;
    }

    .community-count {
      margin-bottom: 1.5rem;
      p {
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;

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
    }

    .input-container {
      margin: 5rem auto 0 auto;
      max-width: 37.5rem;
    }
  }
}

@media only screen and (max-width: 540px) {
  .home-banner {
    .content {
      .community-count {
        p {
          width: 100%;
          text-align: center;

          &:first-child {
            margin-bottom: 0.5rem;
          }

          &:last-child {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
