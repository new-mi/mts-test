<template>
  <div id="app">
    <div class="page">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main,
  .main {
    flex-grow: 1;
  }
}
</style>
