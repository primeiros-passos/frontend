<template>
  <div class="moderator-list">
    <ModerateManageContentModeratorItem
      v-for="moderator in moderators"
      :id="moderator.id"
      :key="moderator.id"
      :id-user="moderator.id_user"
      :id-community="moderator.id_community"
      :name="moderator.user.name"
      :email="moderator.user.email"
      @removeItem="removeItem"
    />
    <p v-if="moderators.length < 1">Nenhum moderador encontrado...</p>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentModerators',
  data() {
    return {
      moderators: [],
    }
  },
  created() {
    this.getModeratorsByCommunity()
  },
  methods: {
    getModeratorsByCommunity() {
      this.$axios
        .get(`/communities/${this.$route.params.id}/moderators`, {
          params: { status: 'PENDING' },
        })
        .then((res) => {
          this.moderators = res.data
        })
    },
    removeItem(id) {
      this.moderators = this.moderators.filter((item) => item.id !== id)
    },
  },
}
</script>

<style lang="scss" scoped>
.moderator-list {
  width: 100%;
  padding: 1rem;
}
</style>
