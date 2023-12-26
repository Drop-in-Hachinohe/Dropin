<script setup>
defineProps({
  menuList: {
    type: Array,
    required: true
  },
  bgColorClass: {
    type: String,
    required: false
  },
  textColorClass: {
    type: String,
    default: "text-white"
  },
  headerClass: {
    type: String,
    required: true
  },
})
</script>

<template>
  <nav :class="[bgColorClass, headerClass]">
    <a :href="item.link" v-for="item in menuList"
      :target="item.target ? '_blank' : '_self'"
      @click.native="$emit('close')"
      class="item pl-3"
    >
        <img :src="item.imageUrl" class="icon"/>
        <p :class="textColorClass" class="text-sm text-center">{{ item.name }}</p>
    </a>
  </nav>
</template>

