<template>
  <div class="terms">
    <div class="top-bar" :class="{ open }">
      <p>Termos e condições</p>
      <Button icon :on-click="() => (open = !open)">
        <img
          :src="
            !open
              ? require('@/assets/img/up-arrow.png')
              : require('@/assets/img/close.png')
          "
        />
      </Button>
    </div>
    <div v-if="open" class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit viverra
        massa laoreet ullamcorper tristique. Ac fermentum consectetur id et eu.
        Amet mauris, arcu sit adipiscing leo ornare. Scelerisque sit convallis
        sit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Velit viverra massa laoreet ullamcorper tristique. Ac fermentum
        consectetur id et eu. Amet mauris, arcu sit adipiscing leo ornare.
        Scelerisque sit convallis sit facilisis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Velit viverra massa laoreet ullamcorper
        tristique. Ac fermentum consectetur id et eu. Amet mauris, arcu sit
        adipiscing leo ornare. Scelerisque sit convallis sit facilisis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupTerms',
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.terms {
  border: 1px solid $primary;
  border-radius: 1.125rem;
  padding: 0.625rem;
  margin: 2rem 0 1rem;

  p {
    color: $primary;
  }

  .top-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1.5rem;
      height: 1.5rem;
      rotate: 180deg;
      transition-duration: 0.2s;
      transition-property: rotate;
    }

    button {
      padding: 0;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
    }

    &.open {
      img {
        rotate: 0deg;
      }
    }
  }
}
</style>
