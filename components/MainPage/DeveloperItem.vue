<template>
  <li class="developer-item">
    <NuxtLink
      class="developer-item__link"
      :to="String(dev.id)"
    >
      {{ dev.title.ru }}
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  dev: {
    type: Object,
    required: true,
    default: () => {}
  }
});
</script>

<style scoped lang="scss">
.developer-item {
  display: flex;
  justify-content: flex-start;

  a {
    color: green;
  }
}
</style>