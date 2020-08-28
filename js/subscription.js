$(".subscribe-slider").flickity({
  // options
  cellAlign: "left",
  contain: false,
  prevNextButtons: false,
  pageDots: true,
});

// $(window).width(function(){
//   let windowWidthMob = $('body').innerWidth();
//
//   if ((windowWidthMob >= 768)) {
//     $(".subscribe-slider").flickity({
//       // options
//       cellAlign: "left",
//       contain: false,
//       prevNextButtons: false,
//       pageDots: true,
//     });
//   }
// })



$('.course-class').click( function () {
  $('.course-class').removeClass('active');
  $(this).addClass('active');
});