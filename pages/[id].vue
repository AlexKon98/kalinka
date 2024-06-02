<template>
  <div class="container">
    <NuxtLink class="link-to-main" to="/">На главную</NuxtLink>

    <section class="developer-info">
      <h1
        class="developer-info__title"
        v-if="developer?.value[0]?.title.ru"
        v-html="developer.value[0].title.ru"
      />

      <ul
        class="developer-info__types-list"
        v-if="developer?.value[0]?.type.length"
      >
        <li>Тип:</li>
        <li
          v-for="item in developer.value[0].type"
          :key="item"
        >
          <b>{{ developer.value[0].type[0] }}</b>
        </li>
      </ul>

      <div
        class="developer-info__price"
        v-if="developer?.value[0]?.price"
      >
        Цена: <b>{{ developer.value[0].price }}</b>
      </div>

      <div
        class="developer-info__description"
        v-if="developer?.value[0]?.description.ru"
        v-html="developer.value[0].description.ru"
      />
    </section>

    <SliderImages
      v-if="developer?.value[0]?.images"
      :images="developer.value[0].images"
    />
  </div>
</template>

<script setup>
import Api from '@/api/api';
import SliderImages from '@/components/DetailPage/SliderImages.vue';

const route = useRoute();

let { data } = await Api.SSRrequest('/objects?id=' + route.params.id);
const developer = reactive({ value: data.value });

useHead({
  title: developer?.value[0]?.title?.ru,
  meta: [
    { name: 'description', content: developer?.value[0]?.title?.ru }
  ],
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 30px;
}

.link-to-main {
  color: green;
}

.developer-info {
  margin-top: 30px;

  &__title,
  &__description,
  &__price {
    margin-bottom: 30px;
  }

  &__types-list {
    display: flex;
    gap: 0 5px;
    margin-bottom: 15px;

    li {
      &::after {
        content: ',';
      }

      &:last-child::after,
      &:first-child::after {
        content: none;
      }
    }
  }

  &__description {

    &:deep(p) {
      margin-bottom: 10px;
    }
  }

  // &__images {
  //   display: flex;
  //   flex-wrap: wrap;
  //   gap: 15px;
  //   margin-bottom: 30px;

  //   li {
  //     width: calc((100% / 3) - 15px);

  //     @media (max-width: 1365px) {
  //       width: calc((100% / 2) - 15px);
  //     }

  //     @media (max-width: 767px) {
  //       width: 100%;
  //     }

  //     img {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;

  //       @media (max-width: 767px) {
  //         height: auto;
  //       }
  //     }
  //   }
  // }
}
</style>