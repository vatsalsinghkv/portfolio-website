// IIFE - To avoid flash of default theme: light
(function () {
  if (window.matchMedia('(prefers-color-scheme: dark').matches) {
    // HTML
    document.documentElement.classList.add('dark');
  }
})();
