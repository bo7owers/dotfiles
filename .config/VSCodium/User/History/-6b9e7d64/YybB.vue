<!-- <script setup>
import presents from './presents.json'
import { useCycleList } from '@vueuse/core'
import { computed } from 'vue'

const modes = {
  base: (presentA, presentB) => presentA.id - presentB.id,
  asceding: (presentA, presentB) =>
    presentA.dimensions.height * presentA.dimensions.width - presentB.dimensions.height * presentB.dimensions.width,
}
const { state, next } = useCycleList()

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
        <button @click="next()">Sort Gifts</button>
      </div>
    </div>
  </div>
</template> -->

<script setup>
import presents from './presents.json'
import { ref, computed } from 'vue'
import { useCycleList } from '@vueuse/core'
// const activeSortMode = ref('default');
const sortModes = {
  default: (a, b) => a.id - b.id,
  asc: (a, b) => a.dimensions.width * a.dimensions.height - b.dimensions.height * b.dimensions.width,
  desc: (a, b) => b.dimensions.width * b.dimensions.height - a.dimensions.width * a.dimensions.height,
}
// const toggleSort = () => {
//   activeSortMode.value = activeSortMode.value === 'default' ? 'asc' : 'default';
//   console.log('toggled', activeSortMode.value)
// }
const { state, next } = useCycleList(['default', 'asc', 'desc'])
// const sortedPresents = computed(() => [...presents].sort(sortModes[activeSortMode.value]))
const sortedPresents = computed(() => [...presents].sort(sortModes[state.value]))
</script>

<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img
          v-for="present in sortedPresents"
          :key="present.id"
          :src="present.src"
          :alt="`Present ${present.id}`"
          data-qa="present"
        />
      </div>
      <button
        @click="next()"
        class="bg-red-600 px-6 py-2 rounded-lg flex items-center justify-center mx-auto mt-8 hover:bg-red-700 text-white"
      >
        Toggle sort
      </button>
    </div>
  </div>
</template>
