<template>
  <div class="container">
    <div class="top">
      <p>Envio de conteúdo</p>
    </div>
    <div class="tab-nav">
      <button
        :class="{ active: tabActive === 'suggestion' }"
        @click.prevent="changeTab('suggestion')"
      >
        Sugestões
      </button>
      <button
        :class="{ active: tabActive === 'rejected' }"
        @click.prevent="changeTab('rejected')"
      >
        Rejeitadas
      </button>
      <button
        :class="{ active: tabActive === 'moderator' }"
        @click.prevent="changeTab('moderator')"
      >
        Moderadores
      </button>
    </div>
    <div class="tabs">
      <ModerateManageContentSuggestions v-if="tabActive === 'suggestion'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContent',
  data() {
    return {
      tabActive: 'suggestion',
    }
  },
  methods: {
    changeTab(tab) {
      this.tabActive = tab
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 48%;
  background-color: $tertiary-hyper-light;
  margin: 2.813rem 0;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .top {
    background-color: $tertiary-darker;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    padding: 0.5rem 2rem;

    p {
      font-size: 2rem;
      font-weight: 700;
      font-family: 'Sora', sans-serif;
      color: $white;
    }
  }

  .tab-nav {
    background-color: $black;

    button {
      cursor: pointer;
      border: none;
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      background-color: transparent;
      color: $white;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.5rem 1.5rem;

      &.active {
        background-color: $secondary;
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  .container {
    width: 100%;
  }
}
</style>
