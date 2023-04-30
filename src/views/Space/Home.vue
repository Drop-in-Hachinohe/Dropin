<script setup>
import { ref } from 'vue'
import Api from '../../api/api.js'
import NewsList from '../../components/NewsList.vue'
import LINE from '@/components/Line.vue'

const examples = [
  { 
    imageUrl: '/images/main/Dropin_ex01.png',
    title: "コスプレ服作りたい"
  },
  { 
    imageUrl: '/images/main/Dropin_ex02.png',
    title: "バンド組みたい"
  },
  { 
    imageUrl: '/images/main/Dropin_ex03.png',
    title: "アプリ開発したい"
  }
]

const whatWeCanDo = [
  { 
    title: "やりたいこと応援",
    imageUrl: '/images/main/squid.png',
    content: "やってみたいことがあれば全力でお手伝いしたり一緒にやったりします！（マンガ描きたいとか、筋トレしたいとかなんでも！）"
  },
  { 
    title: "もくもく作業OK",
    imageUrl: '/images/main/alpa.png',
    content: "勉強・読書・ゲームなどひたすらやってたい！という方もどうぞ好きなだけどうぞ！（本やゲームはご自身のものをお持ちください）"
  },
  { 
    title: "プログラミング学習",
    imageUrl: '/images/main/white_bear.png',
    content: "プログラミング学習サービスを使って、無料で学習できます。運営者はデザインと開発を仕事にしているのでアプリ開発のお手伝いできます。"
  },
]

const news = ref([]);

Api.fetchNewsIndex('drop_in_top').then((data) => {
  news.value = data.contents;
});
</script>

