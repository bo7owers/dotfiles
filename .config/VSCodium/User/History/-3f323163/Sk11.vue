<script setup>
import { ref, watch } from 'vue'
import { useItemComparison } from '../composables/itemComparison'
const { items, comparison, fetching } = useItemComparison()

const selected = ref()

watch(selected, (newItem, oldItem)=>{
    comparison.value = ite
})
</script>

<template>
    <select v-model="selected" class="p-2 border-2 border-gray-dark">
        <option disabled value="">Select an item</option>
    </select>
</template>
