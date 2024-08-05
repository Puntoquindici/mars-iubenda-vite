const w = function(u) {
  var t;
  return (t = document.cookie.split("; ").find((e) => e.startsWith(u + "="))) == null ? void 0 : t.split("=")[1];
}, m = function(u, t) {
  switch (console.log("Iubenda enable level", u), u) {
    case 1:
      window.iub.level1 = !0;
      break;
    case 2:
      console.log("Iubenda -> LiveChat"), window.__lc = window.__lc || {}, window.__lc.license = 12709530, function(e, _, c) {
        function d(o) {
          return n._h ? n._h.apply(null, o) : n._q.push(o);
        }
        var n = { _q: [], _h: null, _v: "2.0", on: function() {
          d(["on", c.call(arguments)]);
        }, once: function() {
          d(["once", c.call(arguments)]);
        }, off: function() {
          d(["off", c.call(arguments)]);
        }, get: function() {
          if (!n._h)
            throw new Error("[LiveChatWidget] You can't use getters before load.");
          return d(["get", c.call(arguments)]);
        }, call: function() {
          d(["call", c.call(arguments)]);
        }, init: function() {
          var o = _.createElement("script");
          o.async = !0, o.type = "text/javascript", o.src = "https://cdn.livechatinc.com/tracking.js", _.head.appendChild(o);
        } };
        !e.__lc.asyncInit && n.init(), e.LiveChatWidget = e.LiveChatWidget || n;
      }(window, document, [].slice), window.iub.level2 = !0;
      break;
    case 3:
      window.iub.level3 = !0;
      break;
    case 4:
      window.iub.level4 = !0;
      break;
    case 5:
      console.log("Iubenda -> Mautic"), function(e, _, c, d, n, o, g) {
        e.MauticTrackingObject = n, e[n] = e[n] || function() {
          (e[n].q = e[n].q || []).push(arguments);
        }, o = _.createElement(c), g = _.getElementsByTagName(c)[0], o.async = 1, o.src = d, g.parentNode.insertBefore(o, g);
      }(window, document, "script", "https://ma.myarstudio.cloud/media/js/mtc.js", "mt"), t && t.user_id ? window.mt("send", "pageview", { panel_user_id: t.user_id }) : window.mt("send", "pageview"), window.iub.level5 = !0;
      break;
  }
}, v = function(u, t = !0, e = void 0, _ = "https://www.myarstudio.cloud") {
  console.log("installIubenda11", u, t), window.iub = {
    level1: !1,
    level2: !1,
    level3: !1,
    level4: !1,
    level5: !1
  };
  const c = 2701995, n = {
    en: 20018456,
    it: 61469158,
    de: 21462515
  }[u], o = {
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
  e && e.setShouldLog(t), console.log("shallInstall", !0);
  {
    const s = window.dataLayer || null;
    t && console.log(
      "App.vue installIubenda language: ",
      u,
      "siteId:",
      c,
      "cookiePolicyId:",
      n
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
      lang: u,
      localConsentDomain: "myarstudio.cloud",
      logLevel: "debug",
      perPurposeConsent: !0,
      siteId: c,
      whitelabel: !1,
      cookiePolicyId: n,
      reloadOnConsent: !0,
      banner: o,
      // https://www.iubenda.com/en/help/74198-google-consent-mode-set-up-google-tag-manager-with-iubenda
      // see "Manual embedding"
      googleConsentMode: "template",
      emitGtmEvents: !0,
      callback: {
        onPreferenceExpressedOrNotNeeded: (a) => {
          window.__iubCategories = window._iub.cs.consent.purposes, t && console.log("Iubenda cb ");
          const l = window._iub.cs.api.isCcpaOptedOut();
          if (s && s.push({
            iubenda_ccpa_opted_out: l
          }), e && e.setCcpaOptedOut(l), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_ccpa_opted_out:" + l), !a)
            s && s.push({
              event: "iubenda_preference_not_needed"
            }), e && e.setPreferenceNotNeeded(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_preference_not_needed");
          else if (e && e.setPreferenceNotNeeded(!1), a.consent === !0)
            s && s.push({
              event: "iubenda_consent_given"
            }), e && e.setConsetGiven(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_given");
          else if (a.consent === !1)
            s && s.push({
              event: "iubenda_consent_rejected"
            }), e && e.setConsetRejected(!0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_rejected");
          else if (a.purposes) {
            e && e.resetConsetGivenPurpose();
            for (const p in a.purposes)
              if (a.purposes[p]) {
                s && s.push({
                  event: "iubenda_consent_given_purpose_" + p
                }), e && e.setConsetGivenPurpose(+p, !0), t && console.log("Iubenda cb: GTag dataLayer push ", "iubenda_consent_given_purpose_" + p);
                const r = w("mars_user_info");
                console.log("mars cookie user", r);
                const i = r && JSON.parse(r);
                i && i.user_id && i.team_id && i.user_plan && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                  user_id: i.user_id,
                  team_id: i.team_id,
                  user_plan: i.user_plan
                })), m(+p, i);
              }
          }
        }
      }
    };
    const b = [
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
    for (const a of b) {
      t && console.log("Appending script tag", a);
      const l = document.createElement("script");
      Object.keys(a).forEach((r) => {
        l.setAttribute(r, a[r]);
      }), document.head.appendChild(l);
    }
  }
  console.log("Iubenda -> GTag"), function(s, b, a, l, p) {
    s[l] = s[l] || [], s[l].push({ "gtm.start": (/* @__PURE__ */ new Date()).getTime(), event: "gtm.js" });
    const r = b.getElementsByTagName(a)[0], i = b.createElement(a), f = "";
    i.async = !0, i.src = "https://www.googletagmanager.com/gtm.js?id=" + p + f, r.parentNode.insertBefore(i, r);
  }(window, document, "script", "dataLayer", "GTM-K9HP22W");
};
v("en", !0);