<template>
  <main>
    <div class="kv">
      <div class="kv_inner">
        <div class="kv_title">
          <h1 class="font-pixel kv_title_main text-white">不登校はフリーランス</h1>
          <p class="font-pixel kv_title_sub text-white mt-5">学校ニガテでも楽しく過ごしてますが何か!?</p>
        </div>
        <div class="logo">
          <img src="/images/main/Dropin_logo_w.png" />
        </div>
      </div>
    </div>
    <img src="/images/main/Dropin_logo_color.png" class="mt-2 sm:mt-10 md:mt-16 pt-5 logoImg"/>
    <p class="font-pixel text-center mt-5">てなに?</p>
    <img src="/images/main/sky_border.png" class="mt-16"/>
    <div class="sky" id="about">
      <section class="section pt-10">
        <div class="rpg_message">
          <p class="text-slate-700 text-base text-center">陰キャ・元陰キャ専用。学校に行かない時間を楽しい時間にする</p>
          <h2 class="text-slate-700 font-pixel text-2xl text-center font-bold mt-4">学校だけじゃない選択肢を探すところ</h2>
        </div>
        <ul class="md:flex mt-20 pb-20">
          <li v-for="(exe, index) in examples" :key="index" 
            class="px-6 mt-12 pb-12 sm:px-20 md:mt-0 md:flex-1 md:px-1 exmaple_item">
            <img src="/images/main/e0253_3.png" class="md:w-11/12" />
            <div class="exmaple_item_inner flex flex-col justify-between">
              <p class="font-pixel text-center text-base">たとえば…</p>
              <p class="font-pixel text-center font-bold text-xl md:text-lg py-6">
                {{ exe.title }}
              </p>
              <p class="font-pixel text-center text-slate-700 text-base">とか</p>
            </div>
          </li>
        </ul>
        <div class="mt-30 rpg_message bg-black">
          <p class="text-base text-center text-white">知恵を絞って実現する方法を考えて</p>
          <p class="font-pixel text-3xl text-center font-bold mt-4 text-white">一緒に挑戦します！</p>
        </div>
      </section>
      <img src="/images/main/Dropin_ground.png" class="sky_ground"/>
    </div>
    <section class="section pt-20">
      <h2 class="font-pixel text-slate-500 text-4xl text-center">CONCEPT</h2>
      <p class="text-base text-slate-500　text-center">何のための場所なの？</p>
      <h3 class="text-xl font-bold mt-12">
        Drop inは、一緒に行き先を模索する場所
      </h3>
      <div class="mt-6">
        <p class="pt-3">刹那的な意味ではなく、<span class="font-bold">「今」</span>楽しいことが一番大事。</p>
        <p class="pt-3">なんのために学校に行くのか？それは将来のために今はちょっと我慢して、将来幸せになろう！という側面があると思います。</p>
        <p class="pt-3">でも将来の幸せって、なんだかわからないままのひとが多いはず。</p>
        <p class="pt-3">その「よくわからない将来の幸せ」のために、今を犠牲にするのって結構リスキーかもしれない。</p>
        <p class="pt-3">
          今楽しいと思うことをやって、「私ってこういう時に幸せを感じるんだな」ってわかれば、その幸せ時間を作るための努力はきっと楽しくなるはず。
          そして人生の中の多くの時間が「楽しい」時間になるのが幸せってことなのではないか思ってます。
        </p>
      </div>
    </section>
    <div class="bg_dropin-green" id="what">
      <div class="section">
        <h2 class="font-pixel text-white text-4xl text-center">WHAT</h2>
        <p class="text-base text-white　text-center">何ができるの？</p>
        <ul class="md:flex mt-20">
          <li v-for="(item, index) in whatWeCanDo" :key="index" 
            class="px-6 mt-12 sm:px-20 md:mt-0 md:flex-1 md:px-4">
            <p class="text-center text-white font-bold text-lg">
              {{ item.title }}
            </p>
            <p class="text-white text-sm mt-5">
              {{ item.content }}
            </p>
            <img :src="item.imageUrl" class="w-2/12 md:w-3/12 what_image" />
          </li>
        </ul>
      </div>
    </div>
    <section class="section pt-20" id="join">
      <h2 class="font-pixel text-slate-500 text-4xl text-center">JOIN!</h2>
      <p class="text-base text-slate-500　text-center">どうやって参加するの？</p>
      <!-- <h3 class="text-center text-lg font-bold text-red-600 mt-6">2023年3月頃活動開始予定です。現在お問い合わせのみ受け付けております。</h3> -->
      <div class="text-lg mt-20">
        <dl>
          <dt class="font-bold text-center underline">対象</dt>
          <dd class="font-bold text-center text-xl text-teal-600">
            学校に行っていない。行っているけど学校が苦手、しんどい。<br>でも将来の道を自分で探してみたい学生さん
          </dd>
        </dl>
        <dl>
          <dt class="font-bold text-center mt-6 underline">料金</dt>
          <dd class="font-bold text-center text-2xl text-teal-600">無料</dd>
        </dl>
        <dl id="calendar">
          <dt class="font-bold text-center mt-10 underline">営業日カレンダー</dt>
          <dd>
            <iframe class="w-full mt-1" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&src=ZHJvcGluLmhhY2hpbm9oZUBnbWFpbC5jb20&src=MjZiYjA4M2E1NGY0YTdlNzc5MjAyMjcxYmJmNmQ3NmRjYjFmMzNhODcwMjVlNjRkODk0OGNjMTkyMDA5ZTE3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5" height="600" frameborder="0" scrolling="no"></iframe>
          </dd>
        </dl>
      </div>
      <div class="text-center mt-20">まずはLINEで中の人とお話ししましょう！</div>
      <LINE />
      
    </section>
    <div class="bg-slate-100" id="access">
      <section class="section pt-20">
        <h2 class="font-pixel text-slate-500 text-4xl text-center">ACCESS</h2>
        <p class="text-base text-slate-500　text-center">どこにある？</p>
        <div class="md:flex mt-10">
          <div class="pr-10  md:w-4/12">
            <img src="/images/GH/view.jpg"/>
            <p class="text-sm">031-0841</p>
            <p class="text-base">青森県八戸市鮫町蟻子5-11</p>
            <p class="text-base">鮫のゲストハウスDrop in内</p>
            <a href="/guest_house" class="text-xs underline">鮫のゲストハウスDrop inについてはこちら</a>
            <p class="text-base mt-4">JR八戸線鮫駅から徒歩10分</p>
          </div>
          <iframe class="w-full md:w-8/12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3875340852933!2d141.55981181544885!3d40.533026579351784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b53ec98cdcf25%3A0x14bcb5913c798170!2z44CSMDMxLTA4NDEg6Z2S5qOu55yM5YWr5oi45biC6a6r55S66J-75a2Q77yV4oiS77yR77yR!5e0!3m2!1sja!2sjp!4v1671948702823!5m2!1sja!2sjp" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p class="text-lg font-bold text-center mt-16">バーチャルスペース GatherもOK!</p>
        <p class="text-base mt-6">
          直接くるのが難しい！という場合はパソコンやスマホからアクセスできる空間も用意しています。
          Gatherというアプリケーションを使ったバーチャル空間です。
        </p>
        <div class="md:flex justify-center mt-8">
          <img src="/images/main/gather.png" class="aspect-video w-full md:w-6/12 px-1"/>
          <iframe class="aspect-video w-full md:w-6/12 px-1" src="https://www.youtube.com/embed/SA5Hgbal7co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    </div>
    <div class="section">
      <h2 class="text-center text-2xl font-bold py-16">お知らせ</h2>
      <NewsList :newsList="news" :parentRoute="'space'"/>
      <div class="flex justify-center mt-10">
        <a href="/space/news" class="btn w-fit bg-teal-600 text-white px-6 py-3 text-sm">お知らせ一覧へ</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.kv {
  margin-top: 50px;
  @media (min-width: 640px) {
    margin-top: 100px;
  }
  width: 100%;
  background-image: url('/images/main/Dropin_kv.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 500px;
  @media (min-width: 500px) {
    height: 650px;
  }
  @media (min-width: 600px) {
    height: 750px;
  }
  @media (min-width: 700px) {
    height: 850px;
  }
  @media (min-width: 850px) {
    height: 950px;
  }
  @media (min-width: 900px) {
    height: 1050px;
  }
  @media (min-width: 1000px) {
    background-position: 0, 1300px;
    height: 1100px;
  }

  &_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 250px 10% 200px;
    @media (min-width: 1000px) {
      padding: 250px 15% 200px;
    }
    @media (max-width: 700px) {
      padding: 200px 10%;
    }
    @media (max-width: 600px) {
      padding: 150px 10%;
    }
    @media (max-width: 500px) {
      display: block;
      padding: 120px 50px 0;
    }
  }
  &_title {
    width: calc(100% - 21vw);
    @media (max-width: 500px) {
      text-align: center;
      width: 100%
    }
    &_main {
      font-size: 1.8em;
      @media (max-width: 800px) {
        font-size: 1.6em;
      }
    }
    &_sub {
      font-size: 1.5em;
      @media (max-width: 800px) {
        font-size: 1.2em;
      }
      @media (max-width: 700px) {
        font-size: 1.1em;
      }
      @media (max-width: 650px) {
        font-size: 1em;
      }
      @media (max-width: 500px) {
        font-size: 0.8em;
      }
    }
  }
}
.logo {
  width: 20vw;
  @media (max-width: 500px) {
    display: none;
  }
  &img {
    width: 100%;
  }
}
.logoImg {
  width: 200px;
  @media (min-width: 1200px) {
    width: 300px;
  }
  margin-left: auto;
  margin-right: auto;
}
.rpg_message {
  width: fit-content;
  padding: 20px;
  border: solid 2px black;
  margin: 0 auto;
}
.sky {
  background-color: #D4EFF5;
  position: relative;
  padding: 35px 0 65px;
  &_ground {
    position: absolute;
    bottom: 0;
  }
}
.bg_dropin-green {
  background-color: var(--dropin-green);
}
.what_image {
  margin: 20px auto;
}
.exmaple_item {
  position: relative;
  z-index: 1;
  &_inner {
    position: absolute;
    width: 90%;
    top: 40px;
    left: 0;
    height: 50%;
  }
}
</style>
