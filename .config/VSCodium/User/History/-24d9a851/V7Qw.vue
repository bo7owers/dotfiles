<script setup>
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from './components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
import { computed } from 'vue'

const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')
// computed props
const daysTo = computed(() => {
  let daylength = 1000 * 60 * 60 * 24
  // get complete amount of time left till christmas
  let fullChristmasDay = (christmas.getTime() - now.value.getTime()) / daylength
  // round it to get a specific amount of days
  let roundChristmasDate = Math.floor(fullChristmasDay)
  return { fullChristmasDay, roundChristmasDate }
})
// access the results from daysTo
let fullDaysToChristmas = daysTo.value.fullChristmasDay
let daysToChristmas = daysTo.value.roundChristmasDate

const hoursTo = computed(() => {
  // get full amount of hours left till christmass
  let fullChristmasHours = (fullDaysToChristmas - daysToChristmas) * 24
  // round hours to get specific amount of days
  let roundChristmasHours = Math.floor(fullChristmasHours)
  return { fullChristmasHours, roundChristmasHours }
})
let fullHoursToChristmas = hoursTo.value.fullChristmasHours
let hoursToChristmas = hoursTo.value.roundChristmasHours

const minutesTo = computed(() => {
  // get full amount of minutes left till christmas
  let fullChristmasMins = (fullHoursToChristmas - hoursToChristmas) * 60
  let roundChristmasMins = Math.floor(fullChristmasMins)
  return { fullChristmasMins, roundChristmasMins }
})
let fullMinsToChristmas = minutesTo.value.fullChristmasMins
let minsToChristmas = minutesTo.value.roundChristmasMins

const secondsTo = computed(() => {
  // get full amount of seconds till christmas
  let fullChristmasSecs = (fullMinsToChristmas - minsToChristmas) * 60
  let roundChristmasSecs = Math.floor(fullChristmasSecs)

  return roundChristmasSecs
})
</script>
<template>
  <div class="w-full h-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]" aria-live="polite">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="daysToChristmas" />
          <CountdownSegment label="hours" :number="hoursToChristmas" />
          <CountdownSegment label="minutes" :number="minsToChristmas" />
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
