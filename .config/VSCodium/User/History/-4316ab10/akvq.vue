<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { useRouter } from 'vue-router'
import MyCard from '@/component/MyCard.vue'
// const router = useRouter()
</script>
<template>
  <AppHeader>How well do you know me?</AppHeader>
  <div class="text-center">
    <MyCard
      title="First sentence"
      imgSrc="bo7owers-gh.jpeg"
      alt="Bo7owers Animoji"
      content="I like dessert pizza (with pineapple)"
      btnLabel="Check Answer"
    />

    <RouterLink to="/clue-2">Clue 2</RouterLink>
  </div>
</template>
