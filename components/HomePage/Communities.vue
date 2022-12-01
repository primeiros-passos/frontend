<template>
  <div v-if="communities.length > 0" class="content">
    <h1>Principais comunidades</h1>
    <div class="d-flex flex-wrap align-stretch justify-between">
      <CommunityCard
        v-for="community in communities"
        :key="community.id"
        :title="community.name"
        :desc="community.description"
        :color="community.category.color"
        :content-count="community._count.content"
        :route="$router.resolve(`community/${community.id}`).href"
      />
      <div v-if="communities.length % 2 === 0" class="placeholder"></div>
    </div>
  </div>
  <div v-else class="content no-content">
    <h1>Nenhuma comunidade a mostar...</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePageCommunities',
  data() {
    return {
      communities: [],
    }
  },
  created() {
    this.getCommunities()
  },
  methods: {
    getCommunities() {
      this.$axios.get('/communities').then((res) => {
        this.communities = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  h1 {
    margin-bottom: 2.5rem;
  }

  &.no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
  }

  .placeholder {
    width: 23.125rem;
  }
}

@media only screen and (max-width: 1200px) {
  .content {
    .placeholder {
      width: 48%;
    }
  }
}

@media only screen and (max-width: 625px) {
  .content {
    .placeholder {
      width: 100%;
    }
  }
}
</style>
