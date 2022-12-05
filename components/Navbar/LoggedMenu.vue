<template>
  <div class="logged-menu">
    <p>{{ user.name }}</p>
    <Popover :icon="require('@/assets/img/white-down-arrow.png')" simple small>
      <Button :on-click="() => {}" white>
        <div class="btn-content">
          <img :src="require('@/assets/img/user.png')" />
          Perfil
        </div>
      </Button>
      <Button :on-click="logout" white>
        <div class="btn-content">
          <img :src="require('@/assets/img/exit.png')" />
          Sair
        </div>
      </Button>
    </Popover>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoggedMenu',
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['logout'])
  },
}
</script>

<style lang="scss" scoped>
.logged-menu {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    color: $white;
  }

  ::v-deep .popover-content {
    padding: 0;
    right: 0;
  }

  .btn-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
