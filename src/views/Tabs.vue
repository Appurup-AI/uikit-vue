<script setup>
import { ref } from 'vue'
import Tabs from '@/components/Tabs.vue'

const tabs = [
  { name: 'About', label: 'О проектк' },
  { name: 'Vue', label: 'Про Vue' },
  { name: 'React', label: 'Про React' },
]

const selectedTab = ref('Vue')

const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>
<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab === 'Vue'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, commodi.</div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis laudantium natus mollitia, odio reprehenderit
      corrupti.
    </div>
  </Tabs>
</template>
