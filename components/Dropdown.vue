<template>
  <div class="container">
    <select
      :value="value"
      :class="{ clearable }"
      @input="updateValue($event.target.value)"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <button v-if="clearable" @click.prevent="updateValue('')">
      <img src="@/assets/img/close.png" alt="Limpar dropdown" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;

  select {
    padding: 0.625rem 3.5rem 0.625rem 1rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 7.5rem;
    border: 1px solid $tertiary-light;
    background-color: $white;
    width: 100%;
    outline-color: $secondary;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &.clearable {
      padding: 0.625rem 5rem 0.625rem 1rem;
    }

    &::-ms-expand {
      display: none;
    }
  }

  &:after {
    content: '>';
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    color: $secondary;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 1.625rem;
    position: absolute;
    pointer-events: none;
  }

  button {
    position: absolute;
    margin-left: -5rem;
    margin-top: 0.9rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
