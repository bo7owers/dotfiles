<script setup>
import { ref } from 'vue'

const toWhom = ref('')
const whoSends = ref('')
const printPage = () => {
  print()
}
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div>
      <div class="w-full max-w-2xl p-4 rounded bg-red-400 text-white">
        <div class="border-2 rounded flex flex-col md:flex-row md:items-center md:gap-8 p-4">
          <img src="/assets/santa.svg" alt="" class="max-w-[12em]" />
          <div>
            <h1 class="font-serif text-4xl">Happy Holidays!</h1>
            <div class="mt-4 bg-white text-black p-2 rounded block w-full">To: {{ toWhom }}</div>
            <div class="mt-2 bg-white text-black p-2 rounded block w-full">From: {{ whoSends }}</div>
          </div>
        </div>
      </div>
      <form class="v-model-area">
        <div class="mt-3">
          <label for="to" class="block">To:</label>
          <input
            type="text"
            name="to"
            id="to"
            placeholder="Your special person"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:-red-500 focus:border-red-500 focus:outline-2 outline-red-500 block w-full p-2"
            v-model="toWhom"
          />
        </div>
        <div class="mt-3">
          <label for="from">From:</label>
          <input
            type="text"
            name="from"
            id="from"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 hover:ring-emerald-700 block w-full p-2"
            placeholder="Someone who loves them"
            v-model="whoSends"
          />
        </div>
        <div class="mt-4 flex justify-end w-full">
          <button
            @click.prevent="printPage"
            class="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded w-1/3"
          >
            Print Card
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@media print {
  .v-model-area,
  footer {
    display: none;
  }
}
</style>
