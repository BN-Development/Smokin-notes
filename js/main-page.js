$(document).ready(function() {
  $(".comments-slider").flickity({
    // options
    cellAlign: "center",
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    fade: true,
    friction: 0.3,
    cellSelector: ".comments-slider__item",
    adaptiveHeight: true,
  });
  $(".courses-list").flickity({
    // options
    cellAlign: "center",
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  });
});