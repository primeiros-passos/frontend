<template>
  <nav class="w-100">
    <div
      v-if="windowWidth >= 540"
      class="content d-flex justify-between align-center"
    >
      <div class="d-flex justify-center align-center">
        <NuxtLink to="/">Início</NuxtLink>
        <NuxtLink to="/communities">Comunidades</NuxtLink>
      </div>
      <div v-if="!hasUser" class="d-flex justify-center align-center">
        <NuxtLink to="/login">Fazer Login</NuxtLink>
        <Button secondary :on-click="() => $router.push('/signup')">
          Cadastrar
        </Button>
      </div>
      <NavbarLoggedMenu v-if="hasUser" />
    </div>

    <div
      v-else
      class="content d-flex flex-column justify-center align-end"
      :class="{ 'menu-open': menu }"
    >
      <Button icon :on-click="toggleMenu">
        <img
          class="menu-toggle"
          :src="
            !menu
              ? require('@/assets/img/menu.png')
              : require('@/assets/img/up-arrow.png')
          "
          alt="Menu"
        />
      </Button>
      <Transition name="slide-fade">
        <div v-if="menu" class="d-flex flex-column align-end">
          <NuxtLink to="/" class="mobile">Início</NuxtLink>
          <NuxtLink to="/communities" class="mobile">Comunidades</NuxtLink>
          <NuxtLink v-if="!hasUser" to="/login" class="mobile">
            Fazer Login
          </NuxtLink>
          <Button
            v-if="!hasUser"
            secondary
            :on-click="() => $router.push('/signup')"
          >
            Cadastrar
          </Button>
          <NavbarLoggedMenu v-if="hasUser" />
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavbarComponent',
  data() {
    return {
      windowWidth: 0,
      menu: false,
    }
  },
  computed: {
    ...mapGetters(['user', 'hasUser']),
  },
  mounted() {
    this.getUserFromToken()
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions(['getUserFromToken']),
    onResize() {
      this.windowWidth = window.innerWidth
    },
    toggleMenu() {
      this.menu = !this.menu
    },
  },
}
</script>

<style lang="scss">
nav {
  background-color: $primary-dark;
  padding: 1.5rem 0;

  p,
  a {
    color: $white;
  }

  .content {
    padding: 0 1rem;
  }

  a {
    padding: 0.625rem 1.25rem;
    border-radius: 1.125rem;
    text-decoration: none;
    transition-property: background-color;
    transition-duration: 0.2s;
    outline-color: $secondary;

    &:hover {
      background-color: $primary-dark;
    }

    &:first-child {
      margin-right: 0.625rem;
    }

    &.mobile {
      margin-right: 0 !important;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 2rem;
    height: 2rem;
    transition-duration: 0.2s;
    transition-property: rotate;
  }

  .menu-open {
    img.menu-toggle {
      rotate: 180deg;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
