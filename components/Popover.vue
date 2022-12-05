<template>
  <div class="container">
    <button
      class="btn-toggle"
      :class="{ open, simple, small }"
      @click.prevent="toggle"
    >
      <img :src="icon" />
    </button>

    <Transition name="bounce" mode>
      <div v-if="open" class="popover-content">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'PopoverComponent',
  props: {
    icon: {
      type: String,
      required: true,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .btn-toggle {
    background-color: $white;
    border: 1px solid $tertiary-lighter;
    border-radius: 0.5rem;
    width: 2.625rem;
    height: 2.625rem;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.2s;

    &:hover {
      background-color: $tertiary-hyper-light;
    }

    &.open {
      background-color: $primary-light;
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 0.2rem;
    }

    &.small {
      width: 2rem;
      height: 2rem;

      img {
        width: 1rem;
        height: 1rem;
        margin-top: 0.2rem;
      }
    }

    &.simple {
      background-color: transparent;
      border: none;

      &:hover {
        background-color: none;
      }

      &.open {
        background-color: transparent;
      }
    }
  }

  .popover-content {
    margin-top: 0.2rem;
    background-color: $white;
    position: absolute;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 21.875rem;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
