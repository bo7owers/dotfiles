<script setup>
import presents from './presents.json'
import {useCycleList} from '@vueuse/core'
import { use } from 'chai';

const {state, next} = useCycleList()

const modes = {
  base: ()
}
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
