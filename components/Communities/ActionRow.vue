<template>
  <div class="action-row d-flex flex-wrap align-center justify-between">
    <div class="filters">
      <Input
        placeholder="Qual comunidade você está procurando?"
        :action-icon="require('@/assets/img/search.png')"
        class="input"
      />

      <Popover :icon="require('@/assets/img/filter.png')">
        <p class="filter-title">Filtro</p>
        <div class="categories-filter">
          <Dropdown
            v-model="selectedCategory"
            placeholder="Selecione uma categoria"
            :options="[
              {
                name: 'Categoria 1',
                value: 1,
              },
              {
                name: 'Categoria 2',
                value: 2,
              },
            ]"
          />
        </div>
      </Popover>
    </div>

    <Button secondary :on-click="() => {}">Solicitar comunidade</Button>
  </div>
</template>

<script>
export default {
  name: 'CommunitiesActionRow',
  data() {
    return {
      selectedCategory: '',
    }
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