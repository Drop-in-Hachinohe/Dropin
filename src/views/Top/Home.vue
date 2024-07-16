<script setup>
import { ref } from "vue";
import Api from "../../api/api.js";
import NewsList from "../../components/NewsList.vue";
import Access from '@/components/Access.vue'
import YinkyaCafeBanner from '@/components/YinkyaCafeBanner.vue'

const services = [
  { 
    imageUrl: '/images/top/services/guest_house.png',
    caption: "つくるひとのためのいえ",
    url: "/guest_house"
  },
  { 
    imageUrl: '/images/top/services/kurokamome.png',
    caption: "奏者が勝手に楽しい",
    url: "/kurokamome"
  },
  { 
    imageUrl: '/images/top/services/coder_dojo.png',
    caption: "自分でつくるから楽しい",
    url: "https://coderdojo-hachinohe.aomori.jp/"
  },
  { 
    imageUrl: '/images/top/services/drop_in.png',
    caption: "不登校はフリーランス",
    url: "/space"
  }
]

const news = ref([]);

Api.fetchNewsIndex('', true).then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <div class="text-white text-3xl kv_deco right font-pixel">
        Love my normal.<br>Live with everyone's normal
      </div>
      <div class="text-white text-3xl kv_deco left font-pixel">
        Love my normal.<br>Live with everyone's normal
      </div>
      <div class="logo">
        <h1 class="text-white text-base text-center">陰キャが心地よく過ごせる時間をつくりたい</h1>
        <img src="/images/top/kv_logo.png" class="logoImg" />
      </div>
    </div>
    <section class="section mt-10">
      <p class="text-stone-500 text-2xl font-bold underline">
        陰キャとは、他者とのコミュニケーションで自己が削られてしまう全ての人間である
      </p>
      <h2 class="text-stone-700 text-xl font-bold mt-16">
        Drop in って何?
      </h2>
      <p class="text-base mt-8">
        無邪気な心で将来の夢に向かって頑張る陽キャが眩しい。<br>
        清く正しく明るい陽キャと自分をどうしても比べてしまう。そして落ち込んでしまう。
        陽キャになろうと頑張ってみたけどどうしても疲れるし無理だった。<br>
        <br>
        そんな人間が、陰キャを認めて陰キャを思いっきり楽しむために、楽しそうだと思ったことを色々やっています。
      </p>
      <h2 class="text-stone-700 text-xl font-bold mt-16">
        居場所っていう言葉が好きじゃないんです
      </h2>
      <p class="text-base mt-8">
        「〇〇の居場所」みたいなのが好きじゃないんです。<br>
        <span class="font-bold">別に誰がどこにいたっていいわけで、居場所がないわけではなくて、
        今の世界が居心地を悪くさせてるだけだと思ってます。</span><br>
        「〇〇の居場所」を作ることで、そこ以外に居場所がないことを太鼓判押されているようで、嫌。<br>
        <small>※同じ属性だけで集まりたい人たち（例えば喫煙者とか、○歳以上の人とか）が、あえて居場所を作るのは良いと思うんですけどね。</small>
        <br><br>
        例えば「平日のこんな時間に学生が?」って思ってしまう人が多く、そう思われていることを本人も感じてしまうから非常に居心地が悪い。<br>
        私はそう思わないので、そう思わないよって言いたい。
        誰がどこにいたって居心地が悪くない世界にしたく、私は私の基準で好きなことやっていきますよ。
      </p>
      <div class="mt-10">
        <YinkyaCafeBanner />
      </div>
      <ul class="flex flex-wrap items-end justify-center mt-20 pb-20">
        <a v-for="(service, index) in services" :key="index" :href="service.url" target="_blank"
          class="rounded-md p-6 hover:shadow-2xl w-1/2 md:w-72 lg:w-1/4">
          <li>
            <img :src="service.imageUrl" />
            <p class="text-center text-sm text-gray-500 border-t border-gray-400 pt-2 mt-2">
                {{ service.caption }}
            </p>
          </li>
        </a>
      </ul>
    </section>

    <div class="bg-slate-100" id="access">
      <section class="section pt-20">
        <h2 class="text-slate-700 text-2xl text-center font-bold">拠点</h2>
        <Access />
      </section>
    </div>
    <section class="section pt-20">
      <h2 class="text-slate-700 text-2xl text-center font-bold">イベント</h2>
      <iframe class="w-full mt-1" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&src=ZHJvcGluLmhhY2hpbm9oZUBnbWFpbC5jb20&src=MjZiYjA4M2E1NGY0YTdlNzc5MjAyMjcxYmJmNmQ3NmRjYjFmMzNhODcwMjVlNjRkODk0OGNjMTkyMDA5ZTE3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5" height="600" frameborder="0" scrolling="no"></iframe>
    </section>
    <div class="bg-slate-100">
      <section class="section">
        <h2 class="text-center text-slate-700 text-2xl font-bold">
          お知らせ
        </h2>
        <NewsList :newsList="news" :parentRoute="''" class="mt-10" />
        <div class="flex justify-center mt-10">
          <a
            href="/news"
            class="btn w-fit bg-slate-600 text-white px-6 py-3 text-sm"
            >お知らせ一覧へ</a
          >
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  background-image: url("/images/top/bg_top.png");
  background-repeat: repeat;
  height: 700px;
  padding: 100px 0 0;
  @media (max-width: 700px) {
    height: 500px;
  }
  &_deco {
    position: absolute;
    opacity: .1;
    &.right {
      right: -150px;
      transform: rotate(-90deg);
    }
    &.left {
      left: -150px;
      transform: rotate(90deg);
      
    }
  }
}
.logo {
  width: 350px;
  transform: rotate(-3deg);
  &Img {
    width: 100%;
  }
}
</style>
