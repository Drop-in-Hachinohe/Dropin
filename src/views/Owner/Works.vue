<script setup>
import { ref } from 'vue'
import Api from '@/api/api.js'
import WorkItem from '@/components/WorkItem.vue'
import '@/assets/css/modal.scss'
const openImage = ref({});
const isOpen = ref(false);
const works = ref([]);

Api.fetchWorks().then((data) => {
  works.value = data.contents;
});

function imageClass(isPortrait) {
  return isPortrait ? "md:w-1/2 lg:w-1/3" : "lg:w-2/3"
}

function open(item) {
  openImage.value = item;
  isOpen.value = true;  
}

function close() {
  openImage.value = {};
  isOpen.value = false;    
}
</script>

<template>
  <section class="section">
    <h2 class="text-center text-slate-700 text-3xl font-bold py-16">制作物紹介
      <p class="text-center text-slate-700 text-sm mt-2">大昔のいけてないのも載せていますm(_ _)m</p>
    </h2>
    
    <div class="text-slate-800">
      ご紹介にてチラシ制作もたまにやりますが、基本的に本業が会社員なのでしょっちゅうは受けられず、、。
      基本的には自分が企画するコンサートや所属する楽団のコンサートのチラシを自分で作るのがメインです。<br>
      学生さんと一緒にデザインしていけたらなと思っています。
    </div>
    <ul class="flex flex-wrap gap-y-2 mt-3">
      <li v-for="work in works" :key="work.id" class="w-full p-2" :class="imageClass(work.isPortrait)" @click="open(work)">
      <img :src="work.image.url" class="w-full shadow-md hover:shadow-2xl">
      <small class="text-gray-600">{{ work.title }}</small>
    </li>
    </ul>
  </section>
  <Transition name="fade">
    <WorkItem v-if="isOpen" :content="openImage" @close="close" />
  </Transition>
</template>
