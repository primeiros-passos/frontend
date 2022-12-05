<template>
  <div class="related">
    <p>Comunidades relacionadas</p>
    <a
      v-for="relatedCommunity in relatedCommunities"
      :key="relatedCommunity.id"
      :href="$router.resolve(`/community/${relatedCommunity.id}`).href"
      :style="{ backgroundColor: relatedCommunity.category.color }"
    >
      {{ relatedCommunity.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'CommunityRelated',
  props: {
    relatedCommunities: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.related {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: $tertiary-hyper-light;
  border-radius: 0.625rem;
  padding: 1.5rem 0.625rem;
  margin: 2.813rem 0;
  width: 35%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  p {
    color: $primary;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    font-weight: bold;
    font-size: 0.875rem;
    text-decoration: none;
    text-align: center;
    padding: 0.625rem 0;
    width: 100%;
    border-radius: 0.625rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (max-width: 700px) {
  .related {
    width: 100%;
    margin-top: 0;
  }
}
</style>
