if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function(reg) {
    console.log("Service worker registered!");
    console.log('Registration succeeded. Scope is ' + reg.scope);
  });
}
