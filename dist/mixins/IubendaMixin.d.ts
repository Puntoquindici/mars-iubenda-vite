declare global {
    interface Window {
        dataLayer: any;
        __iubCategories: any;
        _iub: any;
    }
}
export declare function useIubenda(): {
    iubendaShouldLog: import("vue").ComputedRef<boolean>;
    clickupFormsEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    mauticEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    youtubeEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    livechatEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    consentGivenForPurpose1: import("vue").ComputedRef<boolean>;
    consentGivenForPurpose2: import("vue").ComputedRef<boolean>;
    consentGivenForPurpose3: import("vue").ComputedRef<boolean>;
    consentGivenForPurpose4: import("vue").ComputedRef<boolean>;
    consentGivenForPurpose5: import("vue").ComputedRef<boolean>;
    necessaryEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    functionalityEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    experienceEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    measurementEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
    marketingEnabled: import("vue").ComputedRef<(state: {
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    } & import("pinia").PiniaCustomStateProperties<{
        log: boolean;
        preference_not_needed: boolean;
        consent_given: boolean;
        consent_rejected: boolean;
        consent_given_purpose: {
            [key: number]: boolean;
        };
        ccpa_opted_out: boolean;
    }>) => boolean>;
};
