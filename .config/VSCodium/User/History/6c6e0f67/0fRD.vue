<script setup lang="ts">
import ChristmasLights from './ChristmasLights.vue'
withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>
<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />

    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div
        class="absolute bg-yellow-500 w-4 h-4 flex justify-center items-center z-50 top-5 star"
        v-if="size === 1"
      ></div>
      <div
        class="absolute bg-yellow-500 w-4 h-4 flex justify-center items-center z-50 top-5 star-inverted"
        v-if="size === 1"
      ></div>
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <ChristmasLights class="cool-bg" />
      </div>
    </div>
  </div>
  <div class="log">
    <div class="bg-orange-900 w-10 h-16" v-if="size === 7"></div>
  </div>
</template>
<style scoped>
.star {
  scale: 1.5;
  top: 12.75rem;
  rotate: 45deg;
}
.star-inverted {
  scale: 1.5;
  top: 12.75rem;
  rotate: 0;
}
.log {
  position: relative;
  top: 13em;
  left: -11.75em;
}
.cool-bg {
  animation: bg-change 4s ease-in-out infinite;
}

/* Large displays */
@media screen and (min-width: 992px) {
  .star {
    top: 12.5em;
  }
  .star-inverted {
    top: 12.5em;
  }
  .log {
    top: 16em;
    left: -15.25em;
  }
}

@keyframes bg-change {
  0% {
    background-color: #164e63;
  }

  50% {
    background-color: #991b1b;
  }

  75% {
    background-color: #fcd34d;
  }

  100% {
    background-color: #16a34a;
  }
}
</style>
