<script setup>
import { ref, watch } from 'vue'
import { useItemComparison } from '../composables/itemComparison.js'
const { items, comparison, fetching } = useItemComparison()
const selected = ref()

watch(selected, (newItem, oldItem) => {
    comparison.value = comparison.value.filter((item) => item.id !== oldItem.id)
    items.value.push(newItem)
})
</script>

<template>
    <p v-if="fetching">Loading...</p>
    <select v-model="selected" class="p-2 border-2 border-gray-dark" v-else>
        <option disabled value="">Select an item</option>
        <option v-for="item in items" :key="item.id" :value="item">
            {{ item.title }} ${{ item.price }}
        </option>
    </select>
</template>
