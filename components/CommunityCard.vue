<template>
  <NuxtLink :to="route" class="card" :style="{ backgroundColor: color }">
    <p class="title">{{ title }}</p>
    <p class="desc">{{ desc }}</p>
    <div class="content-count">
      <img src="@/assets/img/folder.png" alt="Folder icon" />
      <p>
        {{ contentCount }} {{ contentCount === 1 ? 'conteúdo' : 'conteúdos' }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CommunityCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    contentCount: {
      type: Number,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: 3px solid transparent;
  background-color: #d7eee3;
  width: 23.125rem;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
  text-decoration: none;
  transition-property: border;
  transition-duration: 0.2s;

  &:hover {
    border: 3px solid $secondary;
  }

  p {
    white-space: normal;
  }

  .title {
    font-family: 'Sora', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .content-count {
    display: flex;
    align-items: center;

    img {
      height: 1rem;
      width: auto;
      margin-right: 0.5rem;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .card {
    width: 48%;
  }
}

@media only screen and (max-width: 625px) {
  .card {
    width: 100%;
  }
}
</style>
