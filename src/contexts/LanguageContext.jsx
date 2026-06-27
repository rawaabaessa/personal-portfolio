import { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { readStoredLang, writeStoredLang } from "../storage.js";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    writeStoredLang(lang);
  };

  const toggleLang = () => {
    changeLang(i18n.language === "en" ? "ar" : "en");
  };

  useEffect(() => {
    const savedLang = readStoredLang();

    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language === "ar" ? "ar" : "en";
  }, [i18n.language]);

  return (
    <LanguageContext.Provider
      value={{
        lang: i18n.language,
        changeLang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
