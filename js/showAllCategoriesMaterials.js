$(".materials-heading__category-link").click(function() {
  $('.materials-heading__all-items').removeClass("materials-heading__all-items--active");
  $(".materials-heading__category").removeClass("materials-heading__category--open");
})

$('.materials-heading__show-more').click( function () {
  $(".materials-heading__list").toggleClass("active");
  $(".materials-heading__category").toggleClass("materials-heading__category--open");
})


// $('.materials-heading__category-item').click( function () {
//   $(".materials-heading__list").removeClass("active");
// })

$(window).width(function(){
  let windowWidthMob = $('body').innerWidth();

  if ((windowWidthMob <= 1199)) {
    $(".materials-heading__all-items").click(function() {
      $('.materials-heading__category').toggleClass('materials-heading__category--open')
    });
  } else {
    $(".materials-heading__all-items").click(function() {
      $(this).toggleClass("materials-heading__all-items--active");
    });
  }

})