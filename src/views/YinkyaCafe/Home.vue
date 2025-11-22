<script setup>
import Access from '@/components/Access.vue'
import Footer from '@/components/Footer.vue'
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
const settings = {
  itemsToShow: 1,
  snapAlign: "start",
};
const breakpoints = {
  // 700px and up
  640: {
    itemsToShow: 1.25,
    snapAlign: "start",
  },
  // 1024 and up
  768: {
    itemsToShow: 3,
    snapAlign: "center",
  },
};

const footerMenuList = [
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
]

const snsList = [
  {
    name: "x",
    link: "https://twitter.com/bassy3600",
  },
  {
    name: "GitHub",
    link: "https://github.com/YuukiIshibashi/Dropin",
  },
]

const roomImages = [
  {
    imageUrl: "/images/yinkya/roomImage_01.jpg",
    comment: "電源・Wifiご自由にどうぞ"
  },
  {
    imageUrl: "/images/yinkya/roomImage_02.jpg",
    comment: "飲食持ち込みOK"
  },
  {
    imageUrl: "/images/yinkya/roomImage_03.jpg",
    comment: "飲み物も自分も淹れるんだよ(200円〜)"
  },
  {
    imageUrl: "/images/yinkya/roomImage_04.jpg",
    comment: "お子・赤さんも大歓迎"
  },
  {
    imageUrl: "/images/yinkya/roomImage_05.jpg",
    comment: "ごろごろしてって"
  }
];
</script>

<template>
  <main>
    <div class="kv">
      <div>
        <p class="text-white text-base font-pixel text-center">あ、陽キャさんお断りなんです。ゴメンナサイ。</p>
        <h1 class="text-white text-4xl font-pixel text-center mt-16">陰キャカフェ</h1>
      </div>
    </div>
    <section class="section">
      <h2 class="text-2xl text-center font-bold text-red-700">
        申し訳ございません<br>
        陰キャカフェは現在冬季休業中です<br>
        2026年2月下旬再開予定です
      </h2>
    </section>
    <section class="section">
      <h2 class="text-center font-pixel text-stone-700 text-2xl font-bold">
        木曜日は陰キャであつまろ
      </h2>
      <p class="text-base mt-10">
        陰キャカフェとは、その名の通り陰キャが集うカフェである。陰キャを自覚する者なら誰でも大歓迎である。<br>
        平日木曜日の日中という、「そんな時間にカフェ行けるんだへー」という時間帯に陰キャが集う。ニート、フリーランス、主婦、学校苦手勢、大歓迎なのである。
        <small>※「そんな時間にカフェ行けるんだへー」を嫌味で言ってくるやつは羨ましいだけなので放っておきましょう</small><br><br>
        集って何をするかというと、飲み物片手に陰キャ話に花を咲かせてもよし、黙々作業するもよし。好きにすればよいのである。<br>
        ただ、ここに集うは陰キャのみ。眩しすぎる陽キャと対面することはないのである。
      </p>
    </section>
    <div class="bg-stone-200">
      <section class="section mt-20">
        <h2 class="text-center font-pixel text-stone-700 text-2xl font-bold">
          カフェという名の隠れ家
        </h2>
        <div class="mt-20">
          <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in roomImages" :key="index">
            <div class="carousel__item">
              <p class="mb-10 text-stone-700">{{ item.comment }}</p>
              <img :src="item.imageUrl" class="aspect-square" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
        </div>
      </section>
    </div>
    <section class="section event_date">
      <h2 class="text-center text-white text-2xl font-bold font-pixel">
        いつやってるの
      </h2>
      <p class="text-center text-white text-2xl mt-10">
        毎週木曜日 11:30〜15:00
      </p>
      <p class="text-center text-white mt-10">
        諸事情により開催できない時もありますので、念の為<a href="#calender" class="underline">こちらのカレンダー</a>をご確認の上お越しください m(_ _)m
      </p>
    </section>
    <section class="section">
      <h2 class="text-center text-stone-700 text-2xl font-bold font-pixel">
        主催のDrop in について
      </h2>
      <p class="text-base mt-10">
        無邪気な心で将来の夢に向かって頑張る陽キャが眩しい。<br>
        清く正しく明るい陽キャと自分をどうしても比べてしまう。そして落ち込んでしまう。 陽キャになろうと頑張ってみたけどどうしても疲れるし無理だった。<br>
        そんな人間が、陰キャを認めて陰キャを思いっきり楽しむために、楽しそうだと思ったことをやる活動です。
      </p>
      <div class="flex justify-center mt-10">
        <a
          href="/"
          class="btn w-fit bg-slate-600 text-white px-6 py-3 text-sm text-center"
          >
            詳しくはこちら
            <img src="/images/top/base_logo.png" class="w-32 mt-2"/>
          </a
        >
      </div>
    </section>
    <div class="bg-stone-200" id="access">
      <section class="section pt-20">
        <h2 class="text-stone-700 text-2xl text-center font-bold font-pixel">どこでやってるの</h2>
        <Access />
        <!-- <h3 class="text-stone-700 text-xl text-center font-bold mt-16 font-pixel">オンラインもあるよ</h3> -->
        <!-- <div class="md:flex justify-center mt-8">
          <img src="/images/yinkya/yinkya_gather.png" class="aspect-video w-full md:w-6/12 px-1"/>
          <div class="text-base p-6">
            直接くるのが難しい！という場合はパソコンやスマホからアクセスできる空間も用意しています。
            Gatherというアプリケーションを使ったバーチャル空間です。
            <div class="text-red-600 font-bold mt-6">
              オンライン会場は、Gatherの有料化に伴って2025年9月11日をもって一旦終了いたします。
              今後もオンラインでも気軽に立ち寄れる場を作っていくため、何かしら考えたいと思いますが、、、
              現時点で何もアイデアがないので、何かあれば教えてください！
            </div>
            <div class="mt-6">
              <a
              href="https://app.gather.town/app/yLSLLa1pEscMrc1m/dropin"
              target="_blank"
              class="btn w-fit bg-stone-600 text-white px-6 py-3 text-sm"
              >ここから参加できるよ</a>
            </div>
          </div>
        </div> -->
      </section>
    </div>
    <section class="section" id="calender">
      <h2 class="text-center text-stone-700 text-2xl font-bold font-pixel">
        やってる日
      </h2>
      <iframe
        class="w-full mt-6"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FTokyo&bgcolor=%23A79B8E&showTz=0&showPrint=0&showTitle=0&showTabs=0&src=Y2YzY2M1ZTBjZTA0MWNjMWZjOTM2NjQ0OGRiYWUxZGNjODA2ZmNjNDY1NGM1OTlhODU3ZTIyOTBkODY2YjBmYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF"
        style="border-width: 0"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </section>
    <Footer
      :menuList="footerMenuList"
      :snsList="snsList"
      :bgColorClass="'bg-stone-700'"
      :headerLogoImg="'/images/top/base_logo.png'"
      :headerLogoLink="'/'"
      />
  </main>
</template>

<style lang="scss" scoped>
.kv {
  background-image: url("/images/yinkya/yinkya_kv.jpg");
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.coffee {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  &_img {
    max-width: 300px;
    margin-bottom: 20px;
    @media (min-width: 640px) {
      flex-direction: row;
      margin-bottom: 0px;
    }
  }
}
.event_date {
  background-image: url("/images/yinkya/bean.jpg");
  background-size: cover;
  background-position: center;
}
</style>
