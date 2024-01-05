
<script setup>
import { ref } from 'vue';
import '@/assets/css/modal.scss'

const props = defineProps({
  content: {
    type: Object,
  },
});
let windowWidth = ref('');
let windowHeight = ref('');

windowWidth.value = window.innerWidth;
windowHeight.value = window.innerHeight;

function setWidth() {
  return (props.content.size == "half") && (windowWidth.value > windowHeight.value) ? "img_height" : "img_width"
}
</script>

<template>
  <div class="modal_overlay" @click="$emit('close')">
    <div :class="setWidth()">
      <img :src="content.imageUrl" >
      <p class="text-white text-center text-sm">{{content.description}}</p>
    </div>
  </div>
</template>

