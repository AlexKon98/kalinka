<template>
  <div class="container">
    <section class="developers">
      <h1 class="developers__title">Список застройщиков</h1>

      <!-- <DevelopersList :devs="developers.value" /> -->
    </section>

    <section class="pagination">
      <!-- <PaginationList @step-changed="changeStep" :total="total" /> -->
    </section>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import Api from '@/api/api';
import DevelopersList from '~/components/MainPage/DevelopersList.vue';
import PaginationList from '~/components/MainPage/PaginationList.vue';

useHead({
  title: 'Список застройщиков',
  meta: [
    { name: 'description', content: 'Список застройщиков' }
  ],
});

const route = useRoute();
const developers = reactive({});
const total = ref(0);
let page, length;

const SSRreq = async () => {
  // data = await Api.SSRrequest();
  // developers.value = data[0].value;
  // total.value = Math.ceil(Number(data[1]) / 10);
}

if (!route.query.page) {
  page = 1;
} else {
  page = route.query.page;
}

const { data } = await useFetch(Api.API_BASE_URL + `/objects`, {
  onResponse(context) {
    console.log(context.response.headers)
    console.log(context.response.headers.get(['X - Total - Count']))
  }
});

console.log(length)

const changeStep = async () => {
  data = await Api.dataTwice(`/objects?_page=${String(route.query.page)}`);
  developers.value = data[0];
  total.value = Math.ceil(Number(data[1]) / 10);
};
</script>

<style scoped lang="scss">
.developers {
  margin-top: 30px;

  &__title {
    margin-bottom: 30px;
  }
}
</style>