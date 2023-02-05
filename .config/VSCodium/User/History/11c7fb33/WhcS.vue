<script setup lang="ts">
interface Props {
  size: number
}

const props = withDefaults(defineProps<Props>(), {
  size: Number,
})
</script>
<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />
    <div class="flex flex-row justify-center">
      <!-- This div is styled for the tree sections, but it's not complete -->
      <div
        class="absolute bg-yellow-500 w-4 h-4 flex justify-center items-center z-50 top-5 star"
        v-if="size === 1"
      ></div>
      <div
        class="absolute bg-yellow-500 w-4 h-4 flex justify-center items-center z-50 top-5 star-inverted"
        v-if="size === 1"
      ></div>
      <div class="relative rounded-full bg-green w-16 h-16 flex justify-center items-center" v-for="dot in size">
        <div class="absolute rounded-full bg-red-500 w-4 h-4 flex justify-center items-center"></div>
      </div>
    </div>
  </div>
  <div class="log">
    <div class="bg-orange-900 w-10 h-16" v-if="size === 7"></div>
  </div>
</template>

<style scoped>
.star {
  top: 13em;
  rotate: 45deg;
}
.star-inverted {
  top: 13em;
  rotate: 0;
}

.log {
  position: relative;
  top: 16em;
  left: -15.25em;
}
</style>
