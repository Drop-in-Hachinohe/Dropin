
<script setup>
import moment from 'moment'
defineProps({
  newsList: {
    type: Array,
  },
  parentRoute: {
    type: String,
  }
});
function formatDate(date) {
  return moment(date).format("YYYY-MM-DD")
}
function eyeCatchImage(item) {
  return item && item.url ? item.url : '/images/common/NO_IMAGE.jpg';
}
</script>
<template>
  <ul class="flex flex-wrap">
    <router-link v-for="news in newsList" :key="news.id" :to="parentRoute == '' ? `news/${news.id}` : `/${parentRoute}/news/${news.id}`"
    class="w-1/2 lg:w-1/3 p-2">
      <img :src="eyeCatchImage(news.ogp)" class="aspect-square object-cover">
      <p class="pt-2">{{ news.title }}</p>
      <small class="text-gray-600">{{formatDate(news.publishedAt)}}公開</small>
    </router-link>
  </ul>
</template>
  