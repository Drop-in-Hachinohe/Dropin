<script setup>
import { ref } from 'vue'
import WorkItem from '@/components/WorkItem.vue'
import '@/assets/css/modal.scss'
const openImage = ref({});
const isOpen = ref(false);
const works = [
  {
    imageUrl: "/images/archive/kodomoshokudou.jpg",
    size: "half",
    title: "チーム鮫子ども食堂チラシ",
    description: "八戸市鮫地区で立ち上がった子ども食堂さんのチラシを制作させていただきました！"
  },
  {
    imageUrl: "/images/archive/sun_shelter.jpg",
    size: "half",
    title: "サンシェルターさんチラシ",
    description: "自宅で発電した電気を災害時にしっかり自宅でつかえるサンシェルターさんのチラシを制作させていただきました"
  },
  {
    imageUrl: "/images/archive/HachinoheClarinet.jpg",
    size: "half",
    title: "八戸アンサンブルカンパニーさんコンサート",
    description: "コントラバスクラで参加しました〜！"
  },
  {
    imageUrl: "/images/archive/Oyako1st.jpg",
    size: "half",
    title: "第１回親子コンサート",
    description: "泣いても走り回ってもいいコンサートをやりたくて企画してみました。育自サークルjunonさんに主催してもらいました",
  },
  {
    imageUrl: "/images/archive/Oyako2nd.png",
    size: "half",
    title: "第２回親子コンサート",
    description: "泣いても走り回ってもいいコンサートその２です"
  },
  {
    imageUrl: "/images/archive/oyako3rd.jpg",
    size: "half",
    title: "第3回親子コンサート",
    description: "泣いても走り回ってもいいコンサートその3です"
  },
  {
    imageUrl: "/images/archive/Oyako4th.jpg",
    size: "half",
    title: "第4回親子コンサート",
    description: "泣いても走り回ってもいいコンサートその4です！クリスマスですね"
  },
    {
    imageUrl: "/images/archive/MWBT10th.jpg",
    size: "half",
    title: "Marble Wind Brass TIKYO 第8回定期演奏会チラシ",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のチラシです。演出もがんばりました。"
  },
  {
    imageUrl: "/images/archive/MWBT10in.png",
    size: "normal",
    title: "Marble Wind Brass TIKYO 第10回定期演奏会パンフレット中身",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のパンフレット中身です。演出もがんばりました。"
  },
  {
    imageUrl: "/images/archive/MWBT10out.png",
    size: "normal",
    title: "Marble Wind Brass TIKYO 第10回定期演奏会パンフレット外身",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のパンフレット外身です。演出もがんばりました。"
  },
  {
    imageUrl: "/images/archive/MWBT8.png",
    size: "half",
    title: "Marble Wind Brass TIKYO 第8回定期演奏会チラシ",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のチラシです。バスクラ吹きました。"
  },
  {
    imageUrl: "/images/archive/MWBT8in.png",
    size: "normal",
    title: "Marble Wind Brass TIKYO 第8回定期演奏会パンフレット中",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第8回定期演奏会のパンフレットのパンフレットの中身です"
  },
  {
    imageUrl: "/images/archive/MWBT8out.png",
    size: "normal",
    title: "Marble Wind Brass TIKYO 第8回定期演奏会パンフレットそと",
    description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第8回定期演奏会のパンフレットのパンフレットの外身です"
  },
  {
    imageUrl: "/images/archive/sakura.png",
    size: "half",
    title: "川崎さくら吹奏楽団第２回定期演奏会チラシ",
    description: "川崎さくら吹奏楽団第２回定期演奏会チラシです。バスクラ吹きました。"
  },
  {
    imageUrl: "/images/archive/sakura4thout.png",
    size: "normal",
    title: "川崎さくら吹奏楽団第4回定期演奏会パンフレット外側",
    description: "川崎さくら吹奏楽団第4回定期演奏会パンフレットです〜オペラ座の怪人がメインということで"
  },
  {
    imageUrl: "/images/archive/sakura4th.png",
    size: "normal",
    title: "川崎さくら吹奏楽団第4回定期演奏会パンフレット内側",
    description: "川崎さくら吹奏楽団第4回定期演奏会パンフレットです〜オペラ座の怪人がメインということで"
  },
  {
    imageUrl: "/images/archive/famicon.png",
    size: "half",
    title: "Marble Wind Brass TIKYOファミリーコンサート2016チラシ",
    description: "Marble Wind Brass TIKYOファミリーコンサート2016チラシです。バスクラ吹きました。"
  },
  {
    imageUrl: "/images/archive/famiconIn.png",
    size: "normal",
    title: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット中身",
    description: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット中身です。バスクラ吹きました。"
  },
  {
    imageUrl: "/images/archive/famiconOut.png",
    size: "normal",
    title: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット外見",
    description: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット外身です。バスクラ吹きました。"
  },
  {
    imageUrl: "/images/archive/famicon2017.png",
    size: "half",
    title: "Marble Wind Brass TIKYOファミリーコンサート2017チラシ",
    description: "Marble Wind Brass TIKYOファミリーコンサート2017チラシです。バスクラ吹きました。司会もした気がする"
  },
  {
    imageUrl: "/images/archive/famicon2019.png",
    size: "half",
    title: "Marble Wind Brass TIKYOファミリーコンサート2017チラシ",
    description: "Marble Wind Brass TIKYOファミリーコンサート2019チラシです。当日朝にバスクラが壊れる悲劇"
  },
  {
    imageUrl: "/images/archive/asks.png",
    size: "half",
    title: "大人の文化祭チラシ",
    description: "M大人の文化祭チラシを制作させていただきました"
  },
  {
    imageUrl: "/images/archive/sinrinyoku01-01.png",
    size: "half",
    title: "NPO法人森林浴音楽会ポスター",
    description: "お手伝いしているNPO法人森林浴音楽会ポスター1です"
  },
  {
    imageUrl: "/images/archive/sinrinyoku02-01.png",
    size: "half",
    title: "NPO法人森林浴音楽会ポスター",
    description: "お手伝いしているNPO法人森林浴音楽会ポスター2です"
  },
  {
    imageUrl: "/images/archive/sinrinyoku03-01.png",
    size: "half",
    title: "NPO法人森林浴音楽会ポスター",
    description: "お手伝いしているNPO法人森林浴音楽会ポスター3です"
  },
  {
    imageUrl: "/images/archive/sinrinyoku04-01.png",
    size: "half",
    title: "NPO法人森林浴音楽会ポスター",
    description: "お手伝いしているNPO法人森林浴音楽会ポスター4です"
  },
  {
    imageUrl: "/images/archive/sinrinyokuOut.jpg",
    size: "normal",
    title: "NPO法人森林浴音楽会折パンフレット",
    description: "お手伝いしているNPO法人森林浴音楽会折パンフレットです。内容が薄くて困りました^^;"
  },
  {
    imageUrl: "/images/archive/sinrinyokuIn.jpg",
    size: "normal",
    title: "NPO法人森林浴音楽会折パンフレット",
    description: "お手伝いしているNPO法人森林浴音楽会折パンフレットです。内容が薄くて困りました^^;"
  },
  {
    imageUrl: "/images/archive/silk2.png",
    size: "half",
    title: "クリアファイル作った時のしるくちゃん",
    description: "クリアファイル作った時のしるくちゃんです"
  },
  {
    imageUrl: "/images/archive/silkPrin2.png",
    size: "normal",
    title: "クリアファイル作った時のしるくちゃんとぷりんちゃん",
    description: "クリアファイル作った時のしるくちゃんとぷりんちゃんです"
  },
  {
    imageUrl: "/images/archive/azarasi.png",
    size: "half",
    title: "クリアファイル作った時のアザラシ",
    description: "クリアファイル作った時のアザラシです"
  },
  {
    imageUrl: "/images/archive/mfcgOut.jpg",
    size: "normal",
    title: "ミャンマーファミリークリニックさんの会報のお手伝い",
    description: "ミャンマーファミリークリニックさんの会報の外面。これ文字多くて大変だったなぁ・・"
  },
  {
    imageUrl: "/images/archive/mfcgIn.jpg",
    size: "normal",
    title: "ミャンマーファミリークリニックさんの会報のお手伝い",
    description: "ミャンマーファミリークリニックさんの会報の中面。これ文字多くて大変だったなぁ・・"
  },
  {
    imageUrl: "/images/archive/mfcg12out.jpg",
    size: "normal",
    title: "ミャンマーファミリークリニックさんの会報12号のお手伝い",
    description: "ミャンマーファミリークリニックさんの会報12号の外面。これまた文字多くて大変だったなぁ・・"
  },
  {
    imageUrl: "/images/archive/mfcg12.jpg",
    size: "normal",
    title: "ミャンマーファミリークリニックさんの会報12号のお手伝い",
    description: "ミャンマーファミリークリニックさんの会報12号の中面。これまた文字多くて大変だったなぁ・・"
  },
    {
    imageUrl: "/images/archive/teana-in.png",
    size: "normal",
    title: "エステサロンの三つ折りチラシ",
    description: "エステサロンの三つ折りチラシ中ですね"
  },
  {
    imageUrl: "/images/archive/teana-out.png",
    size: "normal",
    title: "エステサロンの三つ折りチラシ",
    description: "エステサロンの三つ折りチラシ外です"
  },
]

