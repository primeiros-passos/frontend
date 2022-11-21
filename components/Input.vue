<template>
  <div class="container">
    <input
      :class="{ 'right-padding': actionIcon !== null }"
      :type="type"
      :placeholder="placeholder"
      @keyup.enter="action"
    />
    <button v-if="actionIcon !== null" @click.prevent="action">
      <img :src="actionIcon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    actionIcon: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;

  input {
    padding: 0.625rem 1.875rem;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    border-radius: 7.5rem;
    border: none;
    width: 100%;
    outline-color: $secondary;
  }

  .right-padding {
    padding-right: 4rem;
  }

  button {
    position: absolute;
    width: 2rem;
    height: 2rem;
    margin: 0.4rem 0 0.4rem -3.5rem;
    padding: 0;
    border: none;
    background: none;
    border-radius: 100%;
    outline: $secondary;
    cursor: pointer;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
