<script setup lang="ts">
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import type { DiagnosisHistoryItem } from '~/types/patient'
import { getRecentDiagnosisHistory } from '~/utils/patient'
import { getIndicator } from '~/utils/direction-indicator'
import ExpandMoreIcon from '~/assets/icons/expand-more-icon.svg'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const props = defineProps<{ history: DiagnosisHistoryItem[] }>()
const recentHistory = computed(() => getRecentDiagnosisHistory(props.history))
const latestHistory = computed(() => props.history?.[0])

const systolicIndicator = computed(() =>
  getIndicator(latestHistory.value?.blood_pressure.systolic.levels)
)
const diastolicIndicator = computed(() =>
  getIndicator(latestHistory.value?.blood_pressure.diastolic.levels)
)

const chartData = computed(() => ({
  labels: recentHistory.value.map((item) => `${item.month.slice(0, 3)}, ${item.year}`),
  datasets: [
    {
      label: 'Systolic',
      data: recentHistory.value.map((item) => item.blood_pressure.systolic.value),
      borderColor: '#d65fbd',
      backgroundColor: '#d65fbd',
      tension: 0.45,
      pointRadius: 6,
      pointHoverRadius: 7
    },
    {
      label: 'Diastolic',
      data: recentHistory.value.map((item) => item.blood_pressure.diastolic.value),
      borderColor: '#7e6bdc',
      backgroundColor: '#7e6bdc',
      tension: 0.45,
      pointRadius: 6,
      pointHoverRadius: 7
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { enabled: true } },
  scales: {
    y: { min: 60, max: 180, ticks: { stepSize: 20 }, grid: { color: '#d7d0e5' } },
    x: { grid: { display: false } }
  }
}
</script>

<template>
  <section class="blood-pressure-card">
    <div class="chart-header">
      <h3>Blood Pressure</h3>
      <span>
        <span style="margin-right: 10px;">Last 6 months</span>
        <img :src="ExpandMoreIcon" alt="" class="arrow-icon clickable" />
      </span>
    </div>
    <div class="chart-content">
      <div class="chart-box"><Line :data="chartData" :options="chartOptions" /></div>
      <div class="bp-summary" v-if="history.length">
        <div>
          <p><i class="dot pink"></i>Systolic</p>
          <strong>{{ latestHistory?.blood_pressure.systolic.value }}</strong>
          <span>
            <img v-if="systolicIndicator" :src="systolicIndicator" class="arrow-icon" alt="" />
            {{ latestHistory?.blood_pressure.systolic.levels }}
          </span>
        </div>
        <hr />
        <div>
          <p><i class="dot purple"></i>Diastolic</p>
          <strong>{{ latestHistory?.blood_pressure.diastolic.value }}</strong>
          <span>
            <img v-if="diastolicIndicator" :src="diastolicIndicator" class="arrow-icon" alt="" />
            {{ latestHistory?.blood_pressure.diastolic.levels }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
