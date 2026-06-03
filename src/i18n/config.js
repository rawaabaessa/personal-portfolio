import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from "./locales/en/home.json";
import arHome from "./locales/ar/home.json";
import enCommon from "./locales/en/common.json";
import arCommon from "./locales/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: enHome,
      common: enCommon,
    },
    ar: {
      home: arHome,
      common: arCommon,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
