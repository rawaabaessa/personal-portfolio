import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { debugLog } from "../debugLog.js";

import enHome from "./locales/en/home.json";
import arHome from "./locales/ar/home.json";

// #region agent log
// debugLog("i18n/config.js:init", "i18n module loading", {}, "H4");
// #endregion

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
    },
    ar: {
      home: arHome,
    },
  },
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

// #region agent log
// debugLog(
//   "i18n/config.js:ready",
//   "i18n initialized",
//   { fallbackLng: "ar" },
//   "H4",
// );
// #endregion

export default i18n;
