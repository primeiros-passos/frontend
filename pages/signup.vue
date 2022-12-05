<template>
  <div class="d-flex align-stretch justify-between">
    <div class="left">
      <SignupMainContent />
    </div>
    <div class="right">
      <LoginBanner />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
}
</script>

<style lang="scss" scoped>
.right {
  background-image: url('assets/img/banner-login.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  flex: 0.5;
  display: flex;
  justify-content: flex-start;
}

.left {
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
}

@media only screen and (max-width: 800px) {
  .right {
    display: none;
  }

  .left {
    flex: 1;

    ::v-deep .main-content {
      max-width: 100%;
    }
  }
}
</style>
