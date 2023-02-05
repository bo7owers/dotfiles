<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import { useRouter } from 'vue-router'
import CustomCard from '@/component/CustomCard.vue'
// const router = useRouter()
</script>
<template>
  <AppHeader>How well do you know me?</AppHeader>
  <div class="text-center">
    <CustomCard
      title="First sentence"
      imgSrc="bo7owers-gh.jpeg"
      alt="Bo7owers Animoji"
      content="I like dessert pizza (with pineapple)"
      btnLabel="Check Answer"
    />

    <RouterLink to="/clue-2">Clue 2</RouterLink>
  </div>
</template>
