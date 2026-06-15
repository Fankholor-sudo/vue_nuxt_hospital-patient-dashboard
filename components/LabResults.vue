<script setup lang="ts">
import DownloadIcon from '~/assets/icons/download-icon.svg'
defineProps<{ results: string[] }>()
</script>

<template>
  <aside class="panel lab-results">
    <h2>Lab Results</h2>
    <ul>
      <li v-for="result in results" :key="result">
        <span>{{ result }}</span>
        <b><img :src="DownloadIcon" alt=""/></b>
      </li>
    </ul>
  </aside>
</template>
