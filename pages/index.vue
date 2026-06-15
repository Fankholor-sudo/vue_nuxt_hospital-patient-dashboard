<script setup lang="ts">
const { patients, selectedPatient, loading, error, fetchPatients, selectPatient } = usePatients()

onMounted(() => {
  fetchPatients()
})
</script>

<template>
  <section class="dashboard-page">
    <div v-if="loading" class="status-card">Loading patient dashboard...</div>
    <div v-else-if="error" class="status-card error">{{ error }}</div>
    <template v-else-if="selectedPatient">
      <PatientList :patients="patients" :selected-name="selectedPatient.name" @onChangePatient="selectPatient" />
      <main class="dashboard-main">
        <DiagnosisHistory :patient="selectedPatient" />
        <DiagnosticList :items="selectedPatient.diagnostic_list" />
      </main>
      <section class="right-column">
        <PatientProfile :patient="selectedPatient" />
        <LabResults :results="selectedPatient.lab_results" />
      </section>
    </template>
  </section>
</template>
