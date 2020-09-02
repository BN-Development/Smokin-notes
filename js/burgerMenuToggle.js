$(".header__burger-menu").click(function() {
  $(this).toggleClass("header__burger-menu--active");

  $(".header").toggleClass("mobile-header--open");
});