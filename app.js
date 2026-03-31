try {
  const isInIframe = window.self !== window.top;
  const isOnExactTestRepo = window.location.pathname === "/testrepo/";

  if (!isInIframe && !isOnExactTestRepo) {
    window.location.href = "/testrepo/";
  }
} catch (e) {
  // Als error → zit in iframe → niks doen
}
