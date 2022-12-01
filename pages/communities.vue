<template>
  <div class="content">
    <Button icon :on-click="() => $router.push('/')">
      <img src="@/assets/img/left-arrow.png" alt="Voltar" />
    </Button>
    <h1>Comunidades da plataforma</h1>
    <CommunitiesActionRow @updateCommunities="updateCommunities" />
    <div
      v-if="communities.length > 0"
      class="d-flex flex-wrap align-stretch justify-between"
    >
      <CommunityCard
        v-for="community in communities"
        :key="community.title"
        :title="community.name"
        :desc="community.description"
        :color="community.category.color"
        :content-count="community._count.content"
        :route="$router.resolve(`community/${community.id}`).href"
      />
      <div v-if="communities.length % 2 === 0" class="placeholder"></div>
    </div>
    <div v-else class="no-content">
      <h1>Nenhuma comunidade a mostar...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunitiesPage',
  data() {
    return {
      communities: []
    }
  },
  methods: {
    updateCommunities(value) {
      this.communities = value
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 1.25rem;

  h1 {
    margin: 2rem 0;
  }

  .placeholder {
    width: 23.125rem;
  }

  .no-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
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
