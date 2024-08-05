import type { IubendaStore } from "./store/IubendaStore";
/******************************************************************************
 * Iubenda setup and install
 *****************************************************************************/
declare global {
    interface Window {
        dataLayer: any;
        __iubCategories: any;
        _iub: any;
        __lc: any;
        LogRocket: any;
        mt: any;
        iub: {
            level1: boolean;
            level2: boolean;
            level3: boolean;
            level4: boolean;
            level5: boolean;
        };
    }
}
declare const installIubenda: (lang: string, iubendaShouldLog?: boolean, $store?: IubendaStore | undefined, baseUrl?: string) => void;
export default installIubenda;
