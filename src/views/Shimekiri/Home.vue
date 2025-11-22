<script setup>
import Access from '@/components/Access.vue'
import Footer from '@/components/Footer.vue'
import LINE from '@/components/Line.vue'

import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

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

const guestRoomImages = [
  {
    imageUrl: "/images/GH/guestRoom_04.jpg",
  },
  {
    imageUrl: "/images/GH/guestRoom_02.jpg",
  },
  {
    imageUrl: "/images/GH/guestRoom_01.jpg",
  },
];
const coworkImages = [
  {
    imageUrl: "/images/shimekiri/cowork_01.jpg",
  },
  {
    imageUrl: "/images/shimekiri/cowork_02.jpg",
  },
  {
    imageUrl: "/images/shimekiri/cowork_03.jpg",
  },
];
const facilities = [
  {
    imageUrl: "/images/shimekiri/facility_01.jpg",
    comment: "疲れたら休憩してね"
  },
  {
    imageUrl: "/images/shimekiri/facility_02.jpg",
    comment: "お水飲み放題！"
  },
  {
    imageUrl: "/images/yinkya/roomImage_02.jpg",
    comment: "コーヒー・紅茶はセルフでお願いしてます(200円〜)"
  },
  {
    imageUrl: "/images/yinkya/roomImage_03.jpg",
    comment: "コーヒー・紅茶はセルフでお願いしてます(200円〜)"
  }
];
</script>

