<script setup lang="ts">
import type { Patient } from '~/types/patient'
import { formatDate } from '~/utils/date'
import CalendarIcon from '~/assets/icons/calendar-icon.svg'
import FemaleIcon from '~/assets/icons/female-icon.svg'
import PhoneIcon from '~/assets/icons/phone-icon.svg'
import InsuranceIcon from '~/assets/icons/insurance-icon.svg'

defineProps<{ patient: Patient }>()
</script>

<template>
  <aside class="panel profile-card">
    <img class="profile-image" :src="patient.profile_picture" :alt="patient.name" />
    <h2>{{ patient.name }}</h2>
    <div class="profile-detail">
      <span><img :src="CalendarIcon" alt="" /></span>
      <p>Date Of Birth<strong>{{ formatDate(patient.date_of_birth) }}</strong></p>
    </div>
    <div class="profile-detail">
      <span><img :src="FemaleIcon" alt="" /></span>
      <p>Gender<strong>{{ patient.gender }}</strong></p>
    </div>
    <div class="profile-detail">
      <span><img :src="PhoneIcon" alt="" /></span>
      <p>Contact Info.<strong>{{ patient.phone_number }}</strong></p>
    </div>
    <div class="profile-detail">
      <span><img :src="PhoneIcon" alt="" /></span>
      <p>Emergency Contacts<strong>{{ patient.emergency_contact }}</strong></p>
    </div>
    <div class="profile-detail">
      <span><img :src="InsuranceIcon" alt="" /></span>
      <p>Insurance Provider<strong>{{ patient.insurance_type }}</strong></p>
    </div>
    <button>Show All Information</button>
  </aside>
</template>
