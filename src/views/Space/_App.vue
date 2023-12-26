<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

const headerMenuList = ref([
  {
    name: "Drop inとは",
    link: "/space#about",
    imageUrl: '/images/main/icon/icon_DI_GN_about.png'
  },
  {
    name: "参加方法",
    link: "/space#join",
    imageUrl: '/images/main/icon/icon_DI_GN_join.png'
  },
  {
    name: "アクセス",
    link: "/space#access",
    imageUrl: '/images/main/icon/icon_DI_GN_access.png'
  },
  {
    name: "お問合せ",
    link: "/space/contact",
    imageUrl: '/images/main/icon/icon_DI_GN_contact.png'
  },
]);

const footerMenuList = ref([
  {
    title: "Drop inについて",
    itemList: [
      {
        name: "Drop inとは",
        link: "/space#about",
      },
      {
        name: "アクセス",
        link: "/space#access",
      },
      {
        name: "お知らせ",
        link: "/space/news",
      },
      {
        name: "お問合せ",
        link: "/space/contact",
      },
      {
        name: "管理人",
        link: "/space/owner",
      },
    ]
  },
  {
    title: "ご参加について",
    itemList: [
      {
        name: "参加方法",
        link: "/space#join",
      },
      {
        name: "営業日カレンダー",
        link: "/space#calendar",
      },
    ]
  },
  {
    title: "Drop inの他のこと",
    itemList: [
      {
        name: "鮫のゲストハウスDrop in",
        link: "/guest_house",
        target: true
      },
      {
        name: "黒かもめアンサンブル",
        link: "/kurokamome",
        target: true
      },
      {
        name: "CoderDojo八戸",
        link: "https://coderdojo-hachinohe.aomori.jp/",
        target: true
      },
      
    ]
  }
])

const snsList = ref([
  {
    name: "instagram",
    link: "https://www.instagram.com/dropin8nohe",
  },
  {
    name: "x",
    link: "https://twitter.com/Dropin88",
  },
  {
    name: "GitHub",
    link: "https://github.com/YuukiIshibashi/Dropin",
  },
])
</script>

<template>
  <Header
    :menuList="headerMenuList"
    :bgColorClass="'bgDeepGreen'"
    :headerLogoImg="'/images/main/Dropin_logo_w.png'"
    :headerLogoLink="'/space'"
  />
  <RouterView />
  <Footer
    :menuList="footerMenuList"
    :snsList="snsList"
    :bgColorClass="'bgDeepGreen'"
    :headerLogoImg="'/images/main/Dropin_logo_w.png'"
    :headerLogoLink="'/space'"
    >
    <a href="https://lin.ee/xqlJ0IB">
      <img class="h-12 ml-3" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" border="0">
    </a>
  </Footer>
</template>

<style scoped>
@media (min-width: 1024px) {
  
}
</style>
