$(".materials-item").click(function() {
  $(".materials-item").each(function(i) {
    $(this).removeClass("materials-item--active")
  })

  $(this).addClass("materials-item--active")
})