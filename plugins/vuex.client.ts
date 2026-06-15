import { patientStore } from '~/store/patients'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(patientStore)
})
