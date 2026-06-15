<script setup lang="ts">
import { getIndicator } from '~/utils/direction-indicator'

const props = defineProps<{
  title: string;
  value: string;
  level: string;
  icon: string;
  tone: 'blue' | 'red' | 'pink'
}>()

const indicator = computed(() => getIndicator(props.level))
</script>

<template>
  <article class="vital-card" :class="tone">
    <div class="vital-icon">
      <img :src="icon" width="65" height="65" alt="" />
    </div>
    <p>{{ title }}</p>
    <strong>{{ value }}</strong>
    <span>
      <img v-if="indicator" :src="indicator" alt="" class="arrow-icon" />
      {{ level }}
    </span>
  </article>
</template>
