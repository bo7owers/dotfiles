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
      <div class="relative rounded-full bg-green w-16 h-16 flex justify-center items-center" v-for="dot in props.size">
        <div class="absolute rounded-full bg-red-500 w-2 h-2 flex justify-center items-center"></div>
      </div>
    </div>
  </div>
</template>
