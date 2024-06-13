import { computed } from 'vue'
import { useIubendaStore } from '../store/IubendaStore'

declare global {
  interface Window {
    dataLayer: any
    __iubCategories: any
    _iub: any
  }
}

export function useIubenda() {
  const store = useIubendaStore()

  const iubendaShouldLog = computed(() => store.log)
  const clickupFormsEnabled = computed(() => store.clickupFormsEnabled)
  const mauticEnabled = computed(() => store.mauticEnabled)
  const youtubeEnabled = computed(() => {
    if (iubendaShouldLog.value) {
      console.log('youtubeEnabled', store.youtubeEnabled)
    }
    return store.youtubeEnabled
  })
  const livechatEnabled = computed(() => store.livechatEnabled)

  const consentGivenForPurpose1 = computed(() => store.consentGivenForPurpose1)
  const consentGivenForPurpose2 = computed(() => store.consentGivenForPurpose2)
  const consentGivenForPurpose3 = computed(() => store.consentGivenForPurpose3)
  const consentGivenForPurpose4 = computed(() => store.consentGivenForPurpose4)
  const consentGivenForPurpose5 = computed(() => store.consentGivenForPurpose5)

  const necessaryEnabled      = computed(() => store.necessaryEnabled)     // level 1
  const functionalityEnabled  = computed(() => store.functionalityEnabled) // level 2
  const experienceEnabled     = computed(() => store.experienceEnabled)    // level 3
  const measurementEnabled    = computed(() => store.measurementEnabled)   // level 4
  const marketingEnabled      = computed(() => store.marketingEnabled)     // level 5

  return {
    iubendaShouldLog,
    clickupFormsEnabled,
    mauticEnabled,
    youtubeEnabled,
    livechatEnabled,
    consentGivenForPurpose1,
    consentGivenForPurpose2,
    consentGivenForPurpose3,
    consentGivenForPurpose4,
    consentGivenForPurpose5,
    necessaryEnabled,
    functionalityEnabled,
    experienceEnabled,
    measurementEnabled,
    marketingEnabled
  }
}
