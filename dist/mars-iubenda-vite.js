import { defineStore as w } from "pinia";
import { computed as a } from "vue";
const h = w("iubendaStore", {
  state: () => ({
    log: !0,
    // if true it logs on the console (debug)
    preference_not_needed: !1,
    consent_given: !1,
    consent_rejected: !1,
    consent_given_purpose: {
      1: !1,
      2: !1,
      3: !1,
      4: !1,
      5: !1
    },
    ccpa_opted_out: !1
  }),
  actions: {
    setShouldLog(e) {
      this.log = e;
    },
    setPreferenceNotNeeded(e) {
      this.preference_not_needed = e;
    },
    setConsetGiven(e) {
      this.consent_given = e;
    },
    setConsetRejected(e) {
      this.consent_rejected = e;
    },
    setConsetGivenPurpose(e, t) {
      this.consent_given_purpose[e] = t;
    },
    resetConsetGivenPurpose() {
      for (const e of [1, 2, 3, 4, 5])
        this.consent_given_purpose[e] = !1;
    },
    setCcpaOptedOut(e) {
      this.ccpa_opted_out = e;
    }
  },
  getters: {
    consentGivenForPurpose1(e) {
      return v(e, 1);
    },
    consentGivenForPurpose2(e) {
      return v(e, 2);
    },
    consentGivenForPurpose3(e) {
      return v(e, 3);
    },
    consentGivenForPurpose4(e) {
      return v(e, 4);
    },
    consentGivenForPurpose5(e) {
      return v(e, 5);
    },
    necessaryEnabled() {
      return this.consentGivenForPurpose1;
    },
    functionalityEnabled() {
      return this.consentGivenForPurpose2;
    },
    experienceEnabled() {
      return this.consentGivenForPurpose3;
    },
    measurementEnabled() {
      return this.consentGivenForPurpose4;
    },
    marketingEnabled() {
      return this.consentGivenForPurpose5;
    },
    clickupFormsEnabled() {
      return this.consentGivenForPurpose2;
    },
    youtubeEnabled() {
      return this.consentGivenForPurpose3;
    },
    mauticEnabled() {
      return this.consentGivenForPurpose4;
    },
    livechatEnabled() {
      return this.consentGivenForPurpose2;
    }
  }
});
function v(e, t) {
  return !e.consent_rejected && (e.preference_not_needed || e.consent_given || e.consent_given_purpose[t]);
}
function G() {
  const e = h(), t = a(() => e.log), n = a(() => e.clickupFormsEnabled), _ = a(() => e.mauticEnabled), u = a(() => (t.value && console.log("youtubeEnabled", e.youtubeEnabled), e.youtubeEnabled)), l = a(() => e.livechatEnabled), o = a(() => e.consentGivenForPurpose1), s = a(() => e.consentGivenForPurpose2), f = a(() => e.consentGivenForPurpose3), r = a(() => e.consentGivenForPurpose4), g = a(() => e.consentGivenForPurpose5), i = a(() => e.necessaryEnabled), d = a(() => e.functionalityEnabled), b = a(() => e.experienceEnabled), p = a(() => e.measurementEnabled), c = a(() => e.marketingEnabled);
  return {
    iubendaShouldLog: t,
    clickupFormsEnabled: n,
    mauticEnabled: _,
    youtubeEnabled: u,
    livechatEnabled: l,
    consentGivenForPurpose1: o,
    consentGivenForPurpose2: s,
    consentGivenForPurpose3: f,
    consentGivenForPurpose4: r,
    consentGivenForPurpose5: g,
    necessaryEnabled: i,
    functionalityEnabled: d,
    experienceEnabled: b,
    measurementEnabled: p,
    marketingEnabled: c
  };
}
const F = function(e) {
  var t;
  return (t = document.cookie.split("; ").find((n) => n.startsWith(e + "="))) == null ? void 0 : t.split("=")[1];
}, y = function(e, t) {
  switch (console.log("Iubenda enable level", e), e) {
    case 1:
      window.iub.level1 = !0;
      break;
    case 2:
      console.log("Iubenda -> LiveChat"), window.__lc = window.__lc || {}, window.__lc.license = 12709530, function(n, _, u) {
        function l(s) {
          return o._h ? o._h.apply(null, s) : o._q.push(s);
        }
        var o = { _q: [], _h: null, _v: "2.0", on: function() {
          l(["on", u.call(arguments)]);
        }, once: function() {
          l(["once", u.call(arguments)]);
        }, off: function() {
          l(["off", u.call(arguments)]);
        }, get: function() {
          if (!o._h)
            throw new Error("[LiveChatWidget] You can't use getters before load.");
          return l(["get", u.call(arguments)]);
        }, call: function() {
          l(["call", u.call(arguments)]);
        }, init: function() {
          var s = _.createElement("script");
          s.async = !0, s.type = "text/javascript", s.src = "https://cdn.livechatinc.com/tracking.js", _.head.appendChild(s);
        } };
        !n.__lc.asyncInit && o.init(), n.LiveChatWidget = n.LiveChatWidget || o;
      }(window, document, [].slice), window.iub.level2 = !0;
      break;
    case 3:
      window.iub.level3 = !0;
      break;
    case 4:
      window.iub.level4 = !0;
      break;
    case 5:
      console.log("Iubenda -> Mautic"), function(n, _, u, l, o, s, f) {
        n.MauticTrackingObject = o, n[o] = n[o] || function() {
          (n[o].q = n[o].q || []).push(arguments);
        }, s = _.createElement(u), f = _.getElementsByTagName(u)[0], s.async = 1, s.src = l, f.parentNode.insertBefore(s, f);
      }(window, document, "script", "https://ma.myarstudio.cloud/media/js/mtc.js", "mt"), t && t.user_id ? window.mt("send", "pageview", { panel_user_id: t.user_id }) : window.mt("send", "pageview"), window.iub.level5 = !0;
      break;
  }
}, E = function(e, t = !0, n = void 0, _ = "https://www.myarstudio.cloud") {
  console.log("installIubenda11", e, t), window.iub = {
    level1: !1,
    level2: !1,
    level3: !1,
    level4: !1,
    level5: !1
  };
  const u = 2701995, l = {
    en: 20018456,
    it: 61469158,
    de: 21462515
  }, o = l[e] || l.en, s = {
    acceptButtonCaptionColor: "#FFFFFF",
    acceptButtonColor: "#0073CE",
    acceptButtonDisplay: !0,
    backgroundColor: "#FFFFFF",
    backgroundOverlay: !1,
    brandBackgroundColor: "#FFFFFF",
    brandTextColor: "#000000",
    closeButtonDisplay: !1,
    customizeButtonCaptionColor: "#4D4D4D",
    customizeButtonColor: "#DADADA",
    customizeButtonDisplay: !0,
    explicitWithdrawal: !0,
    listPurposes: !0,
    logo: "https://www.myarstudio.cloud/assets/img/logo.d9ac90d.svg",
    position: "float-bottom-center",
    rejectButtonCaptionColor: "#FFFFFF",
    rejectButtonColor: "#0073CE",
    rejectButtonDisplay: !0,
    showPurposesToggles: !0,
    textColor: "#000000"
  };
  n && n.setShouldLog(t), console.log("shallInstall", !0);
  {
    const r = window.dataLayer || null;
    t && console.log(
      "App.vue installIubenda language: ",
      e,
      "siteId:",
      u,
      "cookiePolicyId:",
      o
    ), window.__iubCategories = {}, window._iub = window._iub || {}, window._iub.csConfiguration = {
      askConsentAtCookiePolicyUpdate: !0,
      countryDetection: !0,
      applyGdprForCH: !1,
      enableFadp: !0,
      enableLgpd: !0,
      enableUspr: !0,
      usprPurposes: "s,adv",
      gdprAppliesGlobally: !1,
      lgpdAppliesGlobally: !1,
      lang: e,
      localConsentDomain: "myarstudio.cloud",
      logLevel: "debug",
      perPurposeConsent: !0,
      siteId: u,
      whitelabel: !1,
      cookiePolicyId: o,
      reloadOnConsent: !0,
      banner: s,
      // https://www.iubenda.com/en/help/74198-google-consent-mode-set-up-google-tag-manager-with-iubenda
      // see "Manual embedding"
      googleConsentMode: "template",
      emitGtmEvents: !0,
      callback: {
        onPreferenceExpressedOrNotNeeded: (i) => {
          window.__iubCategories = window._iub.cs.consent.purposes, t && console.log("Iubenda cb ");
          const d = window._iub.cs.api.isCcpaOptedOut();
          if (r && r.push({
            iubenda_ccpa_opted_out: d
          }), n && n.setCcpaOptedOut(d), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_ccpa_opted_out:" + d), !i)
            r && r.push({
              event: "iubenda_preference_not_needed"
            }), n && n.setPreferenceNotNeeded(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_preference_not_needed");
          else if (n && n.setPreferenceNotNeeded(!1), i.consent === !0)
            r && r.push({
              event: "iubenda_consent_given"
            }), n && n.setConsetGiven(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_given");
          else if (i.consent === !1)
            r && r.push({
              event: "iubenda_consent_rejected"
            }), n && n.setConsetRejected(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_rejected");
          else if (i.purposes) {
            n && n.resetConsetGivenPurpose();
            for (const b in i.purposes)
              if (i.purposes[b]) {
                r && r.push({
                  event: "iubenda_consent_given_purpose_" + b
                }), n && n.setConsetGivenPurpose(+b, !0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_given_purpose_" + b);
                const p = F("mars_user_info");
                console.log("mars cookie user", p);
                const c = p && JSON.parse(p);
                c && c.user_id && c.team_id && c.user_plan && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                  user_id: c.user_id,
                  team_id: c.team_id,
                  user_plan: c.user_plan
                })), y(+b, c);
              }
          }
        }
      }
    };
    const g = [
      { src: "//cs.iubenda.com/sync/2701995.js" },
      { src: "//cdn.iubenda.com/cs/gpp/stub.js" },
      // local modified version of
      // { src: '//cdn.iubenda.com/cs/iubenda_cs.js', charset: 'UTF-8', async: '' },
      // NOTE: this downloads a versioned script. It probably must be updated regurarily.
      // There is one file per language: they have been modified to encapsulate the iubenda elements
      // with a <section> element to avoid double H1 in page
      { src: `${_}/js/iubenda/iubenda_cs.js`, charset: "UTF-8", async: "" }
      // integrated into this script: no longer needed the external bootstrap
      // { src: `${baseUrl}/js/iubendaBootstrap.js`, charset: 'UTF-8', async: '' },
      // old setup:
      // { src: '/js/debugIubendaBootstrap.js' },
      // { src: '//cdn.iubenda.com/cs/ccpa/stub.js' },
      // { src: '//cdn.iubenda.com/cs/iubenda_cs.js', charset: 'UTF-8', async: '' },
    ];
    for (const i of g) {
      t && console.log("Appending script tag", i);
      const d = document.createElement("script");
      Object.keys(i).forEach((p) => {
        d.setAttribute(p, i[p]);
      }), document.head.appendChild(d);
    }
  }
  console.log("Iubenda -> GTag"), function(r, g, i, d, b) {
    r[d] = r[d] || [], r[d].push({ "gtm.start": (/* @__PURE__ */ new Date()).getTime(), event: "gtm.js" });
    const p = g.getElementsByTagName(i)[0], c = g.createElement(i), m = "";
    c.async = !0, c.src = "https://www.googletagmanager.com/gtm.js?id=" + b + m, p.parentNode.insertBefore(c, p);
  }(window, document, "script", "dataLayer", "GTM-K9HP22W");
};
export {
  E as installIubenda,
  G as useIubenda,
  h as useIubendaStore
};
