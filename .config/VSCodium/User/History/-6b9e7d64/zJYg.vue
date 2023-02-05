<script setup>
import presents from './presents.json'
import { useCycleList } from '@vueuse/core'
import { computed } from 'vue'

const { state, next } = useCycleList(['base', 'ascending'])

const modes = {
  base: (presentA, presentB) => presentA.id - presentB.id,
  ascending: (presentA, presentB) =>
    presentA.dimensions.height * presentA.dimensions.width - presentB.dimensions.height * presentB.dimensions.width,
}

const sortGifts = computed(() => [...presents].sort(modes[state.value]))
</script>

<template>
  <p>
    made by
    <a
      href="http://github.com/bo7owers"
      target="_blank"
      rel="noopener noreferrer"
      class="underline rounded mx-auto text-lime-700 hover:text-cyan-800 .focus:text-cyan-800 transition-colors"
      title="opens in a new tab"
      >bo7owers</a
    >
  </p>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sortGifts"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
          :data-surface="present.dimensions.height * present.dimensions.width"
        />
      </div>
      <div class="flex justify-center mt-5">
        <button @click="next()" class="rounded-full bg-purple-600 text-white p-2 hover:bg-purple-900">
          Toggle Sort
        </button>
      </div>
    </div>
  </div>
</template>
