// aos
AOS.init({
  duration: 1000,
  once: true,
});

(function ($) {
  "use strict";

  $(".menu-toggle").click(function () {
    var $this = $(this);
    if ($("body").hasClass("menu-open")) {
      $this.removeClass("open");
      $(".js-navbar").fadeOut(400);
      $("body").removeClass("menu-open");
    } else {
      $this.addClass("open");
      $(".js-navbar").fadeIn(400);
      $("body").addClass("menu-open");
    }
  });

  var $root = $("html, body");

  $('a.smoothscroll[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );

    return false;
  });

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      $this.find(".dropdown-menu").removeClass("show");
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // animsition effect
  $(".animsition").animsition({
    inClass: "fade-in-left-sm",
    outClass: "fade-out-right-sm",
    inDuration: 400,
    outDuration: 400,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });
})(jQuery);
