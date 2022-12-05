<template>
  <textarea
    rows="5"
    :placeholder="placeholder"
    @input="updateValue($event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: 'TextareaComponent',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: String,
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
textarea {
  width: 100%;
  position: relative;
  resize: none;
  padding: 0.625rem 1.875rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border-radius: 1.25rem;
  border: 1px solid $tertiary-light;
  background-color: $white;
  outline-color: $secondary;
}
</style>
