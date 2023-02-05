<script setup>
import AppHeader from '@/components/AppHeader.vue'
import MyCard from '@/components/MyCard.vue'
import { useDialogStore } from '@/store/DialogStore.js'
import { storeToRefs } from 'pinia'

// const router = useRouter()

const store = useDialogStore()

const { displayModal1, displayModal2, displayModal3 } = storeToRefs(store)
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
    <!-- First Modal -->
    <Dialog
      header="Header"
      v-model:visible="displayModal1"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <template #footer>
        <Button label="Close modal 1" icon="pi pi-check" @click="toggle" autofocus />
      </template>
    </Dialog>
    <MyCard
      title="Second sentence"
      imgSrc="csps-7owers.png"
      alt="Alternative bo7owers animoji"
      content="I have visited 38 countries so far"
      btnLabel="Check Answer 2"
      modalNumber="displayModal2"
    />
    <!-- Second Modal -->
    <Dialog
      header="Header"
      v-model:visible="displayModal2"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <template #footer>
        <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
      </template>
    </Dialog>
    <MyCard
      title="Third sentence"
      imgSrc="animoji.png"
      alt="Old bo7owers animoji"
      content="I have been inside a space rocket"
      btnLabel="Check Answer 3"
      modalNumber="displayModal1"
    />
    <!-- Third Modal -->
    <Dialog
      header="Header"
      v-model:visible="displayModal3"
      :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
      :style="{ width: '50vw' }"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <template #footer>
        <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
      </template>
    </Dialog>
  </div>
</template>