function imageClass(size) {
  return size == "normal" ? "lg:w-2/3" : "md:w-1/2 lg:w-1/3"
}

function open(item) {
  openImage.value = item;
  isOpen.value = true;  
}

function close() {
  openImage.value = {};
  isOpen.value = false;    
}
</script>

<template>
  <section class="section">
    <h2 class="text-center text-slate-700 text-3xl font-bold py-16">制作物紹介
      <p class="text-center text-slate-700 text-sm mt-2">大昔のいけてないのも載せていますm(_ _)m</p>
    </h2>
    
    <div class="text-slate-800">
      ご紹介にてチラシ制作もたまにやりますが、基本的に本業が会社員なのでしょっちゅうは受けられず、、。
      学生さんと一緒にデザインしていけたらなと思っています。
    </div>
    <ul class="flex flex-wrap gap-y-2 mt-3">
      <li v-for="work in works" :key="work.id" class="w-full p-2" :class="imageClass(work.size)" @click="open(work)">
      <img :src="work.imageUrl" class="w-full shadow-md hover:shadow-2xl">
      <small class="text-gray-600">{{ work.title }}</small>
    </li>
    </ul>
  </section>
  <Transition name="fade">
    <WorkItem v-if="isOpen" :content="openImage" @close="close" />
  </Transition>
</template>
