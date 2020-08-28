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
        autoPlay: 7000
    });



  function flickDesk() {

    $(".courses-list").flickity({
      // options
      cellAlign: "center",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      groupCells: true
    });
  }
  function flickMob() {
    $(".courses-list").flickity({
      // options
      cellAlign: "center",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
    });
  }

  function jac() {
    $('.jarallax').jarallax({
      speed: 0.4,
      imgPosition: "80% top"
    });
  }

  $(window).width(function(){
    let windowWidthMob = $('body').innerWidth();

    if ((windowWidthMob <= 1023)) {
      flickMob()
    } else {
      flickDesk()
    }

    if ((windowWidthMob <= 767)) {
      console.log(1)

      $('.jarallax').jarallax({
        speed: 0.4,
        imgPosition: "80% top"
      });
    }
  })



});