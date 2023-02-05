<template>
  <div class="w-full h-full flex justify-center items-center">
    <ChristmasTree :size="7" />
    <p class="info" v-if="size === 1">
      made by &nbsp;
      <a
        href="http://github.com/bo7owers"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute underline rounded mx-auto text-lime-700 hover:text-cyan-800 .focus:text-cyan-800 transition-colors"
        title="opens in a new tab"
      >
        bo7owers</a
      >
    </p>
  </div>
</template>

<script setup>
import ChristmasTree from './ChristmasTree.vue'
</script>
