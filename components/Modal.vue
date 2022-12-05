<template>
  <Transition name="bounce" mode>
    <div v-if="open" class="modal-background">
      <div class="modal">
        <div class="top">
          <p>{{ title }}</p>
          <Button icon :on-click="closeModal" simple>
            <img :src="require('@/assets/img/close.png')" />
          </Button>
        </div>
        <div class="body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  watch: {
    open(value) {
      if (value) document.body.style.overflowY = 'hidden'
      else document.body.style.overflowY = 'auto'
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.75);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background-color: $white;
    border-radius: 2rem;
    max-width: 1200px;
    min-width: 50%;

    .top {
      background-color: $primary;
      padding: 2rem;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-family: 'Sora', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        color: $white;
      }
    }

    .body {
      padding: 2rem;
    }
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

@media only screen and (max-width: 1200px) {
  .modal-background {
    .modal {
      max-width: 95%;
    }
  }
}
</style>
