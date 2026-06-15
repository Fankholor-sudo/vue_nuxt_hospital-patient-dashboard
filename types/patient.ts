export interface BloodPressureValue { value: number; levels: string }
export interface DiagnosisHistoryItem {
  month: string
  year: number
  blood_pressure: { systolic: BloodPressureValue; diastolic: BloodPressureValue }
  heart_rate: BloodPressureValue
  respiratory_rate: BloodPressureValue
  temperature: BloodPressureValue
}
export interface DiagnosticItem { name: string; description: string; status: string }
export interface Patient {
  name: string
  gender: string
  age: number
  profile_picture: string
  date_of_birth: string
  phone_number: string
  emergency_contact: string
  insurance_type: string
  diagnosis_history: DiagnosisHistoryItem[]
  diagnostic_list: DiagnosticItem[]
  lab_results: string[]
}
