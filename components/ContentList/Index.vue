<template>
  <div class="container" :class="[level]">
    <div>
      <p class="list-title">{{ title }}</p>
    </div>
    <div class="d-flex align-center justify-between">
      <p>{{ description }}</p>
      <button
        v-if="contents.length > 0"
        class="expand-button"
        :class="{ open }"
        @click="toggle"
      >
        <img src="@/assets/img/down-arrow.png" />
      </button>
    </div>
    <div v-if="contents.length > 0" class="content-counter" :class="{ open }">
      <img src="@/assets/img/link.png" />
      <p>
        {{
          contents.length != 1 ? `${contents.length} conteúdos` : '1 conteúdo'
        }}
      </p>
    </div>
    <div v-else class="content-counter" :class="{ open }">
      <p>Sem conteúdo cadastrado</p>
    </div>
    <div v-if="open" class="list">
      <ContentListItem
        v-for="content in contents"
        :key="content.id"
        :type="content.type"
        :price="content.value"
        :description="content.description"
        :link="content.link"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentList',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    contents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.75rem;
  padding: 0.625rem 1.5rem;
  margin: 2.813rem 0;

  &.starter {
    border-left: 1.125rem solid $green;
    background-color: $light-green;
  }

  &.medium {
    border-left: 1.125rem solid $yellow;
    background-color: $light-yellow;
  }

  &.advanced {
    border-left: 1.125rem solid $red;
    background-color: $light-red;
  }

  .list-title {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Sora', sans-serif;
  }

  .expand-button {
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background-color: transparent;
    margin-left: 1rem;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
      transition-duration: transform;
      transition-duration: 0.2s;
    }

    &.open {
      img {
        transform: rotate(-180deg);
      }
    }
  }

  .content-counter {
    background-color: $tertiary-lighter;
    display: flex;
    align-items: center;
    padding: 0.125rem 0.625rem;
    max-width: max-content;
    border-radius: 1.25rem;
    margin-top: 1rem;

    &.open {
      margin-bottom: 2rem;
    }

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.4rem;
    }

    p {
      font-size: 0.875rem;
      color: $white;
    }
  }
}

@media only screen and (max-width: 375px) {
  .container {
    padding: 0.625rem;

    &.starter {
      border-left: 0.563rem solid $green;
      background-color: $light-green;
    }

    &.medium {
      border-left: 0.563rem solid $yellow;
      background-color: $light-yellow;
    }

    &.advanced {
      border-left: 0.563rem solid $red;
      background-color: $light-red;
    }
  }
}
</style>
