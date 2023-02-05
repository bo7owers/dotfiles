<script setup>
import presents from './presents.json'
import { useCycleList } from '@vueuse/core'
import { computed } from 'vue'

const modes = {
  base: (presentA, presentB) => presentA.id - presentB.id,
  ascending: (presentA, presentB) =>
    presentA.dimensions.height * presentA.dimensions.width - presentB.dimensions.height * presentB.dimensions.width,
}

const { state, next } = useCycleList(['base', 'ascending'])
const sortGifts = computed(() => [...presents].sort(modes[state.value]))
</script>

<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in presents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
          :data-surface="present.dimensions.height * present.dimensions.width"
        />
      </div>
      <button @click="next()">Sort Gifts</button>
    </div>
  </div>
</template>
