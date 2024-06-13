import type { IubendaStore } from "./store/IubendaStore"

/******************************************************************************
 * Iubenda setup and install
 *****************************************************************************/
declare global {
  interface Window {
    dataLayer: any
    __iubCategories: any
    _iub: any
    __lc: any
    LogRocket: any
    mt: any
    iub: {
      level1: boolean
      level2: boolean
      level3: boolean
      level4: boolean
      level5: boolean
    }
  }
}

declare let process: any

// helper function to extract cookie the hard way
const getCookie = function(name: string) {
  return document.cookie
  .split("; ")
  .find((row) => row.startsWith(name+'='))
  ?.split("=")[1];
}

interface UserInfo {
  user_id: string
  team_id: string
  user_plan: string
}
const enableLevel = function(level: number, userInfo: UserInfo) {
  console.log("Iubenda enable level", level)
  switch(level) {
    case 1:
      // TODO: enable logrocket script when we have enough traffic?
      // TODO: load logrocket library
      // window.LogRocket && window.LogRocket.init('sjxbwd/myarstudio-website');
      // console.log("Iubenda -> lvl 1  : logrocket");

      // Google TagManager: with Consent mode v2 it should honor the user preferences
      console.log("Iubenda -> GTag");
      // @ts-ignore
      (function (w, d, s, l, i) {w[l] = w[l] || []; w[l].push({'gtm.start':new Date().getTime(),event: 'gtm.js'}); const f = d.getElementsByTagName(s)[0];const j = d.createElement(s); const dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
      })(window, document, 'script', 'dataLayer', 'GTM-K9HP22W')

      window.iub.level1 = true
      break
    case 2:
      // LiveChat
      console.log("Iubenda -> LiveChat");
      window.__lc = window.__lc || {};
      window.__lc.license = 12709530;
      // @ts-ignore
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
      
      window.iub.level2 = true
      break
    case 3:
      window.iub.level3 = true
      break
    case 4:
      window.iub.level4 = true
      break
    case 5:
      // Mautic
      console.log("Iubenda -> Mautic");
      // Note: using cached version of mtc.js: see script in /var/www/html/cache-mtc.sh on the mautic web server
      // @ts-ignore
      (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n; w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)})(window,document,'script','https://ma.myarstudio.cloud/media/js/mtc.js','mt');
      if (userInfo && userInfo.user_id) {
        (window).mt('send', 'pageview', { panel_user_id: userInfo.user_id })
      } else {
        (window).mt('send', 'pageview')
      }
      window.iub.level5 = true
      break
  }
}

