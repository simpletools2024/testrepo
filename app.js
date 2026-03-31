try {
  const isInIframe = window.self !== window.top;
  const isOnTestRepo = window.location.pathname.startsWith("/testrepo/");

  if (!isInIframe && !isOnTestRepo) {
    window.location.href = "/testrepo/";
  }
} catch (e) {
  // Als dit faalt → zit je in een iframe, dus niks doen
}
