<template>
  <button
    :class="{
      primary,
      secondary,
      white,
      icon,
    }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  padding: 0.625rem 1.25rem;
  border-radius: 1.125rem;
  border: none;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.2s;
  background-color: transparent;

  &.icon {
    padding: 0.625rem;
    height: 3.75rem;
    width: 3.75rem;
  }

  &.primary {
    color: $white;
    background-color: $primary;

    &:hover {
      background-color: $primary-dark;
    }
  }

  &.secondary {
    color: $white;
    background-color: $secondary;

    &:hover {
      background-color: $secondary-dark;
    }
  }

  &.white {
    color: $black;
    background-color: $white;

    &:hover {
      background-color: $tertiary-hyper-light;
    }
  }
}
</style>
