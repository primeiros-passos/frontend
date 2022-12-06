<template>
  <div class="d-flex align-center item">
    <div class="info">
      <p>{{ name }}</p>
    </div>
    <div class="info">
      <p>{{ email }}</p>
    </div>
    <button class="action" @click.prevent="removeModerator">
      <img src="@/assets/img/cancel.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModerateManageContentModeratorItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
      required: true,
    },
    idCommunity: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    removeModerator() {
      const token = localStorage.getItem('token')
      this.$axios
        .delete(`/moderators/${this.id}/${this.idUser}/${this.idCommunity}`, {
          headers: { Authorization: token },
        })
        .then(() => {
          this.$emit('removeItem', this.id)
        })
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

.info {
  background-color: $tertiary-lighter;
  padding: 0.125rem 0.625rem;
  border-radius: 1.25rem;

  &:first-child {
    margin-right: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 600;
    color: $white;
    text-align: center;
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
