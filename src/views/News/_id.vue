<script setup>
import { ref } from "vue";
import Api from "../../api/api.js";
import "../../assets/css/github_md.css";

const props = defineProps({
  id: Number,
});
const news = ref([]);
Api.fetchNews(props.id).then((data) => {
  news.value = data;
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  ogDescription.setAttribute("content", news.value.title);
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogpUrl = news.value.ogp.url;
  if (news.value.ogp.url) {
    ogImage.setAttribute("content", ogpUrl);
  }
});
</script>
<template>
  <section class="section markdown-body">
    <h1 class="text-center text-xl font-bold py-16">{{ news.title }}</h1>
    <div v-html="news.content"></div>
  </section>
</template>
