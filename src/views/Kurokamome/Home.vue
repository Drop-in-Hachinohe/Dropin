<script setup>
import { ref } from "vue";
import Api from "../../api/api.js";
import NewsList from "@/components/NewsList.vue";
import LINE from '@/components/LineKurokamome.vue'

const pastFlyers = [
  { 
    imageUrl: '/images/kurokamome/oyako.jpg',
    date: '2023/11/18',
  },
  { 
    imageUrl: '/images/kurokamome/horoyoi.jpg',
    date: '2023/8/6',
  },
  { 
    imageUrl: '/images/kurokamome/game_anime.jpg',
    date: '2024/12/7',
  },
]
const pastConcert = [
  { 
    imageUrl: '/images/kurokamome/concert_hacchi.jpg',
    date: '2023/7/8 ストリートライブ in はっち',
  },
  { 
    imageUrl: '/images/kurokamome/concert_yoruniwa.jpg',
    date: '2023/10/14 更上閣ヨルニワ',
  },
]

const news = ref([]);

Api.fetchNewsIndex('kurokamome', true).then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <img src="/images/kurokamome/kv_foot.png" class="kv_deco foot" />
      <div class="logo z-10">
        <h1 class="text-xl text-center text-slate-500 font-yu pb-6">奏者が勝手に楽しいアンサンブル</h1>
        <img src="/images/kurokamome/kv_logo.png" class="logoImg" />
      </div>
      <img src="/images/kurokamome/kv_head.png" class="kv_deco head" />
    </div>
    <div class="bg_cloth">
      <section class="section">
        <h2 class="text-xl text-center font-bold text-slate-800">
          下手でも人前で演奏したっていい
        </h2>
        <p class="text-md mt-10 font-yu">
          音楽の才能があるわけじゃない。音大に行ったわけでもない。自分の周りには、そんなに練習しなくても楽譜なんかなくてもその場で演奏できる人がいる。
          <br />
          だから、黒かもめは一生懸命練習します。自分の生活の合間になんとか練習をねじ込みます。聴いてくれる人に喜んでもらえるように、たくさん練習します。
          そうやってたくさん練習したんだから、最終的に上手くならなくても、
          <span class="font-bold">下手でも人前で演奏したっていい</span>んです。
          <br />
          <br />
          静かに聴いてもらうコンサートは少し苦手です。<span class="font-bold">「人と時間を楽しむコンサート」</span>を目指して、思いつくままに企画しています。
          面白そう、と思ったらとりあえずやってみるスタイルです。
          <br />
          <small>※黒かもめアンサンブルは、「陰キャが心地よく過ごせる時間をつくりたい」がコンセプトの <a class="underline" href="/" target="_blank">Drop in</a> の活動の一つです。</small>
        </p>
      </section>
    </div>
    <div v-if="news.length > 0" class="section">
      <h2 class="text-center text-slate-700 text-2xl font-bold py-16">
        開催予定のコンサート
        <small>(お知らせもあるよ)</small>
      </h2>
      <NewsList :newsList="news" :parentRoute="'kurokamome'" />
      <div class="flex justify-center mt-10">
        <a
          href="/kurokamome/news"
          class="btn w-fit bg-kurokamome-yellow text-white px-6 py-3 text-sm"
          >過去の記事一覧へ</a
        >
      </div>
    </div>
    <div class="bg_cloth">
      <section class="section">
        <h2 class="text-xl text-center font-bold text-slate-800 mt-20">過去の自主企画コンサートの一部</h2>
        <ul class="flex flex-wrap items-end justify-center pb-20">
          <li v-for="(flyer, index) in pastFlyers" :key="index" 
            class="rounded-md p-2 w-1/2 md:w-72 lg:w-1/3">
              <img :src="flyer.imageUrl" class="shadow"/>
              <p class="text-center text-sm text-gray-500 pt-2 mt-2">
                  {{ flyer.date }}
              </p>
            </li>
        </ul>
        <img src="/images/kurokamome/concert_oyako.jpg" />

        <h2 class="text-xl text-center font-bold text-slate-800 mt-20">ライブイベントへの出演</h2>
        <ul class="flex items-end justify-center">
          <li v-for="(concert, index) in pastConcert" :key="index" class="p-2">
            <img :src="concert.imageUrl" class="shadow"/>
            <p class="text-center text-sm text-gray-500 pt-2 mt-2">
                {{ concert.date }}
            </p>
          </li>
        </ul>

        <div class="flex items-center justify-center pt-6 pb-3">
          <a href="https://www.youtube.com/@user-yk8qe2nv2h" target="_blank">
            <div class="flex items-center gap-3 bg-white px-4 py-2 rounded hover:shadow">
              <p class="text-sm">過去のコンサート動画</p>
              <img src="/images/kurokamome/youtube.jpg" class="w-20" />
            </div>
          </a>
        </div>
      </section>
    </div>
    
    <section class="section">
      <h2 class="text-slate-700 text-center text-xl font-bold">お問い合わせ / 一緒に演奏しよう！</h2>
      <p class="text-slate-800 pt-8 pb-3 text-center">
        黒かもめアンサンブルはコンサートごとに編成を変えて本番を迎えるスタイルです。<br>
        一緒に演奏してみたい！演奏を依頼したい！という方はお気軽にLINEでお問い合わせください！
      </p>
      <LINE />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 700px;
  padding: 100px 10px 0;
  @media (max-width: 640px) {
    height: 600px;
  }
  &_deco {
    position: absolute;
    &.foot {
      width: 100px;
      top: 100px;
      left: 10px;
      @media (max-width: 640px) {
        top: 50px;
      }
    }
    &.head {
      width: 30vw;
      bottom: 0;
      right: 0;
    }
  }
}
.logo {
  width: 500px;
  @media (max-width: 700px) {
    height: 80vw;
  }
  &Img {
    width: 100%;
  }
}
.bg_cloth {
  background-image: url("/images/kurokamome/bg_cloth.png");
  background-repeat: repeat;
}
</style>
