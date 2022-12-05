<template>
  <label class="switch">
    <input v-model="model" type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: Boolean,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $tertiary-hyper-light;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      bottom: -3px;
      border-radius: 50%;
      background-color: $secondary;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background-color: $primary;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $primary;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}
</style>
