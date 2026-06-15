import type { DiagnosisHistoryItem, Patient } from '~/types/patient'

export const getRecentDiagnosisHistory = (history: DiagnosisHistoryItem[], limit = 6)
: DiagnosisHistoryItem[] => {
  return [...history].slice(0, limit).reverse()
}

export const getLatestDiagnosis = (patient: Patient | null): DiagnosisHistoryItem | null => {
  return patient?.diagnosis_history?.[0] ?? null
}
