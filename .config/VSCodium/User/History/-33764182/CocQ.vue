<script setup>
import { ref } from 'vue'

const props = defineProps({
  imgSrc: { type: String, required: false },
  title: { type: String, required: true },
  subTitle: { type: String, required: false },
  content: { type: String, required: false },
  btnLabel: { type: String, required: false },
  alt: { type: String, required: false },
  modalNumber: { type: String, required: true },
})
const imgURL = new URL(`../assets/imgs/${props.imgSrc}`, import.meta.url).href
const altText = !props.alt === undefined ? props.alt : ''

const thisModal = ref(false)

const toggle = () => {
  thisModal.value === false ? (thisModal.value = true) : (thisModal.value = false)
}
</script>

<template>
  <Dialog
    position="center"
    dismissableMask="true"
    modal="true"
    header="Header"
    v-model:visible="thisModal"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
  >
    <template #header>
      <h3 class="font-semibold text-lg">
        Response to "<span class="italic">{{ title }}</span
        >"
      </h3>
    </template>
    <p class="">{{ content }} <span class="font-bold text-red-900 underline">is false!</span></p>

    <p class="mt-3">Do not share personal information online.</p>
    <template #footer>
      <Button @click="toggle" class="my-class my-class-green" :label="`Close Modal`" autofocus />
    </template>
  </Dialog>

  <Card class="w-64">
    <template #header>
      <img :src="imgURL" :alt="altText" style="height: 15rem; object-fit: cover" class="rounded-md" />
    </template>
    <template #title>
      <h2>{{ title }}</h2>
    </template>
    <template #subtitle v-if="subTitle">
      {{ subTitle }}
    </template>
    <template #content>
      <p>{{ content }}</p>
    </template>
    <template #footer v-if="btnLabel">
      <Button
        @click="toggle"
        :label="btnLabel"
        class="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded w-1/3 my-class my-class-blue"
      />
    </template>
  </Card>
</template>
<style scoped>
.my-class {
  font-weight: bold !important;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 12px;
  width: 100%;
  border: none;
}

.my-class-blue {
  background-color: rgb(3 105 161) !important;
  color: #fff !important;
}
.my-class-blue:hover {
  background-color: rgb(12 74 110) !important;
}
.my-class-blue:focus {
  /* outline-color: rgb(3 105 161) !important;*/
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgb(3 105 161), 0 1px 2px 0 black !important;
}

.my-class-green {
  background-color: #42b883;
  color: #000;
}
.my-class-green:hover {
  background-color: #246045 !important;
  color: #fff !important;
}
.my-class-green:focus {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #42b883, 0 1px 2px 0 black !important;
}
</style>

<style>
.p-dialog-mask::before {
  content: '';
  position: absolute;
  background-color: #333;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
}
</style>
