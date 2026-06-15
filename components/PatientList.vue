<script setup lang="ts">
import type { Patient } from '~/types/patient'
import MoreHorizIcon from '~/assets/icons/more-horiz-icon.svg'
import SearchIcon from '~/assets/icons/search-icon.svg'

defineProps<{ patients: Patient[]; selectedName?: string }>()
const emit = defineEmits<{ onChangePatient: [patient: Patient]}>()
</script>

<template>
  <aside class="panel patient-list">
    <div class="section-title inline-title">
      <h2>Patients</h2>
      <span>
        <button class="icon-button icon-button-bottom-margin" type="button" aria-label="seach">
          <img :src="SearchIcon" alt="" />
        </button>
      </span>
    </div>
    <div class="patient-list-scroll">
      <article
        v-for="(patient, index) in patients"
        :key="index"
        class="patient-item"
        :class="{ selected: patient.name === selectedName }"
      >
        <img
          class="patient-picture clickable"
          @click="emit('onChangePatient', patient)"
          :src="patient.profile_picture"
          :alt="patient.name"
        />
        <div class="clickable" @click="emit('onChangePatient', patient)">
          <strong>{{ patient.name }}</strong>
          <span>{{ patient.gender }}, {{ patient.age }}</span>
        </div>
        <button class="icon-button icon-button-bottom-margin" type="button" aria-label="more-horiz">
          <img :src="MoreHorizIcon" height="5" alt="" />
        </button>
      </article>
    </div>
  </aside>
</template>
