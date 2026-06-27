import { debugLog } from "./debugLog.js";

const DEFAULT_THEME = "light";

export const readStoredTheme = () => {
  // #region agent log
  try {
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
    debugLog(
      "storage.js:readTheme",
      "theme localStorage read ok",
      { savedTheme },
      "H1",
    );
    return savedTheme;
  } catch (error) {
    debugLog(
      "storage.js:readTheme",
      "theme localStorage read failed, using fallback",
      { error: String(error), fallback: DEFAULT_THEME },
      "H1",
    );
    return DEFAULT_THEME;
  }
  // #endregion
};

export const writeStoredTheme = (theme) => {
  // #region agent log
  try {
    localStorage.setItem("theme", theme);
    debugLog(
      "storage.js:writeTheme",
      "theme localStorage write ok",
      { theme },
      "H2",
    );
  } catch (error) {
    debugLog(
      "storage.js:writeTheme",
      "theme localStorage write failed",
      { theme, error: String(error) },
      "H2",
    );
  }
  // #endregion
};

export const readStoredLang = () => {
  // #region agent log
  try {
    const savedLang = localStorage.getItem("lang");
    debugLog(
      "storage.js:readLang",
      "lang localStorage read ok",
      { savedLang },
      "H2",
    );
    return savedLang;
  } catch (error) {
    debugLog(
      "storage.js:readLang",
      "lang localStorage read failed, using fallback",
      { error: String(error), fallback: null },
      "H2",
    );
    return null;
  }
  // #endregion
};

export const writeStoredLang = (lang) => {
  // #region agent log
  try {
    localStorage.setItem("lang", lang);
    debugLog(
      "storage.js:writeLang",
      "lang localStorage write ok",
      { lang },
      "H2",
    );
  } catch (error) {
    debugLog(
      "storage.js:writeLang",
      "lang localStorage write failed",
      { lang, error: String(error) },
      "H2",
    );
  }
  // #endregion
};
