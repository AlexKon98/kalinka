<template>
  <ul class="developers-list">
    <DeveloperItem
      class="developers-list__item"
      v-for="dev in devs"
      :key="dev.id"
      :dev="dev"
    />
  </ul>
</template>

<script setup>
import DeveloperItem from './DeveloperItem.vue';

const props = defineProps({
  devs: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped lang="scss">
.developers-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 30px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    gap: 15px;
  }

  &__item {
    width: calc(50% - 15px);

    @media (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>