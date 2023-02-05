<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import { computed } from 'vue'
let daylength = 1000 * 60 * 60 * 24

const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')
// ! create individual computed props to keep reactivity hehe
// get complete amount of time left till christmas
const fullChristmasDay = computed(() => {
  return (christmas.getTime() - now.value.getTime()) / daylength
})
const daysTo = computed(() => {
  // round it to get a specific amount of days
  return Math.floor(fullChristmasDay.value)
})

const fullChristmasHours = computed(() => {
  // get full amount of hours left till christmass
  return (fullChristmasDay.value - daysTo.value) * 24
})

const hoursTo = computed(() => {
  // round hours to get specific amount of days
  return Math.floor(fullChristmasHours.value)
})

const fullChristmasMins = computed(() => {
  // get full amount of minutes left till christmas
  return (fullChristmasHours.value - hoursTo.value) * 60
})
const minutesTo = computed(() => {
  return Math.floor(fullChristmasMins.value)
})

const fullChristmasSecs = computed(() => {
  // get full amount of seconds till christmas
  return (fullChristmasMins.value - minutesTo.value) * 60
})

const secondsTo = computed(() => {
  return Math.floor(fullChristmasSecs.value)
})
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]" aria-live="polite">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="daysTo" />
          <CountdownSegment label="hours" :number="hoursTo" />
          <CountdownSegment label="minutes" :number="minutesTo" />
          <CountdownSegment label="seconds" :number="secondsTo" />
        </main>
      </div>
      <p>
        made by
        <a
          href="http://github.com/bo7owers"
          target="_blank"
          rel="noopener noreferrer"
          class="underline rounded mx-auto text-lime-700 hover:text-cyan-800 .focus:text-cyan-800 transition-colors"
          title="opens in a new tab"
          >bo7owers</a
        >
      </p>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-100;
}
</style>
