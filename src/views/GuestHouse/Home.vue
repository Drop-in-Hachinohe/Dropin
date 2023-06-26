<script setup>
import { ref } from "vue";
import Api from "../../api/api.js";
import NewsList from "../../components/NewsList.vue";
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
const features = [
  {
    imageUrl: "/images/GH/feature_01.jpg",
    title: "海まで徒歩10分",
  },
  {
    imageUrl: "/images/GH/feature_02.jpg",
    title: "音楽も楽しむ",
  },
  {
    imageUrl: "/images/GH/feature_03.jpg",
    title: "1日1組のみ",
  },
];
const facilities = [
  {
    imageUrl: "/images/GH/facility_01.jpg",
    title: "1日1組のみのお部屋",
    class: "facility_content_01",
    content: `1階と2階に一つずつ宿泊ルームがあります男女混合のエンジニアチームでもお部屋を分けて合宿できます。（最大４名様）。
      1階のお部屋にはトゥルースリーパーのマットレスを１台用意しております。
      `,
  },
];
const baths = [
  {
    imageUrl: "/images/GH/bath_01.jpg",
  },
  {
    imageUrl: "/images/GH/bath_02.jpg",
  },
  {
    imageUrl: "/images/GH/wc.jpg",
  },
];
const developmentRoomImages = [
  {
    imageUrl: "/images/GH/developmentRoom_01.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_02.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_03.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_04.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_05.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_06.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_07.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_08.jpg",
  },
  {
    imageUrl: "/images/GH/developmentRoom_09.jpg",
  },
];
const guestRoomImages = [
  {
    imageUrl: "/images/GH/guestRoom_01.jpg",
  },
  {
    imageUrl: "/images/GH/guestRoom_02.jpg",
  },
  {
    imageUrl: "/images/GH/guestRoom_03.jpg",
  },
  {
    imageUrl: "/images/GH/guestRoom_04.jpg",
  },
];
const news = ref([]);

Api.fetchNewsIndex("guest_house_top").then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <div class="logo">
        <img src="/images/GH/Dropin_logo.png" class="logoImg" />
        <h1 class="text-white text-base text-center">つくるひとのためのいえ</h1>
      </div>
    </div>
    <section class="section mt-10">
      <h2 class="text-2xl text-center font-bold">
        Drop inは、開発合宿・ワーケーション特化型ゲストハウスです
      </h2>
      <p class="text-base mt-10">
        何にも邪魔されず、目の前の作りたいものに没頭できる環境を目指しています。
        宿泊利用は1日1組様のためオンラインミーティングも可能です。(WiFiもご自由にご利用ください。）<br />
        デジタルではないモノ作りも応援しています。なんでもご相談ください。
      </p>
      <ul class="mt-20 feature">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(feature, index) in features" :key="index">
            <li>
              <p class="text-center font-bold text-teal-600 text-base">
                {{ feature.title }}
              </p>
              <img
                :src="feature.imageUrl"
                class="rounded-full aspect-square mt-5 md:p-2"
              />
            </li>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </ul>
    </section>

    <section class="section mt-20 bg-slate-100">
      <h2 class="text-slate-700 text-4xl text-center">ROOM</h2>
      <p class="text-base text-slate-700 text-center">宿泊ルーム</p>
      <p class="text-base mt-10">
        メインの宿泊ルームは1階奥のお部屋です。
        マットレスベッド２台にロフトベットが１台あります。それとは別に布団が1組ありますので、最大4名様までご宿泊いただけます。<br />
        収納の中にミニ冷蔵庫があります
      </p>
      <div class="mt-16">
        <Carousel :settings="settings" :breakpoints="breakpoints">
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
    </section>

    <section class="section mt-20">
      <h2 class="text-slate-700 text-4xl text-center">DEVELOPMENT SPACE</h2>
      <p class="text-base text-slate-700 text-center">開発スペース</p>
      <p class="text-base mt-10">
        高速ひかりWifiを導入しております。ご自由にご利用ください。疲れた時にはソファで一休みできます∩(ΦωΦ)∩<br />
        ランニングマシーンもありますので、体を動かしたい時はスニーカーも一緒にお持ちくださいね〜！
      </p>
      <p class="text-sm mt-6">
        ※開発スペースは一般の方向けに無料開放しているため、宿泊の方以外の方もご利用されている場合がありますm(｡_｡；))m
        <br />
        詳しくは<a
          href="https://dropin8.site/guest_house/news/0c6ymmuqv"
          class="underline"
          >こちら</a
        >をご覧ください
        <br />
        開発合宿をされる場合は貸切にできますのでご連絡ください。
      </p>
      <div class="mt-16">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in developmentRoomImages" :key="index">
            <div class="carousel__item">
              <img :src="item.imageUrl" class="aspect-square" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
        <div class="text-sm mt-8">
          <p class="font-bold">
            開発スペースを使って様々なイベントを開催しています。よろしければごらんください!
          </p>
          <a
            href="https://coderdojo-hachinohe.aomori.jp/posts/43109806"
            target="_blank"
            class="text-teal-600 underline"
          >
            海が見えるゲストハウスで美味しいコーヒーを飲みながら作品作り！第20回CoderDojo八戸
          </a>
        </div>
      </div>
    </section>

    <section class="section bg-slate-100">
      <h2 class="text-slate-700 text-4xl text-center">Bath & Amenities</h2>
      <p class="text-base text-slate-700 text-center">バス&アメニティ</p>
      <p class="text-base mt-10">
        お風呂・お手洗いはリフォーム済みで新品です。宿泊ルームと同じ一階にございますので、ご自由にご利用ください。<br />
      </p>
      <div class="text-sm mt-8">
        <p class="font-bold">ご用意のあるアメニティ</p>
        <p>
          シャンプー / コンディショナー / ボディーソープ / ドライヤー /
          ミニヘアアイロン / 歯ブラシ
        </p>
      </div>
      <div class="mt-16">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in baths" :key="index">
            <div class="carousel__item">
              <img :src="item.imageUrl" class="aspect-square" />
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </section>
    <div class="section">
      <h2 class="text-center text-slate-700 text-2xl font-bold py-16">
        お知らせ
      </h2>
      <NewsList :newsList="news" :parentRoute="'guest_house'" />
      <div class="flex justify-center mt-10">
        <a
          href="/guest_house/news"
          class="btn w-fit bg-teal-600 text-white px-6 py-3 text-sm"
          >お知らせ一覧へ</a
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  background-image: url("/images/GH/kv.jpg");
  height: 700px;
  background-attachment: fixed;
  background-size: 100%;
  padding: 0 10%;
  @media (max-width: 700px) {
    height: 500px;
  }
}
.logo {
  width: 300px;
  &Img {
    width: 100%;
  }
}
.facility {
  position: relative;
  overflow: hidden;
  width: 100%;
  &_img {
    width: 100%;
    height: auto;
    @media (min-width: 640px) {
      width: 100%;
    }
  }
  &_content {
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.8);
    @media (min-width: 640px) {
      position: absolute;
    }
    &_01 {
      @media (min-width: 640px) {
        left: 10%;
      }
    }
    &_02 {
      @media (min-width: 640px) {
        right: 10%;
      }
    }
  }
  &_title {
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 80%;
      border-bottom: solid 1px black;
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
}
.feature :deep .carousel__icon {
  fill: white;
}
</style>
