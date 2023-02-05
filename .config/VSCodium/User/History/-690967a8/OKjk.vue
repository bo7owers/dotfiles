<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
const hasSetup = ref(false)
const setup = ref(null)
const delivery = ref(null)
const showDelivery = ref(false)
const showBtn = ref(false)

async function getJoke() {
  try {
    const apiResp = await axios.get('https://v2.jokeapi.dev/joke/christmas')
    setup.value = apiResp.data.setup
    delivery.value = apiResp.data.delivery
    hasSetup.value = true
  } catch (error) {
    console.log(error)
    hasSetup.value = false
  }
}
const delayBtn = () => setInterval(() => (showBtn.value = true), 700)

const drumRoll = () => {
  showDelivery.value = true
  delayBtn()
}

const reset = () => {
  hasSetup.value = false
  setup.value = null
  delivery.value = null
  showDelivery.value = null
  showBtn.value = false
}
</script>
<template>
  <p>
    made by
    <a
      href="http://github.com/bo7owers"
      target="_blank"
      rel="noopener noreferrer"
      class="underline rounded mx-auto text-lime-700 hover:text-cyan-800 transition-colors"
      title="opens in a new tab"
      >bo7owers</a
    >
  </p>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <button
      @click="getJoke"
      class="bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded mx-auto"
      v-if="!hasSetup"
    >
      Tell me a christmas joke
    </button>
    <div class="setup m-3 block" aria-live="polite">
      <div class="setup-delivery flex flex-col" v-if="hasSetup">
        <p v-if="!showDelivery">{{ setup }}</p>
        <button
          @click="drumRoll"
          class="bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded mx-auto mt-3"
          v-if="!showDelivery"
        >
          Drum roll...
        </button>
        <p v-if="showDelivery">{{ delivery }}</p>
        <button
          class="bg-rose-800 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded mx-auto mt-3"
          v-if="showBtn && showDelivery"
          @click="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
