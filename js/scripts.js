$(document).ready(function() {
  // --------------- HEADER ------------------
  $(".header__nav-item--submenu").click(function() {
    $(this).toggleClass("header__nav-item--submenu-active");
  });
  $(".header-mobile__nav-item--submenu").click(function() {
    $(this).toggleClass("header-mobile__nav-item--submenu-active");
  });
  $("body").on("click", function(e) {
    if (!$(e.target).closest(".header__nav-item--submenu").length) {
      $(".header__nav-item--submenu").removeClass(
        "header__nav-item--submenu-active"
      );
    }
  });
  // --------------- HEADER END------------------
  // --------- MENU ---------------------
  $(".header__burger-menu").click(function() {
    $(this).toggleClass("header__burger-menu--active");

    $(".header").toggleClass("mobile-header--open");
  });
  // --------- MENU END ---------------------
  // --------- SELECT ---------------------
  $(".select-wrap span").each(function() {
    $(this).click(function() {
      if ($(this).hasClass("active")) {
        $(".select-wrap span").removeClass("active");
      } else {
        $(".select-wrap span").removeClass("active");
        $(this).addClass("active");
      }
    });
  });
  function initSelect() {
    $(".select-wrap ul li").each(function() {
      $(this).click(function() {
        $(this)
          .siblings()
          .removeClass("active");
        $(this).addClass("active");
        let spanSelected = $(this)
          .closest(".select-wrap")
          .find("span");
        let inputSelected = $(this)
          .closest(".select-wrap")
          .find("input");
        spanSelected.html($(this).html());
        spanSelected.removeClass("active");
        spanSelected.attr("data-value", $(this).data("id"));
        inputSelected.attr("value", `${$(this).data("id")}#${$(this).html()}`);
      });
    });
  }
  if (document.querySelector(".select-wrap ul li")) {
    initSelect();
  }
  $("body").on("click", function(e) {
    if (!$(e.target).closest(".select-wrap").length) {
      $(".select-wrap span").removeClass("active");
    }
  });
  // --------- SELECT END ---------------------
  // --------- Pikaday  ---------------------
  if (document.getElementById("birthday")) {
    var picker = new Pikaday({
      field: document.getElementById("birthday"),
      format: "DD/MM/YYYY",
      toString(date, format) {
        const day = date.toLocaleString("en-US", { day: "2-digit" });
        // const day = date.getDate();
        const month = date.toLocaleString("en-US", {
          month: "2-digit",
        });
        const year = date.toLocaleString("en-US", { year: "numeric" });
        return `${day}/${month}/${year}`;
      },
      yearRange: 100,
      defaultDate: true,
      firstDay: 1,
    });
  }
  // --------- Pikaday END ---------------------
  $(".toggle-password").click(function() {
    $(this).toggleClass("open");
    let input = $(this).siblings("input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});