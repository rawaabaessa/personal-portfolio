import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n/config.js";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { debugLog } from "./debugLog.js";

// #region agent log
window.addEventListener("error", (event) => {
  debugLog(
    "main.jsx:error",
    "window error",
    { message: event.message, filename: event.filename, lineno: event.lineno },
    "H5",
  );
});

window.addEventListener("unhandledrejection", (event) => {
  debugLog(
    "main.jsx:unhandledrejection",
    "unhandled promise rejection",
    { reason: String(event.reason) },
    "H5",
  );
});

debugLog("main.jsx:entry", "main module loaded", {}, "H4");
// #endregion

const rootElement = document.getElementById("root");

// #region agent log
debugLog(
  "main.jsx:root",
  "root element check",
  { hasRoot: !!rootElement },
  "H4",
);
// #endregion

createRoot(rootElement).render(
  <StrictMode>
    <h1>hello world</h1>
    {/* <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider> */}
  </StrictMode>,
);

// #region agent log
debugLog("main.jsx:render", "createRoot.render called", {}, "H4");
// #endregion
