
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
</script>
<template>
  <router-link v-for="news in newsList" :key="news.id" :to="`/${parentRoute}/news/${news.id}`"
    class="border-b-4 flex py-4">
    <p class="w-40">{{formatDate(news.publishedAt)}}</p>
    <p>{{ news.title }}</p>
  </router-link>
</template>
  