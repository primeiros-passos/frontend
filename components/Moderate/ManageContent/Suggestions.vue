<template>
  <div class="suggestion-list">
    <ModerateManageContentSuggestionItem
      v-for="suggestion in suggestions"
      :id="suggestion.id"
      :key="suggestion.id"
      :link="suggestion.content_link"
      :description="suggestion.content_description"
      :type="suggestion.content_type"
      :price="Number(suggestion.content_value)"
      :level="suggestion.content_level"
      @removeItem="removeItem"
    />
    <p v-if="suggestions.length < 1">Nenhuma sugestão cadastrada...</p>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentSuggestions',
  data() {
    return {
      suggestions: [],
    }
  },
  created() {
    this.getSuggestionsByCommunity()
  },
  methods: {
    getSuggestionsByCommunity() {
      this.$axios
        .get(`/communities/${this.$route.params.id}/suggestions`, {
          params: { status: 'PENDING' },
        })
        .then((res) => {
          this.suggestions = res.data
        })
    },
    removeItem(id) {
      this.suggestions = this.suggestions.filter((item) => item.id !== id)
    },
  },
}
</script>

<style lang="scss" scoped>
.suggestion-list {
  width: 100%;
  padding: 1rem;
}
</style>
