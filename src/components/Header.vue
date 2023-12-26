<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";
import HeaderMenu from "./HeaderMenu.vue";

const openMenu = ref(false);
const message = computed(() => {
  return openMenu.value ? "閉じる" : "メニュー";
});
const props = defineProps({
  menuList: {
    type: Array,
    required: true,
  },
  bgColorClass: {
    type: String,
    required: true,
  },
  textColorClass: {
    type: String,
    default: "text-white"
  },
  headerLogoImg: {
    type: String,
    required: true,
  },
  headerLogoLink: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="header shadow-2xl" :class="bgColorClass">
    <router-link :to="headerLogoLink" class="header_logo px-6">
      <img :src="headerLogoImg" />
    </router-link>
    <HeaderMenu 
      :menuList="menuList" 
      :headerClass="'header_nav'"
      :textColorClass="textColorClass" />

    <div class="toggle_btn text-sm mr-3" @click="openMenu = !openMenu">
      {{ message }}
    </div>
    <transition name="slide">
      <HeaderMenu
        v-show="openMenu"
        :menuList="menuList"
        :bgColorClass="bgColorClass"
        :textColorClass="textColorClass"
        :headerClass="'header_nav_sp'"
        @close="openMenu = false"
      />
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  @media (min-width: 640px) {
    height: 100px;
  }
  z-index: 50;
  &_logo {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 640px) {
      width: 150px;
    }
  }
}
:deep .header_nav {
  display: none;
  @media (min-width: 640px) {
    display: flex;
    justify-content: flex-end;
  }
  .icon {
    height: 60px;
  }
  .item {
    width: 120px;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.toggle_btn {
  display: grid;
  @media (min-width: 640px) {
    display: none;
  }
  place-items: center;
  border-radius: 5px;
  padding: 0 10px;
  background-color: white;
  height: 36px;
}
:deep .header_nav_sp {
  @media (min-width: 640px) {
    display: none;
  }
  position: absolute;
  top: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    border-top: dotted 1px white;
    display: flex;
    align-items: center;
    &:nth-child(2n) {
      border-left: dotted 1px white;
    }
  }
  .icon {
    height: 60px;
    padding: 5px;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
