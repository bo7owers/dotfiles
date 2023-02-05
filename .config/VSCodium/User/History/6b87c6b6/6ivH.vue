<script setup>
import ItemSelect from './components/ItemSelect.vue'
import ComparisonSummary from './components/ComparisonSummary.vue'
import { onMounted } from 'vue';
const { items, comparison, fetching } = useItemComparison()

onMounted(async =()=>{
  try{
    const receivedProducts = await axios.get('https://dummyjson.com/products')
  items.value = receivedProducts
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
