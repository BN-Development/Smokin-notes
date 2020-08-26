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


//   $('.parallax-window').parallax({
//     imageSrc: '../images/parallax-image.jpg',
// });

  $('.jarallax').jarallax({
    // speed: 0.2
    imgPosition: "80% top"
  });


});
// jQuery(window).trigger('resize').trigger('scroll');