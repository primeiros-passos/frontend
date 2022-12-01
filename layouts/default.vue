<template>
  <div>
    <Navbar />
    <Nuxt class="main-content" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 207px);
}
</style>
