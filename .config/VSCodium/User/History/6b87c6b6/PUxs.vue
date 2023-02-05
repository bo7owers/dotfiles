<script setup>
import axios from 'axios'
// import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from '@/components/ComparisonSummary.vue'
import { onMounted } from 'vue'
// import { useItemComparison } from '@/composables/itemComparison'
// const { items, fetching, comparison } = useItemComparison()

onMounted(async () => {
    try {
        const receivedProducts = await axios.get(
            'https://dummyjson.com/products'
        )
        // items.value = receivedProducts
        console.log(receivedProducts)
    } catch (error) {
        console.log(error)
    } finally {
        // fetching.value = false
    }
})
</script>

<template>
    <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
        <h1 class="text-4xl font-bold">Select items to compare</h1>
        <div class="flex flex-col gap-5 justify-center">
            <ItemSelect />
            <ItemSelect />
        </div>
        <ComparisonSummary />
    </div>
</template>
