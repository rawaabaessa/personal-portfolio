import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { debugLog } from "./debugLog.js";

function App() {
  // #region agent log
  useEffect(() => {
    debugLog("App.jsx:mount", "App mounted successfully", {}, "H5");
  }, []);
  // #endregion

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
