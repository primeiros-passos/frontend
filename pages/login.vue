<template>
  <div class="d-flex align-stretch justify-between">
    <div class="left">
      <LoginBanner />
    </div>
    <div class="right">
      <LoginMainContent />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style lang="scss" scoped>
.left {
  background-image: url('assets/img/banner-login.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
}

.right {
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
}

@media only screen and (max-width: 800px) {
  .left {
    display: none;
  }

  .right {
    flex: 1;

    ::v-deep .main-content {
      max-width: 100%;
    }
  }
}
</style>