<template>
  <div class="banner">
    <a href="https://www.dropin8.jp/news/roljf9b_kg" target="_blank" class="underline text-white">
      【7月末まで期間限定】ご利用の方にコンサートチケットプレゼント
    </a>
  </div>
  <main>
    <div class="kv">
      <div class="kv_inner">
        <h1 class="text-5xl font-nicoca">シメキリカフェ</h1>
        <p class="text-base font-nicoca mt-8">
          やらねばならないことがある。しかも締切は目前・・！<br>
          なのに、そんな時に限って部屋が汚いことが気になってしまうのはなぜ。  
        </p>
      </div>
    </div>
    <section class="section">
      <h2 class="text-2xl text-center font-bold text-red-700">
        申し訳ございません<br>
        シメキリカフェは現在冬季休業中です<br>
        2026年4月以降に再開予定です
      </h2>
    </section>
    <section class="section">
      <p class="text-base">
        シメキリに追われるアナタ。シメキリカフェで一気に仕上げちゃいませんか?<br>
        <br>
        シメキリカフェは、タスク完了を目標に、タスクに集中するためのカフェです。<br>
        エンジニアさん、デザイナーさん、ライターさん、そのほか締切が近いタスクを抱えた全ての皆さんのための場所です。<br>
        常に仕事に追われているオーナー（リモートで働くUXエンジニア）と一緒に、緊張感を持ってタスクに取り組みましょう!!
      </p>
      <p class="text-base font-bold mt-4">注意!カフェですが飲み物を淹れてくれる人はいませんm(_ _)mセルフです</p>
    </section>
    <div class="bg-gray-100">
      <section class="section">
        <h2 class="text-center font-nicoca text-3xl font-bold underline decoration-2 underline-offset-8">
          営業日・営業時間
        </h2>
        <p class="text-center font-nicoca text-2xl mt-10">
          月・火・水
        </p>
        <p class="text-center font-nicoca text-2xl mt-2">
          9:00-16:00
        </p>
        <p class="text-center mt-10">
          諸事情により開催できない時もありますので、<a href="#calender" class="underline">こちらのカレンダー</a>をご確認の上お越しください m(_ _)m
        </p>
      </section>
    </div>
    <section class="section">
      <h2 class="text-center text-3xl font-nicoca underline decoration-2 underline-offset-8">
        利用料金
      </h2>
      <p class="text-center text-2xl mt-10 font-nicoca">
        1,000円(税込)
      </p>
      <p class="text-center text-base mt-10">
        飲み物は含まれません<br>
        個室の場合は2,000円(税込)
      </p>
      <p class="text-center text-2xl mt-10 font-nicoca">
        営業時間内は出入り自由
      </p>
    </section>
    <div class="bg-gray-100">
      <section class="section">
        <h2 class="text-center text-3xl font-bold font-nicoca underline decoration-2 underline-offset-8">
          作業スペース
        </h2>
        <div class="md:flex justify-around mt-10 gap-10">
          <div class="lg:w-1/3 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 class="text-center text-xl font-bold font-nicoca">２階カフェスペース</h3>
              <p class="text-center text-l font-bold font-nicoca">定員3名</p>
              <p class="text-sm mt-4">
                同じスペースにお席が4つありますので、その中の1つをご利用いただけます（1つはオーナーが使って仕事しています）
              </p>
            </div>
            <div>
              <Carousel :settings="settings">
                <Slide v-for="(item, index) in coworkImages" :key="index">
                  <div class="carousel__item">
                    <img :src="item.imageUrl" class="aspect-square" />
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col justify-between mt-16 md:mt-0">
            <div>
              <h3 class="text-center text-xl font-bold font-nicoca">1階ゲストルーム(個室)</h3>
              <p class="text-center text-l font-bold font-nicoca">定員1名</p>
              <p class="text-sm mt-4">
                1階ゲストルームを貸し切りでご利用いただけます。こちらは料金が2000円となります
              </p>
            </div>
            <div>
              <Carousel :settings="settings">
                <Slide v-for="(item, index) in guestRoomImages" :key="index">
                  <div class="carousel__item">
                    <img :src="item.imageUrl" class="aspect-square" />
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                  <Pagination />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section pt-20">
      <h2 class=" text-3xl text-center font-bold font-nicoca underline decoration-2 underline-offset-8">利用方法</h2>
      <ul class="mt-16">
        <li>
          <h3 class=" text-lg font-bold">1. ご利用の1時間前までに公式LINEからご連絡ください！</h3>
          <p class="text-sm bg-gray-100 p-4 mt-2">
            「シメキリカフェ○時から行きます！」みたいな感じでOKです!<br>
            この時点で席が埋まっている場合はごめんなさい
          </p>
        </li>
        <li class="mt-6">
          <h3 class=" text-lg font-bold">2. 入室時に利用料金を頂戴いたします。</h3>
          <p class="text-sm bg-gray-100 p-4 mt-2">
            何のタスクをやるのかよかったら教えてください!<br>
            一緒にがんばりましょー！
          </p>
        </li>
        <li class="mt-6">
          <h3 class=" text-lg font-bold">3. そのあとは集中してください!</h3>
          <p class="text-sm bg-gray-100 p-4 mt-2">
            出入り自由。16:00になったら強制終了！終わったら勝手に帰って大丈夫!
          </p>
        </li>
      </ul>
      <div class="p-8">
        <LINE />
      </div>
    </section>
    <div class="bg-gray-100">
      <section class="section pt-20">
        <h2 class="text-3xl text-center font-bold font-nicoca underline decoration-2 underline-offset-8">設備</h2>
        <p class="text-center text-2xl mt-10 font-nicoca">
          電源・Wifi<br>
          休憩用ソファ・冷蔵庫・ウォーターサーバー
        </p>
        <div class="mt-8">
          <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in facilities" :key="index">
            <div class="carousel__item">
              <img :src="item.imageUrl" class="aspect-square" />
              <p class="p-8 text-gray-700">{{ item.comment }}</p>
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
    <section class="section pt-20">
      <h2 class="text-3xl text-center font-bold font-nicoca underline decoration-2 underline-offset-8">アクセス</h2>
      <Access />
    </section>
    <div class="bg-gray-100">
      <section class="section" id="calender">
        <h2 class="text-center text-3xl font-nicoca underline decoration-2 underline-offset-8">
          営業日カレンダー
        </h2>
        <iframe
          class="w-full mt-6"
          src="https://calendar.google.com/calendar/embed?src=f12f7d126d8d2eb22a4b78058d7988bad7434dbf25892ce7108162bbfc30f9e9%40group.calendar.google.com&ctz=Asia%2FTokyo&color=%239E69AF"
          style="border-width: 0"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </section>
    </div>
    <Footer
      :menuList="footerMenuList"
      :snsList="snsList"
      :bgColorClass="'bg-gray-700'"
      :headerLogoImg="'/images/top/base_logo.png'"
      :headerLogoLink="'/'"
      />
  </main>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: sticky;
  top: 0;
  height: 70px;
  background: #f578ae;
  background: radial-gradient(circle, rgba(245, 120, 174, 1) 0%, rgba(112, 162, 219, 1) 100%);
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .3);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.kv {
  background-image: url("/images/shimekiri/shimekiri_kv.jpg");
  height: 400px;
  background-size: cover;
  background-position: left;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    background-position: 30%;;
  }
  &_inner {
    padding: 0 20px 0 25%;
  }
}
</style>
