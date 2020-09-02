$(document).ready(function(){
  if ($(window).width() < 768) {
    $(".expand-course-section").each(function(i) {
      $(this).click(function() {
        $(this).toggleClass("expand-course-section--expand");

        if (i == 0) {
          $(".course-expand__section-files").toggleClass("course-expand__section--active");
        } else if (i == 1) {
          $(".course-expand__section-announcements").toggleClass("course-expand__section--active");
        }
      });
    });
  }
})