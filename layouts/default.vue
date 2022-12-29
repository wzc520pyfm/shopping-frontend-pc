<script setup>

</script>

<template>
  <div>
    <Header />
    <div class="main-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang='less' scoped>
.layouts {
  height: 100vh;
}

.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  min-height: 68vh;
}
</style>