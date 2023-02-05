<template>
  <div class="w-full h-full flex justify-center items-center">
    <ChristmasTree :size="4" />
    <ChristmasTree :size="5" />
    <ChristmasTree :size="6" />
    <ChristmasTree :size="7" />
  </div>
</template>

<script setup>
import ChristmasTree from './ChristmasTree.vue'
</script>
