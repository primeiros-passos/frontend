<template>
  <div class="d-flex align-center justify-between item">
    <a :href="link" class="link" target="_blank">
      <img src="@/assets/img/link.png" />
      <p>{{ description }}</p>
    </a>
    <div v-if="type === 'VIDEO'" class="circle" title="Vídeo">
      <img src="@/assets/img/video.png" />
    </div>
    <div v-if="type === 'COURSE'" class="circle" title="Curso">
      <img src="@/assets/img/course.png" />
    </div>
    <div v-if="type === 'ARCHIVE'" class="circle" title="Arquivo">
      <img src="@/assets/img/archive.png" />
    </div>
    <div v-if="price == 0" class="circle" title="Gratuito">
      <img src="@/assets/img/free.png" />
    </div>
    <div v-else class="circle" :title="formatedPrice">
      <img src="@/assets/img/payed.png" />
    </div>
    <div class="level">
      <p>{{ level }}</p>
    </div>
    <button class="action">
      <img src="@/assets/img/cancel.png" />
    </button>
    <button class="action">
      <img src="@/assets/img/check.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentSuggestionItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    level: {
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
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.link {
  background-color: $tertiary-lighter;
  display: flex;
  align-items: center;
  padding: 0.125rem 0.625rem;
  border-radius: 1.25rem;
  text-decoration: none;
  transition-property: background-color;
  transition-duration: 0.2s;
  width: 40%;
  margin-right: 0.5rem;

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

.level {
  background-color: $tertiary-lighter;
  padding: 0.125rem 0.625rem;
  border-radius: 1.25rem;

  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: $white;
  }
}

.action {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 0.5rem;
}
</style>
