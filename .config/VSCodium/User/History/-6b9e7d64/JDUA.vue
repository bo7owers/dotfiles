<script setup>
import presents from './presents.json'
import { computed } from 'vue'

let presentsArray = []
const sortedGifts = computed(() => {
  for (const present in presents) {
    return presentsArray.push(presents[present].dimensions.width * presents[present].dimensions.height)
  }
})

console.log(presentsArray)

const sortGifts = () => {}
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
          :data-surface="sortedGifts"
        />
      </div>
    </div>
  </div>
</template>
