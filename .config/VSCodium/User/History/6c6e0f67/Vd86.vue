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
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <ChristmasLights class="bg-cyan-900" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.cool-bg{
  animation: bg-change 4s ease-in-out infinite;
}

@keyframes bg-change{
  0%{
    background-color: #164e63;;
  }

  50%{
    background-color: #991b1b;
  }

  75%{
    background-color: #fcd34d;
  }

}

</style>