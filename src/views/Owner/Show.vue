<script setup>
const things = [
  {
    name: "不登校はフリーランス Drop in",
    link: "/space",
    description: `
      不登校だったり学校が苦手な方と一緒にCreateしたい！と思って立ち上げた、
      「学校だけじゃない選択肢を考えるコミュニティ」です。
      八戸市の施設はっちと組んでインターン事業を実施したこともありました。
      現在は学校に行っていない時間を楽しい時間にしよう！ということで、興味を見つけたり極めたりするお手伝いの場を運営しています。
    `
  },
  {
    name: "黒かもめアンサンブル",
    link: "/kurokamome",
    description: `
      正式メンバーは石橋（バスクラリネット）だけのアンサンブルです。
      「奏者が勝手に楽しいアンサンブル」をコンセプトに、思いつくままにコンサートを企画して、コンサートごとにメンバーを探してチームを組みます。
      聴くコンサートではなくて、時間を楽しむコンサートを目指しています！
    `
  },
  {
    name: "鮫のゲストハウス Drop in",
    link: "/guest_house",
    description: `
      八戸市鮫町の自宅をゲストハウスとして運営しています。
      私自身も開発者として快適に作業できるような開発合宿やものつくりに特化したゲストハウスです。
      （もちろん開発しなくてもOKです〜！）
    `
  },
  {
    name: "CoderDojo八戸",
    link: "https://coderdojo-hachinohe.aomori.jp/",
    description: `
      CoderDojo は17歳くらいまでを対象とした非営利のプログラミング道場です。
      プログラミング教室ではなく、子供達が自主的に学ぶためのコミュニティで、2011年にアイルランドで始まり、世界では110カ国・2,000の道場、日本には226以上の道場があります。
    `
  },
  {
    name: "グラフィックデザイン",
    link: "/works",
    description: `
      個人事業や趣味でチラシのデザインやWeb制作なんかをやっています。この分野なら学生さんに教えることができそうなので、いつか一緒にやりたいなぁと思ってます
    `
  },
];

const snsList = [
  {
    name: "color_x",
    link: "https://twitter.com/Bassy3600",
  },
  {
    name: "color_facebook",
    link: "https://www.facebook.com/yuuki.ishibashy",
  },
  {
    name: "color_instagram",
    link: "https://www.instagram.com/ishibashyyy",
  },
]

</script>

<template>
  <section class="section">
    <h2 class="text-center text-slate-700 text-3xl font-bold py-16">管理人</h2>
    <div class="flex justify-center items-center">
      <img src="/images/profile.png" class="w-5/12 sm:w-4/12 md:w-3/12"/>
      <div class="pl-8">
        <p class="font-bold sm:text-lg text-base">石橋優希</p>
        <p class="text-sm sm:text-base">青森県八戸市出身</p>
        <p class="text-sm sm:text-base">現在は八戸と神奈川県藤沢市の二拠点</p>
        <p class="text-sm sm:text-base">会社員としてWebエンジニア、個人事業でデザインをやっています</p>
        <a class="text-sm sm:text-base underline" href="/works" target="_blank">過去作品はこちら</a>
        <ul class="flex">
          <li v-for="sns in snsList" class="flex frex-col items-center mt-8">
            <a :href="sns.link" target="_blank">
              <img :src="`/images/sns/icon_${sns.name}.png`" class="w-12 px-1"/>
            </a>
          </li>
        </ul>
        </div>
    </div>
  </section>
  <div class="bg-slate-100">
    <section class="section">
      <h3 class="text-slate-700 text-xl text-center font-bold underline">自己紹介</h3>
      <div class="mt-10">
        <p>こんにちは。Drop inの管理人石橋優希と申します。<br/>
          定職につかずたくさんのアルバイトや派遣をしながら暮らし、現在はWebエンジニア兼デザイナーとして働いています。
        </p>
        <p class="mt-3">
          小学校2年生の時、給食時間に慌てて食べて戻しそうになったことをきっかけに、給食の時間が怖くなってしまいました。
          給食嫌だな、と思っているうちに、徐々に学校に行けなくなりました。<br/>
          そして、給食だけでなく、何も食べられなくなってしまい、家の外にも出られなくなってしまいました。
          もちろん学校へも行かず、体重が落ちすぎて入院もしました。<br/>
          泣いている母親をみて、どうやったら誰にも迷惑をかけず消えることができるのだろう？と悩んだ日々も有りましたが、
          家でお菓子を作ってみたり絵を描いたりしながら、徐々に自信を取り戻していくことができました。
        </p>
        <p class="mt-3">
          「学校を卒業して就職する」という王道をドロップアウトしてしまった私ですが、今は楽しく（時々苦しみながら）なんとか生きてます！<br/>
          日本は、ちょっとしたことがきっかけでドロップアウトしやすい社会だなぁと思っています。<br/>
          でも、ドロップアウトって実は落ちこぼれじゃなくてフリーランスだよね！って、最近は思ってます。<br/>
          だって学校とか会社とか、そういうものに頼らないで自分で決めた人生送ってるんだから。
        </p>
        <p class="mt-3">
          同じように王道から外れて、今ちょっとしんどいと思っている人たちを、支援したいとか、支援できるとか思っていません。<br/>
          本当はみんな、ものすごい力を持っているので、やりたいことと安心してそれに打ち込める環境があれば、誰かの支援なんかいらないと思うのです。<br/>
          むしろ、その力を借りたい！一緒に話したり、仕事してみたりしたい！と、思っています。
        </p>
        <p class="mt-3">
          実は私、社会人になった後も再度引きこもりになってしまいました(^^;)<br/>
          その時に救ってくれた吹奏楽とバスクラリネットという楽器を相棒にして、力尽きるまで生きてみようと思います！
        </p>
      </div>
    </section>
  </div>
  <section class="section">
    <h3 class="text-slate-700 text-xl text-center font-bold underline">やっていること</h3>
    <ul class="mt-16">
      <li v-for="(item, index) in things" :key="index" class="mb-10">
        <a :href="item.link" target="_blank">
          <header class="bg-slate-100 inline-block text-lg font-bold border py-1 px-2 hover:shadow">{{ item.name }}</header>
        </a>
        <div class="mt-3">{{ item.description }}</div>
      </li>
    </ul>
  </section>
</template>
