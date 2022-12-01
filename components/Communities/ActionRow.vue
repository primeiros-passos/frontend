<template>
  <div class="action-row d-flex flex-wrap align-center justify-between">
    <div class="filters">
      <Input
        v-model="term"
        placeholder="Qual comunidade você está procurando?"
        :action-icon="require('@/assets/img/search.png')"
        class="input"
        :action="
          () => searchCommunities({ term, idCategory: selectedCategory })
        "
      />

      <Popover :icon="require('@/assets/img/filter.png')">
        <p class="filter-title">Filtro</p>
        <div class="categories-filter">
          <Dropdown
            v-model="selectedCategory"
            placeholder="Selecione uma categoria"
            :options="categories"
            clearable
          />
        </div>
      </Popover>
    </div>

    <!-- <Button secondary :on-click="() => {}">Solicitar comunidade</Button> -->
  </div>
</template>

<script>
export default {
  name: 'CommunitiesActionRow',
  data() {
    return {
      selectedCategory: '',
      categories: [],
      term: '',
      typing: null,
    }
  },
  watch: {
    term() {
      clearTimeout(this.typing)

      this.typing = setTimeout(() => {
        this.updateRouteQuery()
        this.searchCommunities({
          term: this.term,
          idCategory: this.selectedCategory,
        })
      }, 1000)
    },
    selectedCategory(value) {
      this.updateRouteQuery()
      this.searchCommunities({
        term: this.term,
        idCategory: value,
      })
    },
  },
  created() {
    this.searchCommunities({
      term: this.$route.query.term,
      idCategory: this.$route.query.id_category,
    })
    this.getCategories()
  },
  methods: {
    searchCommunities({ term, idCategory }) {
      const params = {}
      if (term) params.term = term
      if (idCategory) params.id_category = idCategory

      this.$axios.get('communities/search', { params }).then((res) => {
        this.$emit('updateCommunities', res.data)
      })
    },
    getCategories() {
      this.$axios.get('categories').then((res) => {
        this.categories = res.data.map((item) => ({
          name: item.name,
          value: item.id,
        }))
      })
    },
    updateRouteQuery() {
      const query = {}
      if (this.term) query.term = this.term
      if (this.selectedCategory) query.id_category = this.selectedCategory
      this.$router.replace({ query })
    },
  },
}
</script>

<style lang="scss" scoped>
.action-row {
  margin-bottom: 2.5rem;

  .filters {
    width: 50%;
    display: flex;
    align-items: center;

    .input {
      margin-right: 2rem;
    }

    .filter-title {
      font-weight: 600;
      font-size: 1rem;
    }

    .categories-filter {
      width: 300px;
      margin-top: 1rem;
    }
  }
}

@media only screen and (max-width: 645px) {
  .action-row {
    .filters {
      width: 100%;
      margin-bottom: 1rem;

      ::v-deep .popover-content {
        right: 0;
      }
    }
  }
}

@media only screen and (max-width: 390px) {
  .action-row {
    .filters {
      .categories-filter {
        width: 200px;
      }
    }
  }
}
</style>
