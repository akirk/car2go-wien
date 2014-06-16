// when we're ready, make the app
window.onload = function() {
  mobile = new RegExp('(iphone|android)', 'i')
    .test(navigator.userAgent);
  document.getElementById("show_lines").onchange = function() {
  	window.nolines = !this.checked;
  };
  window.nolines = true;
  app = new App();
  app.start();
}