const installIubenda = function(lang: string, iubendaShouldLog: boolean = true, $store: IubendaStore | undefined = undefined, baseUrl: string = 'https://www.myarstudio.cloud') {
  console.log("installIubenda10", lang, iubendaShouldLog)
  window.iub = {
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    level5: false
  }
  const siteId = 2701995
  const cookiePolicies : {[id: string]: number} = {
    'en': 20018456,
    'it': 61469158,
    'de': 21462515,
  }
  const cookiePolicyId = cookiePolicies[lang] || cookiePolicies.en
  const banner = {
    'acceptButtonCaptionColor': '#FFFFFF',
    'acceptButtonColor': '#0073CE',
    'acceptButtonDisplay': true,
    'backgroundColor': '#FFFFFF',
    'backgroundOverlay': false,
    'brandBackgroundColor': '#FFFFFF',
    'brandTextColor': '#000000',
    'closeButtonDisplay': false,
    'customizeButtonCaptionColor': '#4D4D4D',
    'customizeButtonColor': '#DADADA',
    'customizeButtonDisplay': true,
    'explicitWithdrawal': true,
    'listPurposes': true,
    'logo': 'https://www.myarstudio.cloud/assets/img/logo.d9ac90d.svg',
    'position': 'float-bottom-center',
    'rejectButtonCaptionColor': '#FFFFFF',
    'rejectButtonColor': '#0073CE',
    'rejectButtonDisplay': true,
    'showPurposesToggles': true,
    'textColor': '#000000'
  }

  if ($store) { $store.setShouldLog(iubendaShouldLog) }


  // let shallInstall = false

  // try {
  //   // process.client is used in nuxt.js build
  //   console.log("process", process, "process.client", process && process.client || false)
  //   if(process && process.client) {
  //     shallInstall = true
  //   }
  // } catch(e)  {
  //   // process is not defined, we are in client mode
  //   console.log("Iubenda Install catch")
  // }
  const shallInstall = true

  console.log("shallInstall", shallInstall)

  if( shallInstall ) {
    const dataLayer = window.dataLayer || null
    iubendaShouldLog &&
      console.log('App.vue installIubenda language: ', lang,
        'siteId:', siteId,
        'cookiePolicyId:', cookiePolicyId)
    window.__iubCategories = {}
    window._iub = window._iub || {}
    window._iub.csConfiguration = {
      'askConsentAtCookiePolicyUpdate': true,
      'countryDetection': true,
      'applyGdprForCH': false,
      'enableFadp': true,
      'enableLgpd': true,
      'enableUspr': true,
      'usprPurposes': 's,adv',
      'gdprAppliesGlobally': false,
      'lgpdAppliesGlobally': false,
      lang,
      'localConsentDomain': 'myarstudio.cloud',
      'logLevel': 'debug',
      'perPurposeConsent': true,
      siteId,
      'whitelabel': false,
      cookiePolicyId,
      'reloadOnConsent': true,
      banner,
      // https://www.iubenda.com/en/help/74198-google-consent-mode-set-up-google-tag-manager-with-iubenda
      // see "Manual embedding"
      'googleConsentMode': 'template',
      'emitGtmEvents': true,
      'callback': {
        'onPreferenceExpressedOrNotNeeded': (preference: any) => { // does not bind? using self
          window.__iubCategories = window._iub.cs.consent.purposes
          iubendaShouldLog && console.log('Iubenda cb ')

          const ccpaOptedOut = window._iub.cs.api.isCcpaOptedOut()
          if (dataLayer) {
            dataLayer.push({
              iubenda_ccpa_opted_out: ccpaOptedOut
            })
          }
          if ($store) { $store.setCcpaOptedOut(ccpaOptedOut) }
          iubendaShouldLog && console.log('Iubenda cb: GTag dataLayer push ', 'iubenda_ccpa_opted_out:' + ccpaOptedOut)

          if (!preference) {
            if (dataLayer) {
              dataLayer.push({
                event: 'iubenda_preference_not_needed'
              })
            }
            if ($store) { $store.setPreferenceNotNeeded(true) }
            iubendaShouldLog && console.log('Iubenda cb: GTag dataLayer push ', 'iubenda_preference_not_needed')
          } else {
            if ($store) { $store.setPreferenceNotNeeded(false) }
            if (preference.consent === true) {
              if (dataLayer) {
                dataLayer.push({
                  event: 'iubenda_consent_given'
                })
              }
              if ($store) { $store.setConsetGiven(true) }
              iubendaShouldLog && console.log('Iubenda cb: GTag dataLayer push ', 'iubenda_consent_given')
            } else if (preference.consent === false) {
              if (dataLayer) {
                dataLayer.push({
                  event: 'iubenda_consent_rejected'
                })
              }
              if ($store) { $store.setConsetRejected(true) }
              iubendaShouldLog && console.log('Iubenda cb: GTag dataLayer push ', 'iubenda_consent_rejected')
            } else if (preference.purposes) {
              if ($store) { $store.resetConsetGivenPurpose() }
              for (const purposeId in preference.purposes) {
                if (preference.purposes[purposeId]) {
                  if (dataLayer) {
                    dataLayer.push({
                      event: 'iubenda_consent_given_purpose_' + purposeId
                    })
                  }
                  if ($store) { $store.setConsetGivenPurpose(+purposeId, true) }
                  iubendaShouldLog && console.log('Iubenda cb: GTag dataLayer push ', 'iubenda_consent_given_purpose_' + purposeId)


                  // detect if we have user info
                  const cookieValue = getCookie('mars_user_info')
                  console.log('mars cookie user', cookieValue)
                  const userInfo = cookieValue && JSON.parse(cookieValue)
                  if (userInfo && userInfo.user_id && userInfo.team_id && userInfo.user_plan) {
                    window.dataLayer = window.dataLayer || []
                    window.dataLayer.push({
                      user_id: userInfo.user_id,
                      team_id: userInfo.team_id,
                      user_plan: userInfo.user_plan
                    })
                  }
                  enableLevel(+purposeId, userInfo)
                }
              }
            }
            // TODO: should we do something spefic for US Privacy Law?
          }
        }
      },
    }

    const iubendaScripts: {[id: string]: string}[] = [
      { src: '//cs.iubenda.com/sync/2701995.js' },
      { src: '//cdn.iubenda.com/cs/gpp/stub.js' },
      // local modified version of
      // { src: '//cdn.iubenda.com/cs/iubenda_cs.js', charset: 'UTF-8', async: '' },
      // NOTE: this downloads a versioned script. It probably must be updated regurarily.
      // There is one file per language: they have been modified to encapsulate the iubenda elements
      // with a <section> element to avoid double H1 in page
      { src: `${baseUrl}/js/iubenda/iubenda_cs.js`, charset: 'UTF-8', async: '' },
      // integrated into this script: no longer needed the external bootstrap
      // { src: `${baseUrl}/js/iubendaBootstrap.js`, charset: 'UTF-8', async: '' },

      // old setup:
      // { src: '/js/debugIubendaBootstrap.js' },
      // { src: '//cdn.iubenda.com/cs/ccpa/stub.js' },
      // { src: '//cdn.iubenda.com/cs/iubenda_cs.js', charset: 'UTF-8', async: '' },
    ]
    for (const iubendaScript of iubendaScripts) {
      iubendaShouldLog && console.log('Appending script tag', iubendaScript)
      const script = document.createElement('script')
      const keys = Object.keys(iubendaScript)
      keys.forEach((key) => {
        script.setAttribute(key, iubendaScript[key])
      })
      document.head.appendChild(script)
    }
  }
}

export default installIubenda

