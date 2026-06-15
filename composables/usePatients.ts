import { computed } from 'vue'
import { useStore } from 'vuex'
import type { Patient } from '~/types/patient'

export const usePatients = () => {
  const store = useStore()
  return {
    patients: computed<Patient[]>(() => store.getters.patients),
    selectedPatient: computed<Patient | null>(() => store.getters.selectedPatient),
    loading: computed<boolean>(() => store.getters.loading),
    error: computed<string | null>(() => store.getters.error),
    fetchPatients: () => store.dispatch('fetchPatients'),
    selectPatient: (patient: Patient) => store.commit('setSelectedPatient', patient)
  }
}
