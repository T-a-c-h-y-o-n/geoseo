/* Merchants List - GA4 conversion events (buy clicks, lead magnet funnel) */
(function () {
  "use strict";

  function track(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  /* 1) Buy clicks -> Gumroad checkout links */
  var PRODUCTS = {
    atvkft: { id: "main-list-47", value: 47 },
    xmrkpc: { id: "premium-97", value: 97 },
    afkbcm: { id: "verified-kit-19", value: 19 }
  };

  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest('a[href*="gumroad.com/l/"]') : null;
    if (!a) return;
    var m = (a.getAttribute("href") || "").match(/gumroad\.com\/l\/([A-Za-z0-9]+)/);
    var key = m ? m[1].toLowerCase() : "";
    var p = PRODUCTS[key];
    track("buy_click", {
      product_id: p ? p.id : (key || "unknown"),
      value: p ? p.value : undefined,
      currency: "USD",
      link_text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80)
    });
  });

  /* 2) Try-before-you-buy modal opens (funnel top) */
  if (typeof window.openTryModal === "function") {
    var origOpen = window.openTryModal;
    window.openTryModal = function () {
      track("try_modal_open");
      return origOpen.apply(this, arguments);
    };
  }

  /* 3) generate_lead: fires exactly when the success panel becomes visible
        (i.e. Formspree POST finished and sample download started) */
  var success = document.querySelector(".try-success");
  if (success) {
    var fired = false;
    new MutationObserver(function (mutations, obs) {
      if (!fired && success.hidden === false) {
        fired = true;
        obs.disconnect();
        track("generate_lead");
      }
    }).observe(success, { attributes: true, attributeFilter: ["hidden"] });
  }
})();
