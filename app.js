if (window.self === window.top) {
  // Niet in een iframe → redirect
  window.location.href = "/testrepo/";
} else {
  // Wel in een iframe → niets doen
}
