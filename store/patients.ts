import { createStore } from 'vuex'
import type { Patient } from '~/types/patient'

interface PatientState {
  patients: Patient[]
  selectedPatient: Patient | null
  loading: boolean
  error: string | null
}

export const patientStore = createStore({
  state: (): PatientState => ({
    patients: [],
    selectedPatient: null,
    loading: false,
    error: null
  }),

  getters: {
    patients: (state: PatientState) => state.patients,
    selectedPatient: (state: PatientState) => state.selectedPatient,
    loading: (state: PatientState) => state.loading,
    error: (state: PatientState) => state.error
  },
  mutations: {
    setLoading(state: PatientState, value: boolean) { state.loading = value },
    setError(state: PatientState, value: string | null) { state.error = value },
    setPatients(state: PatientState, patients: Patient[]) { state.patients = patients },
    setSelectedPatient(state: PatientState, patient: Patient | null) { state.selectedPatient = patient }
  },
  actions: {
    async fetchPatients({ commit }: { commit: (mutation: string, payload?: unknown) => void }) {
      const config = useRuntimeConfig()
      commit('setLoading', true)
      commit('setError', null)
      try {
        const token = btoa(`${config.public.apiUsername}:${config.public.apiPassword}`)
        const patients = await $fetch<Patient[]>(config.public.apiBaseUrl, {
          headers: { Authorization: `Basic ${token}` }
        })
        commit('setPatients', patients)
        commit('setSelectedPatient', patients[0])
      } catch (error) {
        commit('setError', error instanceof Error ? error.message : 'Unable to load patient data')
      } finally {
        commit('setLoading', false)
      }
    }
  }
})
