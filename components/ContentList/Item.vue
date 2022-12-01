<template>
  <div class="item">
    <div v-if="type === 'VIDEO'" class="circle" title="Vídeo">
      <img src="@/assets/img/video.png" />
    </div>
    <div v-if="type === 'ARCHIVE'" class="circle" title="Arquivo">
      <img src="@/assets/img/archive.png" />
    </div>
    <div v-if="type === 'COURSE'" class="circle" title="Curso">
      <img src="@/assets/img/course.png" />
    </div>
    <div v-if="price == 0" class="circle" title="Gratuito">
      <img src="@/assets/img/free.png" />
    </div>
    <div v-else class="circle" :title="formatedPrice">
      <img src="@/assets/img/payed.png" />
    </div>
    <a :href="link">
      <img src="@/assets/img/link.png" />
      <p>{{ description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContentListItem',
  props: {
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    formatedPrice() {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(this.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid $tertiary-hyper-light;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .circle {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: $primary-lighter;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  a {
    background-color: $tertiary-lighter;
    display: flex;
    align-items: center;
    padding: 0.125rem 0.625rem;
    border-radius: 1.25rem;
    text-decoration: none;
    transition-property: background-color;
    transition-duration: 0.2s;
    width: 70%;

    &:hover {
      background-color: $tertiary-light;
    }

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.4rem;
    }

    p {
      font-size: 0.875rem;
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media only screen and (max-width: 375px) {
  .item {
    justify-content: center;

    .circle {
      margin-bottom: 1rem;
    }
    a {
      width: 100%;
    }
  }
}
</style>
