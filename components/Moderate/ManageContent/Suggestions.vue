<template>
  <div class="suggestion-list">
    <ModerateManageContentSuggestionItem
      id="aaaaa-aaaaa-aaaaa-aaaaa"
      link="http://link.com"
      description="Link do conteúdo"
      type="VIDEO"
      :price="Number(0)"
      level="Intermediário"
    />
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentSuggestions',
}
</script>

<style lang="scss" scoped>
.suggestion-list {
  width: 100%;
  padding: 1rem;
}
</style>
