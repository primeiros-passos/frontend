<template>
  <div class="w-100">
    <div class="about">
      <p class="header">Sobre {{ name }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityAbout',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  padding: 2rem 1.5rem;
  background-color: $white;
  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;

  .header {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Sora', sans-serif;
    margin-bottom: 1rem;
  }
}
</style>
