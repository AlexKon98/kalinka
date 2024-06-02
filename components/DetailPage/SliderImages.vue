<template>
  <section class="developer-info__images">
    <div class="developer-info__controlls" v-if="images.length > 3">
      <div class="swiper-pagination developer-info__pagination"></div>
      <div class="developer-info__arrows">
        <button class="swiper-button-prev developer-info__prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.4 4.80005L8.40002 11.8L15.4 18.8" stroke="#218F46" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <button class="swiper-button-next developer-info__next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.40002 19L15.4 12L8.40002 5" stroke="#218F46" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <Swiper
      class="developer-info__swiper"
      :slides-per-view="3"
      :loop="false"
      :space-between="10"
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        el: '.swiper-pagination',
        type: 'progressbar',
      }"
    >
      <SwiperSlide class="developer-info__slide" v-for="img in images" :key="img" :modules="modules">
        <img :src="img" alt="">
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

const modules = [Pagination, Navigation];
</script>

<style lang="scss" scoped>
.developer-info {
  &__images {
    margin-bottom: 30px;
  }

  &__slide {
    img {
      max-width: 100%;
    }
  }

  &__controlls {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__pagination {
    width: 100%;
    max-width: 997px;
    position: relative;
    height: 3px;

    &:deep(.swiper-pagination-progressbar-fill) {
      background-color: green;
    }
  }

  &__prev,
  &__next {
    position: static;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEF0F4;
    transition: background-color .4s linear;
    margin-top: 0;

    &:hover {
      background-color: green;

      & path {
        stroke: #fff;
      }
    }

    &::after {
      content: none;
    }

    & svg {
      width: 24px;
      height: 24px;

      path {
        transition: stroke .4s linear;
      }
    }

    &.swiper-button-disabled {
      opacity: .5;
    }
  }

  &__arrows {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
}
</style>
