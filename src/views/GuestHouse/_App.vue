<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

const headerMenuList = ref([
  {
    name: "ご予約・料金",
    link: "/guest_house/reserve",
    imageUrl: '/images/GH/icon/icon_GH_GN_reserve.png'
  },
  {
    name: "管理人",
    link: "/guest_house/owner",
    imageUrl: '/images/GH/icon/icon_GH_GN_owner.png'
  },
  {
    name: "アクセス",
    link: "/guest_house/access",
    imageUrl: '/images/GH/icon/icon_GH_GN_access.png'
  },
  {
    name: "お問合せ",
    link: "/guest_house/contact",
    imageUrl: '/images/GH/icon/icon_GH_GN_contact.png'
  },
]);

const footerMenuList = ref([
  {
    title: "ゲストハウスについて",
    itemList: [
      {
        name: "アクセス",
        link: "/guest_house/access",
      },
      {
        name: "お知らせ",
        link: "/guest_house/news",
      },
      {
        name: "お問合せ",
        link: "/guest_house/contact",
      },
      {
        name: "管理人",
        link: "/guest_house/owner",
      },
    ]
  },
  {
    title: "予約について",
    itemList: [
      {
        name: "料金",
        link: "/guest_house/reserve",
      },
      {
        name: "ご予約",
        link: "/guest_house/reserve#reserve",
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
    name: "x",
    link: "https://twitter.com/MinatoDropin",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/same_dropin",
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
    :bgColorClass="'bgDeepPurple'"
    :headerLogoImg="'/images/GH/header_logo.png'"
    :headerLogoLink="'/guest_house'"
  />
  <RouterView />
  <Footer
    :menuList="footerMenuList"
    :snsList="snsList"
    :bgColorClass="'bgDeepPurple'"
    :headerLogoImg="'/images/GH/Dropin_logo.png'"
    :headerLogoLink="'/guest_house'"
    >
  </Footer>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
