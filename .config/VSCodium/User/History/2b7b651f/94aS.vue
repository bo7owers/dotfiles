<script setup>
import { useItemComparison } from '@/composables/itemComparison'
// const { isFetchingItems, availableItems, itemsToCompare } = useItemComparison()

// const itemsByDescPrice = computed(() => {
//     ;[...comparison.value].sort((a, b) => b.price - a.price)
// })
</script>
<template>
    <p class="mx-5 text-center">
        You can get <strong>n</strong> <em>X items</em> for about the same price
        as a single <em>Y item</em>
    </p>
</template>
