<script setup>
import { ref, computed } from 'vue';
import Api from '../../api/api.js';
import { useRouter } from "vue-router";
import Modal from '@/components/Modal.vue';
import LINE from '@/components/Line.vue'
import KurokamomeLINE from '@/components/LineKurokamome.vue'
import RouteCheck from '@/util/routeCheck.js';

const router = useRouter()

const postData = ref({
  email: '',
  name: '',
  message: '',
  type: '',
});
let modalShow = ref(false);
let errorShow = ref(false);
const isValid = computed(() => {
  return postData.value.email !== '' && postData.value.name !== '' && postData.value.message !== '';
})
const currentRoute = RouteCheck.currentRoute(router.currentRoute._value.path)
postData.value.type = currentRoute

function handleSubmit() {
  if (!isValid.value) return false;
  Api.postContact(postData.value).then((data) => {
  if(data.id) {
    postData.value = {}
    modalShow.value = true;
  } else {
    errorShow.value = true;
  }
});
}
</script>

<template>
  <div class="section">
    <h2 class="text-center text-xl font-bold py-16">お問い合わせ</h2>
    <p v-if="errorShow" class="text-md text-red-600 pb-6 font-bold">
      エラーが発生しました。必須項目を確認して再度送信ボタンを押してください。
      何度もエラーが発生する場合は、お手数ですがminato.dropin@gmail.comまでメールをお願いします。
    </p>
    <form>
      <dl>
        <dd>
          <label for="subject">
            <span class="text-md font-bold">Eメールアドレス</span>
            <span class="text-sm text-red-600 pl-3">※必須</span>
            <span class="text-sm pl-3">(こちらに返信いたします)</span>
          </label>
        </dd>
        <dt>
          <input
            id="email"
            v-model="postData.email"
            name="email"
            type="email"
            required
            class="form-input w-full px-4 py-3 rounded border-slate-300"
          />
        </dt>
      </dl>
      <dl class="mt-10">
        <dd>
          <label for="name" class="text-md font-bold">お名前</label>
          <span class="text-sm text-red-600 pl-3">※必須</span>
        </dd>
        <dt>
          <input
            id="name"
            v-model="postData.name"
            name="name"
            type="text"
            required
            class="form-input w-full px-4 py-3 rounded border-slate-300"
          />
        </dt>
      </dl>
      <dl class="mt-10">
        <dd>
          <label for="message" class="text-md font-bold">お問い合わせ内容</label>
          <span class="text-sm text-red-600 pl-3">※必須</span>
        </dd>
        <dt>
          <textarea
            id="message"
            v-model="postData.message"
            name="message"
            requireds
            class="form-textarea w-full px-4 py-3 rounded border-slate-300" />
        </dt>
      </dl>
      <div class="flex justify-center mt-10">
        <div class="btn w-fit bg-teal-600 text-white px-8 py-4 text-xl"
          :class="{'opacity-25' : !isValid}"
          @click="handleSubmit">
          送信する
        </div>
      </div>
      <p v-if="!isValid" class="text-center text-xs text-slate-500 mt-3">
        全部入力いただけると押せるようになります！
      </p>
    </form>
    <div v-if="currentRoute == 'space'">
      <p class="text-center font-bold text-lg mt-16">Drop inの公式LINEでもOKです！</p>
      <LINE />
    </div>
    <div v-if="currentRoute == 'kurokamome'">
      <p class="text-center font-bold text-lg mt-16">黒かもめの公式LINEでもOKです！</p>
      <KurokamomeLINE />
    </div>
    <Modal v-if="modalShow" @close="modalShow = false">
      <div class="flex flex-col md:flex-row items-center justify-center" >
        <img src="/images/GH/icon/icon_GH_GN_owner.png" class="w-5/12 md:w-3/12"/>
        <div>
          <p>お問い合わせありがとうございます。</p>
          <p>お問い合わせ内容をメールにて送信しました。</p>
          <p>2~3日中に返信させていただきます。</p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="btn w-fit bg-teal-600 text-white px-6 py-3 text-md"
          @click="modalShow = false">閉じる
        </div>
      </div>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>

</style>
