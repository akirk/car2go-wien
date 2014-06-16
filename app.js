// handle loading data asynchronously and the loading animation

// app class
var App = function() {

  // set the map height to a % of the window, capped at 900px
  // var height = Math.min(window.innerHeight * .675, 900);
  // document.id('map').style.height = Math.floor(height) + 'px';

  // load up the data
    // calculate the data
	if (typeof window.nolines == "undefined") window.nolines = false;
  data = calculate();

  var start = function() {
    // create the graph and draw it out
    graph = new Graph;
    graph.drawTimepath();
    graph.drawTimeline();

    // start it
    graph.animate();
  };
  return {start: start, data:data};
};
