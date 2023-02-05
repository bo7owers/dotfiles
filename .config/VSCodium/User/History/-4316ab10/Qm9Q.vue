<script setup>
import AppHeader from '@/components/AppHeader.vue'
import MyCard from '@/components/MyCard.vue'
</script>
<template>
  <AppHeader>How well do you know me?</AppHeader>
  <div class="flex flex-row gap-5 justify-center">
    <MyCard
      title="First sentence"
      imgSrc="bo7owers-gh.jpeg"
      alt="Bo7owers Animoji"
      content="I like dessert pizza (with pineapple)"
      btnLabel="Check Answer 1"
      modalNumber="displayModal1"
    />
    <MyCard
      title="Second sentence"
      imgSrc="csps-7owers.png"
      alt="Alternative bo7owers animoji"
      content="I have visited 38 countries so far"
      btnLabel="Check Answer 2"
      modalNumber="displayModal2"
    />
    <MyCard
      title="Third sentence"
      imgSrc="animoji.png"
      alt="Old bo7owers animoji"
      content="I have been inside a space rocket"
      btnLabel="Check Answer 3"
      modalNumber="displayModal3"
    />
  </div>
</template>
