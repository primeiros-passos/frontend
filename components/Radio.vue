<template>
  <label class="radio">
    <input
      class="checkbox"
      type="radio"
      :checked="isChecked"
      :value="option"
      @change="$emit('change', $event.target.value)"
    />
    <span class="btn" :class="{ checked: isChecked }">
      <img :src="icon" />
    </span>
  </label>
</template>

<script>
export default {
  name: 'RadioComponent',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    option: {
      type: [String, Boolean, Number],
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: '',
    },
  },
  computed: {
    isChecked() {
      return this.value === this.option
    },
  },
}
</script>

<style lang="scss" scoped>
.radio {
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  margin: 0 0.5rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .btn {
    background-color: $tertiary-lighter;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    transition-duration: 0.2s;
    transition-property: background-color;

    img {
      height: 1.25rem;
      width: 1.25rem;
    }

    &.checked {
      background-color: $primary;
    }
  }
}
</style>
