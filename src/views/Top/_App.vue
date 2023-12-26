<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

const headerMenuList = ref([
  {
    name: "中の人",
    link: "/owner",
    imageUrl: '/images/common/header/icon_owner.png'
  },
  {
    name: "アクセス",
    link: "/#access",
    imageUrl: '/images/common/header/icon_access.png'
  },
  {
    name: "お知らせ",
    link: "/news",
    imageUrl: '/images/common/header/icon_news.png'
  },
  {
    name: "お問合せ",
    link: "/contact",
    imageUrl: '/images/common/header/icon_contact.png'
  },
]);

const footerMenuList = ref([
  {
    title: "Drop inのこと",
    itemList: [
      {
        name: "アクセス",
        link: "/#access",
      },
      {
        name: "お知らせ",
        link: "/news",
      },
      {
        name: "お問合せ",
        link: "/contact",
      },
      {
        name: "中の人",
        link: "/owner",
      },
    ]
  },
  {
    title: "他のこと",
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
    link: "https://twitter.com/bassy3600",
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
    :bgColorClass="'bgBaseNavy'"
    :headerLogoImg="'/images/top/base_logo.png'"
    :headerLogoLink="'/'"
  />
  <RouterView />
  <Footer
    :menuList="footerMenuList"
    :snsList="snsList"
    :bgColorClass="'bgBaseNavy'"
    :headerLogoImg="'/images/top/base_logo.png'"
    :headerLogoLink="'/'"
    >
  </Footer>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
