<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

const headerMenuList = ref([
  {
    name: "中の人",
    link: "/kurokamome/owner",
    imageUrl: '/images/common/header/icon_owner.png'
  },
  {
    name: "過去動画",
    link: "https://www.youtube.com/@%E9%BB%92%E3%81%8B%E3%82%82%E3%82%81%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%B3%E3%83%96%E3%83%AB",
    imageUrl: '/images/common/header/icon_video.png',
    target: true
  },
  {
    name: "お知らせ",
    link: "/kurokamome/news",
    imageUrl: '/images/common/header/icon_news.png'
  },
  {
    name: "お問合せ",
    link: "/kurokamome/contact",
    imageUrl: '/images/common/header/icon_contact.png'
  },
]);

const footerMenuList = ref([
  {
    title: "黒かもめアンサンブルのこと",
    itemList: [
      {
        name: "過去動画",
        link: "https://www.youtube.com/@%E9%BB%92%E3%81%8B%E3%82%82%E3%82%81%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%B3%E3%83%96%E3%83%AB",
        target: true
      },
      {
        name: "お知らせ",
        link: "/kurokamome/news",
      },
      {
        name: "お問合せ",
        link: "/kurokamome/contact",
      },
      {
        name: "中の人",
        link: "/kurokamome/owner",
      },
    ]
  },
  {
    title: "Drop inの他のこと",
    itemList: [
      {
        name: "不登校はフリーランス",
        link: "/space",
        target: true
      },
      {
        name: "鮫のゲストハウスDrop in",
        link: "/guest_house",
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
    name: "x",
    link: "https://twitter.com/Kurokamome_ens",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/kurokamome_ens/",
  },
])
</script>

<template>
  <Header
    :menuList="headerMenuList"
    :bgColorClass="'bgYellow'"
    :textColorClass="'text-gray-800'"
    :headerLogoImg="'/images/kurokamome/header_logo.jpg'"
    :headerLogoLink="'/kurokamome'"
  />
  <RouterView />
  <Footer
    :menuList="footerMenuList"
    :snsList="snsList"
    :bgColorClass="'bgYellow'"
    :textColorClass="'text-gray-800'"
    :headerLogoImg="'/images/kurokamome/header_logo.jpg'"
    :headerLogoLink="'/kurokamome'"
    >
  </Footer>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
