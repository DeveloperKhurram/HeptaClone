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

  // home slider
  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });

  // owl carousel
  var majorCarousel = $(".js-carousel-1");
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  // owl carousel
  var major2Carousel = $(".js-carousel-2");
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: [
      "<span class='ion-chevron-left'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  // animsition effect
  $(".animsition").animsition({
    inClass: "rotate-in",
    outClass: "rotate-out",
    // inDuration: 1500,
    inDuration: 10,
    outDuration: 1500,
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
