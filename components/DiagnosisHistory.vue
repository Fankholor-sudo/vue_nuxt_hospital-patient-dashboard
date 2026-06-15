<script setup lang="ts">
import type { Patient } from '~/types/patient'
import { getLatestDiagnosis } from '~/utils/patient'
import RespiratoryIcon from '~/assets/icons/respiratory-rate-icon.svg'
import HeartBPMIcon from '~/assets/icons/heart-bpm-icon.svg'
import TemperatureIcon from '~/assets/icons/temperature-icon.svg'

const props = defineProps<{ patient: Patient }>()
const latest = computed(() => getLatestDiagnosis(props.patient))
</script>

<template>
  <section class="panel diagnosis-history">
    <h2>Diagnosis History</h2>
    <BloodPressureChart :history="patient.diagnosis_history" />
    <div class="vital-grid" v-if="latest">
      <VitalCard
        title="Respiratory Rate"
        :value="`${latest.respiratory_rate.value} bpm`"
        :level="latest.respiratory_rate.levels"
        :icon="RespiratoryIcon"
        tone="blue"
      />
      <VitalCard
        title="Temperature"
        :value="`${latest.temperature.value}°F`"
        :level="latest.temperature.levels"
        :icon="TemperatureIcon"
        tone="red"
      />
      <VitalCard
        title="Heart Rate"
        :value="`${latest.heart_rate.value} bpm`"
        :level="latest.heart_rate.levels"
        :icon="HeartBPMIcon"
        tone="pink"
      />
    </div>
  </section>
</template>
