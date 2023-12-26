<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router" 
import Api from '@/api/api.js'
import NewsList from '@/components/NewsList.vue'
import RouteCheck from '@/util/routeCheck.js';

const news = ref([]);
const router= useRouter()
const currentRoute = RouteCheck.currentRoute(router.currentRoute._value.path)

Api.fetchNewsIndex(currentRoute).then((data) => {
  news.value = data.contents;
});
</script>
<template>
  <div class="section">
    <h2 class="text-center text-3xl font-bold py-16">お知らせ</h2>
    <NewsList :newsList="news" :parentRoute="currentRoute"/>
  </div>
</template>
