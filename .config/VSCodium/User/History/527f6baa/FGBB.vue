<script setup>
import { h, ref, watch } from 'vue'
import debounce from 'debounce'

const searchTerm = ref(' ')
const isLoading = ref(false)
const productArray = ref([])

const findProducts = debounce(async term => {
  try {
    if (term === 0) return (productArray.value = [])
    isLoading.value = true
    const findTerms = await fetch(`https://dummyjson.com/products/search?q=${term}&limit=10`)
    productArray.value = findTerms.productArray
    console.table(productArray.value)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}, 300)

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul class="list-disc">
      <li v-for="product in productArray" :key="product.id">{{ product.price }} {{ product.title }}</li>
    </ul>
    <div class="loading" v-if="isLoading">Loading...</div>
  </div>
</template>
