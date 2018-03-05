$(document).ready(function() {
  /* $('.parallax').parallax(); */

  $('.target').pushpin({
    top: 0,
    bottom: 1500,
    offset: 0
  });

  $('.tooltipped').tooltip({
    delay: 50
  });
});