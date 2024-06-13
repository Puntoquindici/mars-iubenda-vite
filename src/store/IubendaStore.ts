/********************************************************************************
 * Iubenda cookie solution
 *
 * -------------------------------
 * Service list per consent given
 * -------------------------------
 *
 * Purpose 1: Strictly necessary
 * - Google Tag Manager
 * - Iubenda
 * - LogRocket (?)
 *
 * Purpose 2: Basic interactions & functionalities
 * - Clickup Forms
 * - Livechat
 *
 * Purpose 3: Experience enhancement
 * - YouTube video widget
 * - Google Fonts
 * - YouTube Data APIs
 * - Font Awesome
 * - YouTube Video Widgets
 * - CodePen
 *
 * Purpose 4: Measurement
 * - Google Analytics
 * - Google Ads conversion tracking
 * - Google Analytics 4
 * - Beta testing
 *
 * Purpose 5: Targeting & Advertising
 * - Mautic
 * - Google Ads Remarketing
 * - Remarketing with Google Analytics
 *
 ********************************************************************************/
import { defineStore } from 'pinia';

export const useIubendaStore = defineStore('iubendaStore', {
  state: () => ({
    log: true, // if true it logs on the console (debug)
    preference_not_needed: false,
    consent_given: false,
    consent_rejected: false,
    consent_given_purpose: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    } as {
      [key:number]: boolean
    },
    ccpa_opted_out: false,
  }),

  actions: {
    setShouldLog(bValue: boolean) {
      this.log = bValue;
    },
    setPreferenceNotNeeded(bValue: boolean) {
      this.preference_not_needed = bValue;
    },
    setConsetGiven(bValue: boolean) {
      this.consent_given = bValue;
    },
    setConsetRejected(bValue: boolean) {
      this.consent_rejected = bValue;
    },
    setConsetGivenPurpose(iPurpose: number, bValue: boolean) {
      this.consent_given_purpose[iPurpose] = bValue;
    },
    resetConsetGivenPurpose() {
      for (const iPurpose of [1, 2, 3, 4, 5]) {
        this.consent_given_purpose[iPurpose] = false;
      }
    },
    setCcpaOptedOut(bValue: boolean) {
      this.ccpa_opted_out = bValue;
    },
  },

  getters: {
    consentGivenForPurpose1(state) { return consentGivenForPurpose(state, 1)},
    consentGivenForPurpose2(state) { return consentGivenForPurpose(state, 2)},
    consentGivenForPurpose3(state) { return consentGivenForPurpose(state, 3)},
    consentGivenForPurpose4(state) { return consentGivenForPurpose(state, 4)},
    consentGivenForPurpose5(state) { return consentGivenForPurpose(state, 5)},

    necessaryEnabled() {return this.consentGivenForPurpose1},
    functionalityEnabled() {return this.consentGivenForPurpose2},
    experienceEnabled() {return this.consentGivenForPurpose3},
    measurementEnabled() {return this.consentGivenForPurpose4},
    marketingEnabled() {return this.consentGivenForPurpose5},

    clickupFormsEnabled() {return this.consentGivenForPurpose2},
    youtubeEnabled() {return this.consentGivenForPurpose3},
    mauticEnabled() {return this.consentGivenForPurpose4},
    livechatEnabled() {return this.consentGivenForPurpose2},
  },
});

function consentGivenForPurpose(state: any, iPurpose: number) : boolean {
  return !state.consent_rejected &&
    (state.preference_not_needed || state.consent_given || state.consent_given_purpose[iPurpose]);
}

export type IubendaStore = ReturnType<typeof useIubendaStore>

