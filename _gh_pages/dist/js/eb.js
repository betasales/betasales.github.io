$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });

  $(".resume").sparkle( {
    color: "#FFFFFF",
    count: 30,
    overlap: 0,
    speed: 1,
    minSize: 4,
    maxSize: 7,
    direction: "both"
  });

  // $('.hex-nav').hover(function () {
  //   $('.fa').addClass('blue');
  // }, function () {
  //   console.log('hello world')
  //   $('.fa').removeClass('blue');
  // });

  // $('.hex-nav .hex-fa').hover(function () {
  //   console.log("hello world")
  //   $('.fa').addClass('white');
  //   $('.hexagon').addClass('.hexagon.white');
  // });
});