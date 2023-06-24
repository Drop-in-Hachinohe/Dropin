<script setup>
import { ref } from "vue";
</script>
<template>
  <section class="section mt-16">
    <h2 class="text-slate-700 text-4xl text-center">RESERVE</h2>
    <p class="text-base text-slate-700 text-center">ご予約</p>
    <div class="text-center mt-16">
      <span class="underline underline-offset-8 text-slate-700">
        <span class="text-xl font-bold"
          >大人<span class="text-ms font-bold">（中学生以上）</span
          >:&nbsp;</span
        >
        <span class="text-3xl font-bold">5,000</span>
        <span class="text-sm font-bold">円(税込)/1泊</span>
      </span>
    </div>
    <div class="text-center mt-8">
      <span class="underline underline-offset-8 text-slate-700">
        <span class="text-xl font-bold">小学生:&nbsp;</span>
        <span class="text-3xl font-bold">3,000</span>
        <span class="text-sm font-bold">円(税込)/1泊</span>
      </span>
    </div>
    <p class="mt-6 text-center text-xs font-bold">
      お布団が必要ない未就学のお子様は無料です。
    </p>
    <p class="mt-1 text-center text-xs font-bold">
      お支払いはPayPalでお願いしております。
    </p>
    <p class="mt-6 text-center text-sm font-bold mt-6">
      1Fのゲストルームが最大４名様、2階の臨時ゲストルームは最大2名様（合計6名様）までご宿泊いただけます。
    </p>

    <div class="bg-slate-200 px-10 py-6 mt-16">
      <h3 class="text-center text-lg font-bold text-slate-700 underline">
        ご予約の手順
      </h3>
      <ol class="mt-12">
        <li class="font-bold">
          1.<a href="#calendar" class="font-bold underline">宿泊カレンダー</a
          >上で「宿泊可能」と表示されている日程が予約可能な日程ですのでご確認ください。
        </li>
        <li class="font-bold mt-2">
          2.希望の日程が「宿泊可能」となっていたら、<a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfVfmJqvZoKZa13vGnt2Ho6ZuWUvrQnGZVwQE69gbBxdSyZkw/viewform"
            class="font-bold underline"
            >申し込みフォーム</a
          >に記入の上送信をお願いします。
        </li>
        <li class="font-bold mt-2">
          3.Drop
          inのメールアドレス（minato.dropin@gmail.com）から返信、またはお電話（070-6511-3600）させていただき、予約確定となります。
        </li>
      </ol>
      <p class="text-sm font-bold text-red-600 mt-8">
        ・管理人の他に2歳の子供が同じ家で生活しております。ご了承ください。
      </p>
      <p class="text-sm font-bold text-red-600">
        ・お食事のご用意はございませんので、自炊か外食でお願いしております。
      </p>
    </div>
    <h2
      class="mt-24 text-slate-700 text-xl font-bold text-center"
      id="calendar"
    >
      宿泊カレンダー
    </h2>
    <p class="text-sm font-bold mt-8">
      こちらのカレンダー上で「開発スペース開放」となっている時間帯は2階の開発スペースを無料開放中です!<br />
      <span
        >こちらは宿泊されない方でも、ご予約不要でコワーキングスペースとしてご自由にご利用いただけます!ゲストハウスを一緒に作りつつ、一緒にお仕事しませんか^^</span
      >
    </p>
    <p class="text-slate-700 text-sm mt-2">
      詳しくは<a
        href="https://dropin8.site/guest_house/news/g-3c7719r"
        class="underline"
        >こちらの記事</a
      >をご覧ください♫
    </p>
    <iframe
      class="w-full mt-6"
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTitle=0&showCalendars=0&src=MjZiYjA4M2E1NGY0YTdlNzc5MjAyMjcxYmJmNmQ3NmRjYjFmMzNhODcwMjVlNjRkODk0OGNjMTkyMDA5ZTE3ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NGJlNTYxYmYzY2M4OTRjZDI4YzI0MTNkNTQ5ODgzNDA4Yjg2NjIyYWUyNDE3MmNlNTZmMTU2ZDUyNjIyMjlkYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NTM1NmE5Njk3OWZmY2YwMTIxOTk0NzEzNzkwZWFlMTg1M2JhZTQzMjc3MjUwMWI3YmVjYTMyYWM0ZmRmMTE2NkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5&color=%23B39DDB&color=%23c94c74"
      style="border-width: 0"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <div class="flex justify-center mt-10">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfVfmJqvZoKZa13vGnt2Ho6ZuWUvrQnGZVwQE69gbBxdSyZkw/viewform"
        class="btn w-fit bg-teal-600 text-white px-6 py-3 text-lg"
        target="_blank"
        >申し込みフォームはこちら</a
      >
    </div>
  </section>
</template>
