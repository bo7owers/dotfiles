<script setup>
import { h, ref, watch } from 'vue'
import debounce from 'debounce'

const productArray = ref([])
const isLoading = ref(false)
const searchTerm = ref(' ')

const findProducts = debounce(async term => {
  try {
    if (term === 0) return (productArray.value = [])
    isLoading.value = true
    const findTerms = await await (await fetch(`https://dummyjson.com/products/search?q=${term}&limit=10`)).json()
    productArray.value = findTerms.products
    console.table(findTerms)
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}, 300)

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <ul class="list-disc" v-if="!isLoading">
      <li v-for="product in productArray" :key="product.id">
        {{ product.title }} ${{ product.price }}
        <img
          :src="product.thumbnail"
          class="bg-white border-solid border-2 border-sky-500 rounded max-w-xs object-cover"
          :alt="product.description"
        />
      </li>
    </ul>
    <div class="loading" v-else-if="isLoading">Loading...</div>
  </div>
</template>
