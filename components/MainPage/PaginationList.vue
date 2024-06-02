<template>
  <ul class="pagination-list">
    <li
      v-for="i in props.total"
      :key="i"
      :class="{'active': route.query.page === String(i) || (!route.query.page && i === 1)}"
    >
      <NuxtLink :to="'/?page=' + i" @click="changeStep(i)">{{ i }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

const emit = defineEmits({
  stepChanged(val) {
    return val;
  }
});

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
});

const changeStep = (val) => {
  emit('stepChanged', val);
};
</script>

<style scoped lang="scss">
.pagination-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;

  li {
    border: 1px solid green;
    border-radius: 4px;

    a {
      display: block;
      padding: 5px 10px;
      height: 100%;
      color: green;
    }

    &.active {
      opacity: .3;
      pointer-events: none;
    }
  }
}
</style>