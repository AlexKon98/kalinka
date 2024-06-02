<template>
  <div class="app">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>