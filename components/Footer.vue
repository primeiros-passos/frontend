<template>
  <footer class="w-100 d-flex align-center justify-center">
    <p>© Primeiros Passos - 2023. Todos direitos reservados</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
footer {
  background-color: $primary-dark;
  padding: 3rem 1rem;
  
  p {
    color: $white;
    font-size: 0.75rem;
  }
}
</style>
