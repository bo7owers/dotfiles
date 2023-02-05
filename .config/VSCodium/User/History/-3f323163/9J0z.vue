<script setup>
import { ref } from 'vue'
import { useItemComparison } from '../composables/itemComparison'
// const { items, comparison, fetching } = useItemComparison()

const selected = ref()
</script>

<template>
    <select v-model="selected" class="p-2 border-2 border-gray-dark">
        <option disabled value="" v-for="item in items.value">
            Select an item
        </option>
    </select>
</template>
