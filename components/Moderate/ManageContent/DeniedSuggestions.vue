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
      no-actions
    />
    <p v-if="suggestions.length < 1">Nenhuma sugestão rejeitada...</p>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentDeniedSuggestions',
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
          params: { status: 'DENIED' },
        })
        .then((res) => {
          this.suggestions = res.data
        })
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
