/**
 * The script is encapsulated in an self-executing anonymous function,
 * to avoid conflicts with other libraries
 */
(function ($) {
  /**
   * Declare 'use strict' to the more restrictive code and a bit safer,
   * sparing future problems
   */
  "use strict";

  /***********************************************************************/
  /*****************************  $Content  ******************************/
  /**
   * + Content
   * + Animate Itemas on Start
   * + Isotope
   * + Menu Animation
   * + One Page Scroll
   * + Owl Carousel
   * + Preloader
   * + Newsletter and Register
   * + Sticky menu
   * + Tootips
   */

  /*********************  $Animate Itemas on Start  **********************/
  $(".animated").appear(function () {
    var elem = $(this);
    var animation = elem.data("animation");
    if (!elem.hasClass("visible")) {
      var animationDelay = elem.data("animation-delay");

      if (animationDelay) {
        setTimeout(function () {
          elem.addClass(animation + " visible");
        }, animationDelay);
      } else {
        elem.addClass(animation + " visible");
      }
    }
  });
  /*****************************  $Parallax  *****************************/
  $(".parallax").each(function () {
    var $obj = $(this);
    $(window).scroll(function () {
      if ($(document).width() > 500) {
        var yPos =
          ($obj.offset().top - $(window).scrollTop()) / $obj.data("speed");
        var bgpos = "50% " + yPos + "px";
        $obj.css("background-position", bgpos);
      } else {
        $obj.css("background-position", "50% 0px");
      }
    });
  });
  /*************************  $Text Rotator  *************************/

  $(".rotate").textrotator({
    animation: "dissolve",
    separator: "|",
    speed: 3000,
  });

  /**************************  $Menu Animation  **************************/
  if ($(window).width() >= 768) {
    $(".dropdown").hover(
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(100)
          .fadeIn()
          .slideDown("fast");
      },
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .delay(250)
          .fadeOut()
          .slideUp("slow");
      }
    );
  }

  /***************************  $Easy PaiChart  *******************************/
  if ($(".pie-chart").length) {
    $(".pie-chart").easyPieChart({
      animate: 2000,
      barColor: "#01BAFD",
      trackColor: "#f5f5f5",
      scaleColor: false,
      lineWidth: 7,
      lineCap: "square",
    });
  }
  /*************************  $One Page Scroll  **************************/
  $(".navbar-nav").onePageNav({
    currentClass: "active",
    filter: ":not(.exclude)",
  });

  /***************************  $Owl Carousel  ***************************/
  $("#carousel-testimonials").owlCarousel({
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
  });
  $("#carousel-testimonials")
    .find(".owl-pagination")
    .append('<div class="owl-page"><!-- dummy dot --></div>');

  /****************************  $Preloader  *****************************/
  $(window).load(function () {
    $("#preloader").fadeOut("slow");
  });

  /****************************  $Newsletter and Register  *****************************/
  $("#newsletter, #register").submit(function () {
    var elem = $(this);
    var urlTarget = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: urlTarget,
      dataType: "html",
      data: $(this).serialize(),
      beforeSend: function () {
        elem.prepend(
          "<div class='loading alert'>" +
            "<a class='close' data-dismiss='alert'>×</a>" +
            "Loading" +
            "</div>"
        );
        //elem.find(".loading").show();
      },
      success: function (response) {
        elem.prepend(response);
        //elem.find(".response").html(response);
        elem.find(".loading").hide();
        elem.find("input[type='text'],input[type='email'],textarea").val("");
      },
    });
    return false;
  });

  /***************************  $Sticky menu  ****************************/
  $("header").sticky({ topSpacing: 0, wrapperClassName: "stickyWrapper" });

  /*****************************  $Tootips  ******************************/
  function changeTooltipColorTo(color) {
    //solution from: http://stackoverflow.com/questions/12639708/modifying-twitter-bootstraps-tooltip-colors-based-on-position
    $(".tooltip-inner").css("background-color", color);
    $(".tooltip.top .tooltip-arrow").css("border-top-color", color);
    $(".tooltip.right .tooltip-arrow").css("border-right-color", color);
    $(".tooltip.left .tooltip-arrow").css("border-left-color", color);
    $(".tooltip.bottom .tooltip-arrow").css("border-bottom-color", color);
  }

  $(".device a").tooltip({ placement: "bottom" });
  $(".device a").hover(function () {
    changeTooltipColorTo("#01b9ff");
  });

  $(".social a").tooltip({ placement: "top" });
  $(".social a").hover(function () {
    changeTooltipColorTo("#01b9ff");
  });

  /*************************  $progres bar  *************************/
})(jQuery);
