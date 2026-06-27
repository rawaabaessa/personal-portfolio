// #region agent log
export const debugLog = (location, message, data = {}, hypothesisId = "H0") => {
  fetch("http://127.0.0.1:7617/ingest/32ba3bfa-f474-4e0c-be94-f7ad19931b82", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "275321",
    },
    body: JSON.stringify({
      sessionId: "275321",
      location,
      message,
      data,
      hypothesisId,
      timestamp: Date.now(),
      runId: "pre-fix",
    }),
  }).catch(() => {});
};
// #endregion
