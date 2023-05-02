<script setup>
import { ref } from 'vue'

</script>
<template>
  <section class="section mt-16">
    <h2 class="text-slate-700 text-4xl text-center">RESERVE</h2>
    <p class="text-base text-slate-700　text-center">ご予約</p>
    <h3 class="text-center text-lg font-bold text-red-600 mt-8">管理人の手が全く回っていないため、ご予約はお問い合わせでのみ行っておりますm(_ _)m</h3>
    <!-- <p class="text-center text-sm font-bold mt-8">
      
    </p> -->
    <div class="text-center mt-16">
      <!-- <span class="text-xs font-bold text-red-500">モニター価格</span><br> -->
      <span class="underline underline-offset-8 text-slate-700">
        <span class="text-xl font-bold">料金:</span>
        <span class="text-3xl font-bold">5,000</span>
        <span class="text-sm font-bold">円(税込)</span>
      </span>
    </div>
    <div class="text-center mt-1">
      <span class="text-xs font-bold">お一人あたり / 一泊あたり / 最大4名様くらい(応相談)</span><br>
      <span class="text-xs font-bold　text-slate-700">お支払いはPayPalでお願いしております</span><br>
    </div>
    <div class="bg-slate-200 px-10 py-6 mt-16">
      <h3 class="text-center text-lg font-bold text-slate-700 underline">ご予約の手順</h3>
       <p class="text-center text-lg font-bold text-red-600 mt-8">
        申し訳ございませんが、<a href="/guest_house/contact" class="font-bold underline">お問い合わせフォーム</a>からご相談ください(*´･人･*)
      </p>
      <ol class="mt-6">
        <li class="font-bold line-through ">1.<a href="#calendar" class="font-bold underline">宿泊カレンダー</a>で予約可能な日程の確認をお願いします。</li>
        <li class="font-bold mt-2 line-through">2.希望の日程が「宿泊可能」となっていたら、下の<a href="#form" class="font-bold underline">申し込みフォーム</a>に記入の上送信をお願いします。</li>
        <li class="font-bold mt-2 line-through">3.管理人から確認のメールを返信させていただき、メール上で予約確定となります。</li>
      </ol>
      <p class="text-sm font-bold text-red-600 mt-8">
        ・管理人の他に2歳の子供が同じ家で生活しております。ご了承ください。
      </p>
      <p class="text-sm font-bold text-red-600">
        ・お食事のご用意はございませんので、自炊か外食でお願いしております。
      </p>
    </div>
    <h2 class="mt-24 text-slate-700 text-xl font-bold text-center" id="calendar">宿泊カレンダー</h2>
    <p class="text-sm font-bold mt-8">
      現在こちらのカレンダーに「宿泊可能」は表示されません。<br>
      「不在」以外の日程は個別で相談と言う形になります。お手数をおかけします(*´･人･*)<br><br>
      また、こちらのカレンダー上で「開発スペース開放」となっている時間帯は二階の開発スペースを無料開放中です!<br>
      <span>特にご予約不要でご自由にご利用いただけます!ゲストハウスを一緒に作りつつ、一緒にお仕事しませんか^^</span>
    </p>
    <p class="text-slate-700　text-sm mt-2">
      詳しくは<a href ="https://dropin8.site/guest_house/news/g-3c7719r" class="underline">こちらの記事</a>をご覧ください♫
    </p>
    <iframe class="w-full mt-6" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&src=MjZiYjA4M2E1NGY0YTdlNzc5MjAyMjcxYmJmNmQ3NmRjYjFmMzNhODcwMjVlNjRkODk0OGNjMTkyMDA5ZTE3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NGJlNTYxYmYzY2M4OTRjZDI4YzI0MTNkNTQ5ODgzNDA4Yjg2NjIyYWUyNDE3MmNlNTZmMTU2ZDUyNjIyMjlkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NTM1NmE5Njk3OWZmY2YwMTIxOTk0NzEzNzkwZWFlMTg1M2JhZTQzMjc3MjUwMWI3YmVjYTMyYWM0ZmRmMTE2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5&color=%23B39DDB&color=%23c94c74" style="border-width:0" height="600" frameborder="0" scrolling="no"></iframe>
  </section>
  <div class="bg-slate-100">
    <section class="section" id="form">
      <h2 class="text-slate-700 font-bold text-xl text-center">申し込みフォーム</h2>
      <iframe class="w-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfVfmJqvZoKZa13vGnt2Ho6ZuWUvrQnGZVwQE69gbBxdSyZkw/viewform?embedded=true" height="1850" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </section>
  </div>
</template>